<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Migration from v3'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Migration' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      AdminLTE 4 is a ground-up rewrite. It targets Bootstrap 5.3, drops jQuery,
                      ships as TypeScript-authored vanilla JS, and reorganises the CSS class
                      structure. If you’re upgrading an AdminLTE 3 project, the changes below are
                      the ones most likely to bite.
                    </p>
                    <h5 id="the-high-level-summary">The high-level summary</h5>
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th>AdminLTE 3</th>
                          <th>AdminLTE 4</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>CSS framework</td>
                          <td>Bootstrap 4.6</td>
                          <td><strong>Bootstrap 5.3</strong></td>
                        </tr>
                        <tr>
                          <td>JavaScript</td>
                          <td>jQuery + vanilla</td>
                          <td><strong>Vanilla TypeScript only</strong></td>
                        </tr>
                        <tr>
                          <td>Dark mode</td>
                          <td>Manual <code>.dark-mode</code> class</td>
                          <td>
                            <strong><code>data-bs-theme</code> attribute (Bootstrap-native)</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>RTL</td>
                          <td>Separate <code>rtl.css</code> build</td>
                          <td><strong>Generated automatically via rtlcss</strong></td>
                        </tr>
                        <tr>
                          <td>Browser support</td>
                          <td>IE 11 forks available</td>
                          <td>Modern evergreen browsers only</td>
                        </tr>
                        <tr>
                          <td>Build tooling</td>
                          <td>Gulp</td>
                          <td><strong>Rollup + Sass + PostCSS</strong></td>
                        </tr>
                        <tr>
                          <td>Icon library</td>
                          <td>FontAwesome</td>
                          <td>
                            <strong>Bootstrap Icons</strong> (Lucide / Tabler Icons documented as
                            alternatives)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      If your project relies on jQuery or IE 11, stay on AdminLTE 3 — those
                      constraints are not reversible in v4.
                    </p>
                    <h5 id="class-renames">Class renames</h5>
                    <p>The most common find-and-replace work:</p>
                    <table>
                      <thead>
                        <tr>
                          <th>AdminLTE 3</th>
                          <th>AdminLTE 4</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>.wrapper</code></td>
                          <td><code>.app-wrapper</code></td>
                        </tr>
                        <tr>
                          <td><code>.main-header</code></td>
                          <td><code>.app-header</code></td>
                        </tr>
                        <tr>
                          <td><code>.main-sidebar</code></td>
                          <td><code>.app-sidebar</code></td>
                        </tr>
                        <tr>
                          <td><code>.content-wrapper</code></td>
                          <td><code>.app-main</code></td>
                        </tr>
                        <tr>
                          <td><code>.main-footer</code></td>
                          <td><code>.app-footer</code></td>
                        </tr>
                        <tr>
                          <td><code>.content-header</code></td>
                          <td><code>.app-content-header</code></td>
                        </tr>
                        <tr>
                          <td><code>.content</code></td>
                          <td><code>.app-content</code></td>
                        </tr>
                        <tr>
                          <td><code>.brand-link</code> (inside <code>.main-sidebar</code>)</td>
                          <td><code>.sidebar-brand &gt; .brand-link</code></td>
                        </tr>
                        <tr>
                          <td><code>data-widget=&quot;pushmenu&quot;</code></td>
                          <td><code>data-lte-toggle=&quot;sidebar&quot;</code></td>
                        </tr>
                        <tr>
                          <td><code>data-widget=&quot;treeview&quot;</code></td>
                          <td>
                            <code>data-lte-toggle=&quot;treeview&quot;</code> (on the parent menu)
                          </td>
                        </tr>
                        <tr>
                          <td><code>data-widget=&quot;card-widget&quot;</code></td>
                          <td>
                            <code>data-lte-toggle=&quot;card-collapse&quot;</code>,
                            <code>card-remove</code>, <code>card-maximize</code>
                          </td>
                        </tr>
                        <tr>
                          <td><code>data-widget=&quot;fullscreen&quot;</code></td>
                          <td><code>data-lte-toggle=&quot;fullscreen&quot;</code></td>
                        </tr>
                        <tr>
                          <td><code>data-widget=&quot;control-sidebar&quot;</code></td>
                          <td>(removed — Bootstrap offcanvas replaces this)</td>
                        </tr>
                        <tr>
                          <td><code>.dark-mode</code> (on <code>&lt;body&gt;</code>)</td>
                          <td><code>data-bs-theme=&quot;dark&quot;</code> (on any element)</td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="bootstrap-4--5-utility-renames">Bootstrap 4 → 5 utility renames</h5>
                    <p>
                      These come from Bootstrap itself, not AdminLTE, but they affect every page:
                    </p>
                    <table>
                      <thead>
                        <tr>
                          <th>Bootstrap 4</th>
                          <th>Bootstrap 5</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>data-toggle</code></td>
                          <td><code>data-bs-toggle</code></td>
                        </tr>
                        <tr>
                          <td><code>data-target</code></td>
                          <td><code>data-bs-target</code></td>
                        </tr>
                        <tr>
                          <td><code>data-dismiss</code></td>
                          <td><code>data-bs-dismiss</code></td>
                        </tr>
                        <tr>
                          <td><code>data-parent</code></td>
                          <td><code>data-bs-parent</code></td>
                        </tr>
                        <tr>
                          <td><code>data-spy</code></td>
                          <td><code>data-bs-spy</code></td>
                        </tr>
                        <tr>
                          <td><code>data-ride</code></td>
                          <td><code>data-bs-ride</code></td>
                        </tr>
                        <tr>
                          <td><code>.ml-*</code>, <code>.mr-*</code></td>
                          <td><code>.ms-*</code>, <code>.me-*</code></td>
                        </tr>
                        <tr>
                          <td><code>.pl-*</code>, <code>.pr-*</code></td>
                          <td><code>.ps-*</code>, <code>.pe-*</code></td>
                        </tr>
                        <tr>
                          <td><code>.float-left</code>, <code>.float-right</code></td>
                          <td><code>.float-start</code>, <code>.float-end</code></td>
                        </tr>
                        <tr>
                          <td><code>.text-left</code>, <code>.text-right</code></td>
                          <td><code>.text-start</code>, <code>.text-end</code></td>
                        </tr>
                        <tr>
                          <td><code>.border-left</code>, <code>.border-right</code></td>
                          <td><code>.border-start</code>, <code>.border-end</code></td>
                        </tr>
                        <tr>
                          <td><code>.rounded-left</code>, <code>.rounded-right</code></td>
                          <td><code>.rounded-start</code>, <code>.rounded-end</code></td>
                        </tr>
                        <tr>
                          <td><code>.font-weight-*</code></td>
                          <td><code>.fw-*</code></td>
                        </tr>
                        <tr>
                          <td><code>.font-italic</code></td>
                          <td><code>.fst-italic</code></td>
                        </tr>
                        <tr>
                          <td><code>.text-monospace</code></td>
                          <td><code>.font-monospace</code></td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      A regex find-replace handles most of this in a few minutes. The migration tool
                      <a href="https://github.com/dbtek/bootstrap-5-migration"
                        ><code>bootstrap-5-migration</code></a
                      >
                      automates the bulk.
                    </p>
                    <h5 id="jquery-removal">jQuery removal</h5>
                    <p>
                      If your app code calls AdminLTE 3 plugins via jQuery
                      (<code>$(&#39;.sidebar&#39;).PushMenu()</code>, etc.), those calls no longer
                      work. Replacements:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#6A9955">// AdminLTE 3</span></span>
<span class="line"><span style="color:#DCDCAA">$</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">'.sidebar-toggle'</span><span style="color:#D4D4D4">).</span><span style="color:#DCDCAA">on</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">'click'</span><span style="color:#D4D4D4">, </span><span style="color:#569CD6">function</span><span style="color:#D4D4D4"> () {</span></span>
<span class="line"><span style="color:#DCDCAA">  $</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">'body'</span><span style="color:#D4D4D4">).</span><span style="color:#DCDCAA">toggleClass</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">'sidebar-collapse'</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span></code></pre>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#6A9955">// AdminLTE 4 — the data-API does this for you</span></span>
<span class="line"><span style="color:#6A9955">// &#x3C;a href="#" data-lte-toggle="sidebar">...&#x3C;/a></span></span></code></pre>
                    <p>If you need programmatic control, import the plugin class directly:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">PushMenu</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> "admin-lte"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">new</span><span style="color:#DCDCAA"> PushMenu</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">".sidebar-toggle"</span><span style="color:#D4D4D4">)).</span><span style="color:#DCDCAA">toggle</span><span style="color:#D4D4D4">()</span></span></code></pre>
                    <p>
                      All seven JS plugins (<code>Layout</code>, <code>CardWidget</code>,
                      <code>Treeview</code>, <code>DirectChat</code>, <code>FullScreen</code>,
                      <code>PushMenu</code>, plus <code>initAccessibility</code>) are exported from
                      <code>admin-lte</code>.
                    </p>
                    <h5 id="dark-mode">Dark mode</h5>
                    <p>
                      AdminLTE 3 used a <code>.dark-mode</code> class toggled on the
                      <code>&lt;body&gt;</code>. AdminLTE 4 uses Bootstrap 5.3’s native
                      <code>data-bs-theme=&quot;dark&quot;</code> attribute, which can be applied at
                      any level — <code>&lt;html&gt;</code>, <code>&lt;body&gt;</code>, or a single
                      component.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!-- AdminLTE 3 --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">body</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark-mode"</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&#x3C;!-- AdminLTE 4 --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">html</span><span style="color:#9CDCFE"> data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark"</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      The included <a href="/docs/color-mode">Color Mode</a> widget reads/writes this
                      attribute and persists the user’s choice in <code>localStorage</code>. See the
                      <a href="/docs/color-mode">Color Mode</a> docs page for the toggle
                      implementation.
                    </p>
                    <h5 id="css-variables-instead-of-bg--overrides">
                      CSS variables instead of <code>.bg-*</code> overrides
                    </h5>
                    <p>
                      AdminLTE 3 shipped a lot of one-off colour classes (<code>.bg-navy</code>,
                      <code>.bg-purple</code>, <code>.bg-fuchsia</code>, etc.). In v4, prefer
                      Bootstrap 5.3’s CSS-variable model:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!-- AdminLTE 3 --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card bg-navy"</span><span style="color:#808080">></span><span style="color:#D4D4D4">…</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&#x3C;!-- AdminLTE 4 — use Bootstrap utilities + CSS variables --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card text-bg-primary"</span><span style="color:#808080">></span><span style="color:#D4D4D4">…</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      For full retheming, override <code>--bs-primary</code> etc. on
                      <code>:root</code>. See <a href="/docs/customization">Customization</a>.
                    </p>
                    <h5 id="icons">Icons</h5>
                    <p>
                      AdminLTE 3 demos used FontAwesome 6 free. AdminLTE 4 standardises on
                      <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a> — they’re SVG,
                      lighter, MIT-licensed, and ship with Bootstrap’s ecosystem.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!-- AdminLTE 3 --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"fas fa-home"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&#x3C;!-- AdminLTE 4 --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-house"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      If you’d rather stick with FontAwesome (or use Lucide, Tabler Icons, Material
                      Symbols, etc.), nothing in AdminLTE 4 forces Bootstrap Icons — load whichever
                      icon font you prefer and replace the <code>&lt;i&gt;</code> classes. See
                      <a href="/docs/integrations#icon-libraries">Recommended Integrations</a> for
                      the comparison table.
                    </p>
                    <h5 id="pages-we-havent-ported-yet">Pages we haven’t ported yet</h5>
                    <p>
                      The v3 demo includes pages that haven’t all been recreated for v4. The v4
                      release notes cover the current page catalog. If you depend on a specific v3
                      page that hasn’t been ported, please
                      <a href="https://github.com/ColorlibHQ/AdminLTE/issues">open an issue</a> —
                      community contributions for missing pages are very welcome.
                    </p>
                    <h5 id="suggested-migration-order">Suggested migration order</h5>
                    <p>For an existing AdminLTE 3 project:</p>
                    <ol>
                      <li>
                        <strong>Branch first.</strong> This is not a small change — keep
                        <code>master</code> on v3 until v4 is stable.
                      </li>
                      <li>
                        <strong>Update CSS class names</strong> with a find-replace pass using the
                        table above. Most layouts compile but look broken until step 3.
                      </li>
                      <li>
                        <strong
                          >Update <code>data-toggle</code> → <code>data-bs-toggle</code></strong
                        >
                        etc. across all your templates.
                      </li>
                      <li>
                        <strong>Replace <code>.dark-mode</code> toggle code</strong> with
                        <code>data-bs-theme</code> attribute writes.
                      </li>
                      <li>
                        <strong>Audit jQuery calls.</strong> Either remove them (use the data API)
                        or import plugin classes directly.
                      </li>
                      <li>
                        <strong>Test responsive breakpoints</strong> — Bootstrap 5 added
                        <code>xxl</code>. If you use breakpoint-specific utilities, double-check the
                        new scale.
                      </li>
                      <li>
                        <strong>Re-test print views</strong> — AdminLTE 4 fixed a print-layout issue
                        (#5996); if you had custom print CSS, verify it still works.
                      </li>
                    </ol>
                    <h5 id="help-and-discussion">Help and discussion</h5>
                    <ul>
                      <li>
                        Migration questions:
                        <a href="https://github.com/ColorlibHQ/AdminLTE/discussions"
                          >GitHub Discussions</a
                        >
                      </li>
                      <li>
                        Found something we missed?
                        <a href="https://github.com/ColorlibHQ/AdminLTE/issues">Open an issue</a>
                        tagged <code>migration</code>.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
