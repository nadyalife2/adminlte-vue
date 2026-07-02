<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Layout Blueprint'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Layout Blueprint' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      Every AdminLTE page follows the same structural blueprint: a wrapper that
                      contains a header, a sidebar, a main content area, and (optionally) a footer.
                      Understanding the four region classes is the difference between fighting the
                      framework and using it productively.
                    </p>
                    <h5 id="the-four-regions">The four regions</h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="text"
                    ><code><span class="line"><span>┌──────────────────────────────────────────┐</span></span>
<span class="line"><span>│  .app-wrapper                            │</span></span>
<span class="line"><span>│  ┌────────────────────────────────────┐  │</span></span>
<span class="line"><span>│  │  .app-header                       │  │ ← topbar / navbar</span></span>
<span class="line"><span>│  ├──────────┬─────────────────────────┤  │</span></span>
<span class="line"><span>│  │          │                         │  │</span></span>
<span class="line"><span>│  │  .app-   │   .app-main             │  │ ← page content</span></span>
<span class="line"><span>│  │ sidebar  │                         │  │</span></span>
<span class="line"><span>│  │          │                         │  │</span></span>
<span class="line"><span>│  ├──────────┴─────────────────────────┤  │</span></span>
<span class="line"><span>│  │  .app-footer (optional)            │  │</span></span>
<span class="line"><span>│  └────────────────────────────────────┘  │</span></span>
<span class="line"><span>└──────────────────────────────────────────┘</span></span></code></pre>
                    <p>
                      The wrapper is a CSS grid container, the four children are grid areas. You
                      don’t have to know that to use it — the markup pattern alone is sufficient.
                    </p>
                    <h5 id="minimal-markup">Minimal markup</h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">body</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"layout-fixed sidebar-expand-lg bg-body-tertiary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-wrapper"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">nav</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-header navbar navbar-expand bg-body"</span><span style="color:#808080">></span><span style="color:#D4D4D4">…</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">nav</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-sidebar bg-body-secondary shadow"</span><span style="color:#9CDCFE"> data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark"</span><span style="color:#808080">></span><span style="color:#D4D4D4">…</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">main</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-main"</span><span style="color:#808080">></span><span style="color:#D4D4D4">…</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">main</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">footer</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-footer"</span><span style="color:#808080">></span><span style="color:#D4D4D4">…</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">footer</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">body</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      Order inside <code>.app-wrapper</code> doesn’t matter — the grid template
                      positions each child by its class. Use whatever order reads cleanly.
                    </p>
                    <h5 id="region-reference">Region reference</h5>
                    <h6 id="app-wrapper"><code>.app-wrapper</code></h6>
                    <p>
                      The root container. Defines the grid template that positions header, sidebar,
                      main, and footer. Always lives directly inside <code>&lt;body&gt;</code>.
                    </p>
                    <p>
                      You can add <code>.compact-mode</code> here (or anywhere up the tree) to
                      reduce padding throughout the layout — useful for data-dense dashboards.
                    </p>
                    <h6 id="app-header"><code>.app-header</code></h6>
                    <p>
                      The top bar. Use Bootstrap’s navbar classes (<code
                        >navbar navbar-expand bg-body</code
                      >) for the visual. The header is where the sidebar toggle button lives — wire
                      it with <code>data-lte-toggle=&quot;sidebar&quot;</code>:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-list"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      By default the header scrolls with the page. Add <code>.fixed-header</code> to
                      <code>&lt;body&gt;</code> to pin it.
                    </p>
                    <h6 id="app-sidebar"><code>.app-sidebar</code></h6>
                    <p>
                      The side rail. Always contains two children: <code>.sidebar-brand</code> (logo
                      / app name) and <code>.sidebar-wrapper</code> (the scrollable nav region).
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-sidebar bg-body-secondary shadow"</span><span style="color:#9CDCFE"> data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar-brand"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-text fw-light"</span><span style="color:#808080">></span><span style="color:#D4D4D4">My Dashboard</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar-wrapper"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">nav</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"mt-2"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav sidebar-menu flex-column"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"treeview"</span><span style="color:#9CDCFE"> role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"menu"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">        &#x3C;!-- nav items --></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">nav</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      The <code>data-bs-theme=&quot;dark&quot;</code> on the sidebar gives you the
                      dark-sidebar-on-light-page look from the demos. Drop it for a light sidebar.
                    </p>
                    <h6 id="app-main"><code>.app-main</code></h6>
                    <p>The page content region. Almost always contains two children:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">main</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-main"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-content-header"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">    &#x3C;!-- page title + breadcrumb --></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-content"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">    &#x3C;!-- page body, cards, tables, charts, etc. --></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">main</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      <code>.app-content-header</code> is the title strip — typically an
                      <code>&lt;h3&gt;</code> and a breadcrumb in a row.
                      <code>.app-content</code> is everything below it. Both should wrap their
                      children in <code>.container-fluid</code> (or <code>.container</code> for
                      capped width).
                    </p>
                    <h6 id="app-footer-optional"><code>.app-footer</code> (optional)</h6>
                    <p>A footer strip at the bottom of the wrapper:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">footer</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-footer"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"float-end d-none d-sm-inline"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Version 4.0.0</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">strong</span><span style="color:#808080">></span><span style="color:#569CD6">&#x26;copy;</span><span style="color:#D4D4D4"> 2026 Your Company</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">strong</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">footer</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      Add <code>.fixed-footer</code> to <code>&lt;body&gt;</code> to pin it to the
                      bottom of the viewport.
                    </p>
                    <h5 id="body-level-layout-modifiers">Body-level layout modifiers</h5>
                    <p>
                      Layout behaviour is mostly controlled by classes on <code>&lt;body&gt;</code>,
                      not <code>.app-wrapper</code>. The supported modifiers:
                    </p>
                    <table>
                      <thead>
                        <tr>
                          <th>Class</th>
                          <th>What it does</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>layout-fixed</code></td>
                          <td>
                            Sidebar gets its own scrollbar; only <code>.app-main</code> scrolls with
                            the page
                          </td>
                        </tr>
                        <tr>
                          <td><code>fixed-header</code></td>
                          <td>
                            Sticky <code>.app-header</code> at the top; sidebar also pins (since
                            v4.0.0)
                          </td>
                        </tr>
                        <tr>
                          <td><code>fixed-footer</code></td>
                          <td>Sticky <code>.app-footer</code> at the bottom</td>
                        </tr>
                        <tr>
                          <td><code>sidebar-expand-{sm,md,lg,xl,xxl}</code></td>
                          <td>
                            Breakpoint at which the sidebar transitions from off-canvas (mobile) to
                            inline (desktop). <code>lg</code> is the default in the demos.
                          </td>
                        </tr>
                        <tr>
                          <td><code>sidebar-mini</code></td>
                          <td>Collapses sidebar to icon-only mini state</td>
                        </tr>
                        <tr>
                          <td><code>sidebar-mini sidebar-collapse</code></td>
                          <td>Starts the page with the mini sidebar already collapsed</td>
                        </tr>
                        <tr>
                          <td><code>sidebar-without-hover</code></td>
                          <td>Disables the auto-expand-on-hover behaviour for the mini sidebar</td>
                        </tr>
                        <tr>
                          <td><code>layout-rtl</code></td>
                          <td>
                            Mirrors the layout for right-to-left languages (also requires
                            <code>.rtl.css</code> and <code>dir=&quot;rtl&quot;</code> — see
                            <a href="/docs/rtl">RTL Support</a>)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      These compose. The demo dashboards use
                      <code>class=&quot;layout-fixed sidebar-expand-lg bg-body-tertiary&quot;</code>
                      — fixed-height with a desktop sidebar breakpoint at the
                      <code>lg</code> (≥992px) boundary.
                    </p>
                    <h6 id="layout-variants-demo">Layout variants demo</h6>
                    <p>
                      The Layout section of the demo site (<code>/layout/*.html</code> files) ships
                      eleven pre-built combinations:
                    </p>
                    <ul>
                      <li>
                        <a href="/layout/fixed-sidebar">Fixed Sidebar</a>,
                        <a href="/layout/fixed-header">Fixed Header</a>,
                        <a href="/layout/fixed-footer">Fixed Footer</a>,
                        <a href="/layout/fixed-complete">Fixed Complete</a>
                      </li>
                      <li>
                        <a href="/layout/unfixed-sidebar">Unfixed Sidebar</a>,
                        <a href="/layout/sidebar-mini">Sidebar Mini</a>,
                        <a href="/layout/collapsed-sidebar">Collapsed Sidebar</a>,
                        <a href="/layout/collapsed-sidebar-without-hover"
                          >Collapsed without hover</a
                        >
                      </li>
                      <li>
                        <a href="/layout/layout-custom-area">Layout Custom Area</a>,
                        <a href="/layout/logo-switch">Logo Switch</a>,
                        <a href="/layout/layout-rtl">Layout RTL</a>
                      </li>
                    </ul>
                    <h5 id="responsive-behaviour">Responsive behaviour</h5>
                    <p>
                      At and above your <code>sidebar-expand-*</code> breakpoint, the sidebar is
                      <strong>inline</strong> — visible in the grid alongside
                      <code>.app-main</code>. Below the breakpoint, it becomes
                      <strong>off-canvas</strong> — hidden by default and slid in from the left when
                      the user clicks the hamburger toggle.
                    </p>
                    <p>Mobile-specific classes:</p>
                    <table>
                      <thead>
                        <tr>
                          <th>Class</th>
                          <th>When applied</th>
                          <th>Effect</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>sidebar-open</code></td>
                          <td>Body — when the user explicitly opens the mobile sidebar</td>
                          <td>Slides the sidebar in over the content with an overlay</td>
                        </tr>
                        <tr>
                          <td><code>sidebar-collapse</code></td>
                          <td>Body — set automatically when the user closes the mobile sidebar</td>
                          <td>Hides the sidebar</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      These are managed by the
                      <a href="/docs/javascript/pushmenu">PushMenu plugin</a> — you don’t write them
                      yourself.
                    </p>
                    <h5 id="common-pitfalls">Common pitfalls</h5>
                    <ul>
                      <li>
                        <strong
                          >Forgetting <code>.container-fluid</code> inside
                          <code>.app-content</code></strong
                        >
                        — the content lands flush against the screen edge. Wrap your content cards
                        in a container.
                      </li>
                      <li>
                        <strong>Putting the sidebar toggle outside <code>.app-header</code></strong>
                        — it’ll still work, but the styling expects the navbar context.
                      </li>
                      <li>
                        <strong>Mixing <code>.app-*</code> and <code>.main-*</code> classes</strong>
                        — <code>.main-*</code> is the AdminLTE 3 naming. Don’t combine them. See
                        <a href="/docs/migration">Migration from v3</a>.
                      </li>
                      <li>
                        <strong
                          >Using <code>position: fixed</code> on something inside
                          <code>.app-main</code></strong
                        >
                        — <code>layout-fixed</code> already gives <code>.app-main</code>
                        <code>overflow: auto</code>. Children with <code>position: fixed</code> may
                        behave unexpectedly. Use sticky positioning instead.
                      </li>
                      <li>
                        <strong>Hardcoding sidebar width in custom CSS</strong> — the sidebar width
                        is exposed via the SCSS variable <code>$lte-sidebar-width</code>. If you
                        need to know it from JavaScript, read the rendered
                        <code>.app-sidebar</code> element’s computed width.
                      </li>
                    </ul>
                    <h5 id="where-to-next">Where to next</h5>
                    <ul>
                      <li>
                        <a href="/docs/layout">Layout reference</a> — the lower-level CSS classes and
                        what they do
                      </li>
                      <li>
                        <a href="/docs/javascript/pushmenu">PushMenu plugin</a> — the sidebar toggle
                        implementation
                      </li>
                      <li>
                        <a href="/docs/customization">Customization</a> — how to change sidebar
                        width, breakpoint, and colours
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
