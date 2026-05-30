// Clone an AdminLTE 4 docs page into a Nuxt docs page (layout: 'docs').
// Extracts the article (inner of app-content > container-fluid), the title and
// breadcrumb, rewrites intra-doc links to /docs/* routes, and writes the .vue.
//
// Usage: node scripts/clone-doc.mjs <slug> [<slug> ...]   e.g. getting-started javascript/treeview
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const DIST = 'node_modules/.pnpm/admin-lte@4.0.0/node_modules/admin-lte/dist/docs'
const OUT = 'apps/demo/app/pages/docs'

function balancedInner(html, openTag) {
  const openIdx = html.indexOf(openTag)
  if (openIdx === -1) return null
  const start = openIdx + openTag.length
  const re = /<\/?div\b[^>]*>/g
  re.lastIndex = start
  let depth = 1
  let m
  while ((m = re.exec(html))) {
    depth += m[0].startsWith('</div') ? -1 : 1
    if (depth === 0) return html.slice(start, m.index)
  }
  return null
}

// `slug` (e.g. 'javascript/fullscreen') gives the page's own directory so bare
// `foo.html` links resolve relative to it, matching the original site's behaviour.
function rewriteLinks(s, slug) {
  const dir = slug.includes('/') ? slug.slice(0, slug.lastIndexOf('/')) : ''
  const frag = '(#[^"]*)?'
  return s
    // relative asset paths -> root-absolute (served from /public), so Vite
    // treats them as public URLs instead of trying to resolve a module import
    .replace(/(src|srcset)="(?:\.\.?\/)+assets\//g, '$1="/assets/')
    // links up into the live demo (siblings of the docs/ folder)
    .replace(new RegExp(`href="\\.\\./layout/([a-z0-9-]+)\\.html${frag}"`, 'g'), 'href="/layout/$1$2"')
    .replace(new RegExp(`href="\\.\\./UI/([a-z0-9-]+)\\.html${frag}"`, 'gi'), 'href="/ui/$1$2"')
    // sibling docs reached with ../ (../docs/foo.html or ../foo.html)
    .replace(new RegExp(`href="\\.\\./docs/([a-z0-9-]+)\\.html${frag}"`, 'g'), 'href="/docs/$1$2"')
    .replace(new RegExp(`href="\\.\\./([a-z0-9-]+)\\.html${frag}"`, 'g'), 'href="/docs/$1$2"')
    // sub-section docs (components/foo.html, javascript/foo.html)
    .replace(new RegExp(`href="(components|javascript)/([a-z0-9-]+)\\.html${frag}"`, 'g'), 'href="/docs/$1/$2$3"')
    // bare sibling doc, relative to this page's own directory
    .replace(new RegExp(`href="([a-z0-9-]+)\\.html${frag}"`, 'g'), (_m, name, f = '') => `href="/docs/${dir ? dir + '/' : ''}${name}${f}"`)
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function jsStr(s) {
  return `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
}

for (const slug of process.argv.slice(2)) {
  const html = readFileSync(`${DIST}/${slug}.html`, 'utf8')

  const title = decodeEntities((html.match(/<h3 class="mb-0">([\s\S]*?)<\/h3>/)?.[1] ?? slug).trim())

  // breadcrumb items from the app-content-header
  const crumbBlock = html.match(/<ol class="breadcrumb[^"]*">([\s\S]*?)<\/ol>/)?.[1] ?? ''
  const crumbs = [...crumbBlock.matchAll(/<li class="breadcrumb-item[^"]*"[^>]*>([\s\S]*?)<\/li>/g)].map(
    (m) => decodeEntities(m[1].replace(/<[^>]+>/g, '').trim())
  )
  const breadcrumbs = crumbs.length
    ? crumbs.map((c, i) => (i < crumbs.length - 1 ? `{ label: ${jsStr(c)}, href: '#' }` : `{ label: ${jsStr(c)} }`))
    : [`{ label: 'Docs', href: '#' }`, `{ label: ${jsStr(title)} }`]

  // article = inner of the app-content's container-fluid
  const appContent = html.slice(html.indexOf('<div class="app-content">'))
  const article = balancedInner(appContent, '<div class="container-fluid">')
  if (!article) {
    console.error(`!! ${slug}: could not extract article`)
    continue
  }

  const body = rewriteLinks(article, slug).replace(/\s+$/, '')
  const vue = `<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title=${jsStr(title)}
    :breadcrumbs="[${breadcrumbs.join(', ')}]"
  >
${body}
  </LteAppContent>
</template>
`
  const path = `${OUT}/${slug}.vue`
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, vue)
  const bad = (vue.match(/\.html"|\{\{/g) || []).length
  console.log(`${slug} -> ${path} (${vue.split('\n').length} lines, title=${JSON.stringify(title)}, crumbs=${crumbs.length}${bad ? `, ⚠ ${bad} leftover tokens` : ''})`)
}
