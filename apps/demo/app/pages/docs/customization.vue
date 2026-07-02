<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Customization & Theming'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Customization' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      AdminLTE inherits Bootstrap 5.3’s CSS-custom-properties theming model and adds
                      its own layer of SCSS variables on top. You can customize the look two ways:
                    </p>
                    <ol>
                      <li>
                        <strong>CSS custom properties</strong> — quick, no build step, works on
                        prebuilt CSS.
                      </li>
                      <li>
                        <strong>SCSS variables</strong> — slower (requires a build), but lets you
                        change anything including grid breakpoints and sidebar width.
                      </li>
                    </ol>
                    <h5 id="quick-wins-with-css-variables">Quick wins with CSS variables</h5>
                    <p>
                      Bootstrap and AdminLTE expose dozens of CSS custom properties on
                      <code>:root</code>. Override them in your own stylesheet to retheme without
                      rebuilding:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="css"
                    ><code><span class="line"><span style="color:#D7BA7D">:root</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#D4D4D4">[</span><span style="color:#9CDCFE">data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"light"</span><span style="color:#D4D4D4">] {</span></span>
<span class="line"><span style="color:#9CDCFE">  --bs-primary</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">#6610f2</span><span style="color:#D4D4D4">;        </span><span style="color:#6A9955">/* swap Bootstrap's blue for purple */</span></span>
<span class="line"><span style="color:#9CDCFE">  --bs-primary-rgb</span><span style="color:#D4D4D4">: </span><span style="color:#B5CEA8">102</span><span style="color:#D4D4D4">, </span><span style="color:#B5CEA8">16</span><span style="color:#D4D4D4">, </span><span style="color:#B5CEA8">242</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#9CDCFE">  --bs-body-bg</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">#f3f4f6</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4">[</span><span style="color:#9CDCFE">data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark"</span><span style="color:#D4D4D4">] {</span></span>
<span class="line"><span style="color:#9CDCFE">  --bs-body-bg</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">#14171c</span><span style="color:#D4D4D4">;        </span><span style="color:#6A9955">/* darker than Bootstrap's default */</span></span>
<span class="line"><span style="color:#9CDCFE">  --bs-body-color</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">#e9ecef</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">}</span></span></code></pre>
                    <p>
                      Components built on <code>var(--bs-primary)</code> (most of AdminLTE’s chrome)
                      pick this up automatically.
                    </p>
                    <h6 id="common-variables-worth-knowing">Common variables worth knowing</h6>
                    <table>
                      <thead>
                        <tr>
                          <th>Variable</th>
                          <th>Default</th>
                          <th>What it controls</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>--bs-primary</code></td>
                          <td><code>#0d6efd</code></td>
                          <td>Brand colour, used in active sidebar items, primary buttons</td>
                        </tr>
                        <tr>
                          <td><code>--bs-body-bg</code></td>
                          <td><code>#fff</code> (light) / <code>#212529</code> (dark)</td>
                          <td>Page background</td>
                        </tr>
                        <tr>
                          <td><code>--bs-body-color</code></td>
                          <td><code>#212529</code></td>
                          <td>Default text colour</td>
                        </tr>
                        <tr>
                          <td><code>--bs-border-color</code></td>
                          <td><code>#dee2e6</code></td>
                          <td>All hairline borders</td>
                        </tr>
                        <tr>
                          <td><code>--bs-border-radius</code></td>
                          <td><code>.375rem</code></td>
                          <td>Default radius for cards, buttons, inputs</td>
                        </tr>
                        <tr>
                          <td><code>--bs-border-radius-lg</code></td>
                          <td><code>.5rem</code></td>
                          <td>Larger radius, used for modals</td>
                        </tr>
                        <tr>
                          <td><code>--bs-font-sans-serif</code></td>
                          <td><code>system-ui, ...</code></td>
                          <td>Default font stack</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      For the full list, see
                      <a href="https://getbootstrap.com/docs/5.3/customize/css-variables/"
                        >Bootstrap CSS variables</a
                      >.
                    </p>
                    <h5 id="scss-variables">SCSS variables</h5>
                    <p>
                      If you’re building from source (cloned the repo or installed via npm + your
                      own bundler), edit
                      <a
                        href="https://github.com/ColorlibHQ/AdminLTE/blob/master/src/scss/_variables.scss"
                        ><code>src/scss/_variables.scss</code></a
                      >
                      and recompile.
                    </p>
                    <p>The most-overridden variables, with their defaults:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="scss"
                    ><code><span class="line"><span style="color:#6A9955">// Sidebar</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-sidebar-width</span><span style="color:#D4D4D4">:          </span><span style="color:#B5CEA8">250px</span><span style="color:#D4D4D4">;       </span><span style="color:#6A9955">// collapse to mini at ~70px</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-sidebar-breakpoint</span><span style="color:#D4D4D4">:     lg;          </span><span style="color:#6A9955">// breakpoint at which sidebar starts off-canvas</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-sidebar-padding-x</span><span style="color:#D4D4D4">:      </span><span style="color:#B5CEA8">.5rem</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-sidebar-padding-y</span><span style="color:#D4D4D4">:      </span><span style="color:#B5CEA8">.5rem</span><span style="color:#D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Sidebar colours (light theme)</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-sidebar-color</span><span style="color:#D4D4D4">:          </span><span style="color:#9CDCFE">$gray-800</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-sidebar-hover-bg</span><span style="color:#D4D4D4">:       </span><span style="color:#DCDCAA">rgba</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">$black</span><span style="color:#D4D4D4">, </span><span style="color:#B5CEA8">.1</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-sidebar-active-color</span><span style="color:#D4D4D4">:   </span><span style="color:#9CDCFE">$black</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-sidebar-menu-active-bg</span><span style="color:#D4D4D4">: </span><span style="color:#DCDCAA">rgba</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">$black</span><span style="color:#D4D4D4">, </span><span style="color:#B5CEA8">.1</span><span style="color:#D4D4D4">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Header</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-app-header-height</span><span style="color:#D4D4D4">:      </span><span style="color:#9CDCFE">$nav-link-height</span><span style="color:#D4D4D4"> + (</span><span style="color:#9CDCFE">$lte-app-header-link-padding-y</span><span style="color:#D4D4D4"> * </span><span style="color:#B5CEA8">2</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-app-header-bottom-border-color</span><span style="color:#D4D4D4">: </span><span style="color:#DCDCAA">var</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">--#{$prefix}border-color</span><span style="color:#D4D4D4">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Transitions</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-transition-speed</span><span style="color:#D4D4D4">:       </span><span style="color:#B5CEA8">.3s</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-transition-fn</span><span style="color:#D4D4D4">:          </span><span style="color:#CE9178">ease-in-out</span><span style="color:#D4D4D4">;</span></span></code></pre>
                    <p>
                      AdminLTE changes about ten Bootstrap defaults in
                      <a
                        href="https://github.com/ColorlibHQ/AdminLTE/blob/master/src/scss/_bootstrap-overrides.scss"
                        ><code>src/scss/_bootstrap-overrides.scss</code></a
                      >; every other Bootstrap variable (button colours, spacing scale, breakpoints)
                      keeps its stock default. All values use <code>!default</code>, so override
                      them in your own SCSS file <em>before</em> the import:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="scss"
                    ><code><span class="line"><span style="color:#6A9955">// my-theme.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// 1. Your overrides FIRST</span></span>
<span class="line"><span style="color:#9CDCFE">$primary</span><span style="color:#D4D4D4">:                </span><span style="color:#CE9178">#6610f2</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#9CDCFE">$lte-sidebar-width</span><span style="color:#D4D4D4">:      </span><span style="color:#B5CEA8">280px</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#9CDCFE">$border-radius</span><span style="color:#D4D4D4">:          </span><span style="color:#B5CEA8">.25rem</span><span style="color:#D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// 2. Then import AdminLTE (which imports Bootstrap)</span></span>
<span class="line"><span style="color:#C586C0">@import</span><span style="color:#CE9178"> "node_modules/admin-lte/src/scss/adminlte"</span><span style="color:#D4D4D4">;</span></span></code></pre>
                    <blockquote>
                      <p>
                        <strong>Note:</strong> compiling the Sass source requires
                        <code>bootstrap</code> to be installed — it is a peer dependency of
                        <code>admin-lte</code> since 4.1 (npm installs it automatically alongside).
                        Make sure your Sass compiler can resolve bare
                        <code>bootstrap/...</code> imports by adding <code>node_modules</code> to
                        its load paths, e.g. <code>sass --load-path=node_modules</code> or, in Vite,
                        <code
                          >css: { preprocessorOptions: { scss: { loadPaths:
                          [&quot;node_modules&quot;] } } }</code
                        >.
                      </p>
                    </blockquote>
                    <h5 id="recompiling-scss">Recompiling SCSS</h5>
                    <p>If you cloned the repo, the build pipeline is already wired:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="bash"
                    ><code><span class="line"><span style="color:#DCDCAA">npm</span><span style="color:#CE9178"> install</span></span>
<span class="line"><span style="color:#DCDCAA">npm</span><span style="color:#CE9178"> run</span><span style="color:#CE9178"> css</span><span style="color:#6A9955">           # one-off build → dist/css/</span></span>
<span class="line"><span style="color:#DCDCAA">npm</span><span style="color:#CE9178"> run</span><span style="color:#CE9178"> watch-css-main</span><span style="color:#6A9955">  # rebuild on save during development</span></span></code></pre>
                    <p>
                      For a project that uses AdminLTE as a dependency, point your bundler at
                      <code>node_modules/admin-lte/src/scss/adminlte.scss</code>. Examples:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#6A9955">// Vite / Rollup / Webpack</span></span>
<span class="line"><span style="color:#C586C0">import</span><span style="color:#CE9178"> "admin-lte/src/scss/adminlte.scss"</span></span></code></pre>
                    <h5 id="custom-sidebar-branding">Custom sidebar branding</h5>
                    <p>
                      The <code>.sidebar-brand</code> element accepts text, an image, or both.
                      Markup:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar-brand"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">img</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"/assets/logo.svg"</span><span style="color:#9CDCFE"> alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"Logo"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-image opacity-75 shadow"</span><span style="color:#808080"> /></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-text fw-light"</span><span style="color:#808080">></span><span style="color:#D4D4D4">My Dashboard</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      To swap the logo when the sidebar collapses to its mini state, AdminLTE
                      provides a built-in pattern — see the
                      <a href="/layout/logo-switch">Logo Switch layout demo</a> for the
                      markup.
                    </p>
                    <h5 id="dark-mode-customization">Dark mode customization</h5>
                    <p>
                      AdminLTE follows Bootstrap 5.3’s <code>data-bs-theme</code> attribute system.
                      To customize dark-mode colours, scope your variables under
                      <code>[data-bs-theme=&quot;dark&quot;]</code>:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="css"
                    ><code><span class="line"><span style="color:#D4D4D4">[</span><span style="color:#9CDCFE">data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark"</span><span style="color:#D4D4D4">] {</span></span>
<span class="line"><span style="color:#9CDCFE">  --bs-primary</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">#4dabf7</span><span style="color:#D4D4D4">;          </span><span style="color:#6A9955">/* lighter primary for dark backgrounds */</span></span>
<span class="line"><span style="color:#9CDCFE">  --lte-sidebar-color</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">#e9ecef</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#9CDCFE">  --lte-sidebar-active-color</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">#fff</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">}</span></span></code></pre>
                    <p>
                      The <a href="/docs/color-mode">Color Mode</a> page covers the toggle markup and
                      JavaScript that switches the attribute.
                    </p>
                    <h5 id="custom-sidebar-colour-scheme">Custom sidebar colour scheme</h5>
                    <p>
                      AdminLTE ships its sidebar styled for light mode, but the demos apply
                      <code>data-bs-theme=&quot;dark&quot;</code> on <code>.app-sidebar</code> to
                      get the dark sidebar variant against a light page. You can mix and match:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!-- Light page, dark sidebar (the demo pattern) --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">body</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bg-body-tertiary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-sidebar bg-body-secondary shadow"</span><span style="color:#9CDCFE"> data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">    ...</span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">body</span><span style="color:#808080">></span></span></code></pre>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!-- Light page, light sidebar --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">body</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bg-body-tertiary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-sidebar bg-body shadow border-end"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">    ...</span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">body</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="compact-mode">Compact mode</h5>
                    <p>
                      Add <code>.compact-mode</code> to <code>.app-wrapper</code> (or anywhere up
                      the tree) to reduce padding throughout the layout — handy for data-dense
                      dashboards. The dimensions for compact mode come from the
                      <code>*-compact</code> variables in <code>_variables.scss</code>.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-wrapper compact-mode"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!-- header, sidebar, main content with tighter spacing --></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="when-to-recompile-vs-override-at-runtime">
                      When to recompile vs. override at runtime
                    </h5>
                    <table>
                      <thead>
                        <tr>
                          <th>Customization</th>
                          <th>CSS variables</th>
                          <th>SCSS rebuild</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Brand colours</td>
                          <td>✅</td>
                          <td>✅</td>
                        </tr>
                        <tr>
                          <td>Body / text colours</td>
                          <td>✅</td>
                          <td>✅</td>
                        </tr>
                        <tr>
                          <td>Border radius</td>
                          <td>✅</td>
                          <td>✅</td>
                        </tr>
                        <tr>
                          <td>Sidebar width</td>
                          <td>❌ (not a CSS var)</td>
                          <td>✅</td>
                        </tr>
                        <tr>
                          <td>Breakpoint changes</td>
                          <td>❌</td>
                          <td>✅</td>
                        </tr>
                        <tr>
                          <td>Spacing scale</td>
                          <td>❌</td>
                          <td>✅</td>
                        </tr>
                        <tr>
                          <td>Font sizes</td>
                          <td>partial</td>
                          <td>✅ (full control)</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      Use CSS variables for everything you can — it survives AdminLTE upgrades
                      without merge conflicts. Reserve SCSS overrides for structural changes
                      (sidebar width, breakpoints) that CSS variables don’t cover.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
