export interface DocsPage {
  title: string
  navTitle?: string
  path: string
  section?: string
  order?: number
  description?: string
}

/** Fixed section order for the sidebar + prev/next reading order. */
export const DOCS_SECTIONS = [
  'Getting started',
  'Guide',
  'Components',
  'Composables',
  'Plugins',
  'Resources',
]

function rank(section?: string) {
  const i = DOCS_SECTIONS.indexOf(section || '')
  return i < 0 ? 99 : i
}

/**
 * The full set of docs pages in reading order (section order, then `order`).
 * Single source of truth for both the sidebar grouping and prev/next.
 */
export function useDocsPages() {
  return useAsyncData('docs-pages', async () => {
    const pages = (await queryCollection('docs')
      .select('title', 'navTitle', 'path', 'section', 'order', 'description')
      .all()) as DocsPage[]
    return [...pages].sort((a, b) => {
      const r = rank(a.section) - rank(b.section)
      return r !== 0 ? r : (a.order ?? 999) - (b.order ?? 999)
    })
  })
}
