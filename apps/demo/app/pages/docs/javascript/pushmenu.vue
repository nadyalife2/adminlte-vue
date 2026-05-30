<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Pushmenu Plugin'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Pushmenu Plugin' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      The PushMenu plugin toggles the sidebar between expanded and collapsed states.
                      It handles responsive behavior, optional localStorage persistence, and overlay
                      management on mobile.
                    </p>
                    <h5 id="usage">Usage</h5>
                    <p>
                      This plugin is activated via data attributes on the sidebar element and toggle
                      buttons.
                    </p>
                    <p><strong>Data API</strong></p>
                    <p>
                      Add <code>data-lte-toggle=&quot;sidebar&quot;</code> to any button or link to
                      toggle the sidebar.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;sidebar&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Toggle Sidebar</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <h5 id="configuration">Configuration</h5>
                    <p>
                      Configure the sidebar via data attributes on the
                      <code>.app-sidebar</code> element:
                    </p>

                    <table>
                      <thead>
                        <tr>
                          <th>Attribute</th>
                          <th>Default</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>data-sidebar-breakpoint</code></td>
                          <td><code>992</code></td>
                          <td>Screen width (px) below which the sidebar is considered mobile.</td>
                        </tr>
                        <tr>
                          <td><code>data-enable-persistence</code></td>
                          <td><code>false</code></td>
                          <td>Save sidebar state to localStorage across page loads.</td>
                        </tr>
                      </tbody>
                    </table>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;app-sidebar&quot;</span><span style="color:#9CDCFE"> data-enable-persistence</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;true&quot;</span><span style="color:#9CDCFE"> data-sidebar-breakpoint</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;768&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">  &lt;!-- sidebar content --&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <h5 id="responsive-behavior">Responsive Behavior</h5>
                    <ul>
                      <li>
                        <strong>Desktop</strong> (above breakpoint): Sidebar is expanded by default.
                        Collapse is remembered if persistence is enabled.
                      </li>
                      <li>
                        <strong>Mobile</strong> (at or below breakpoint): Sidebar is collapsed by
                        default. An overlay appears when the sidebar is open, clicking it collapses
                        the sidebar.
                      </li>
                    </ul>
                    <h5 id="css-classes">CSS Classes</h5>

                    <table>
                      <thead>
                        <tr>
                          <th>Class</th>
                          <th>Applied to</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>sidebar-collapse</code></td>
                          <td><code>&lt;body&gt;</code></td>
                          <td>Sidebar is collapsed.</td>
                        </tr>
                        <tr>
                          <td><code>sidebar-open</code></td>
                          <td><code>&lt;body&gt;</code></td>
                          <td>Sidebar is explicitly open on mobile.</td>
                        </tr>
                        <tr>
                          <td><code>sidebar-mini</code></td>
                          <td><code>&lt;body&gt;</code></td>
                          <td>Enables mini sidebar mode (icons only when collapsed).</td>
                        </tr>
                        <tr>
                          <td><code>sidebar-without-hover</code></td>
                          <td><code>&lt;body&gt;</code></td>
                          <td>Prevents collapsed sidebar from expanding on hover.</td>
                        </tr>
                        <tr>
                          <td><code>sidebar-expand-{breakpoint}</code></td>
                          <td><code>&lt;body&gt;</code></td>
                          <td>
                            Sets the responsive breakpoint (<code>sm</code>, <code>md</code>,
                            <code>lg</code>, <code>xl</code>, <code>xxl</code>).
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="events">Events</h5>

                    <table>
                      <thead>
                        <tr>
                          <th>Event</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>open.lte.push-menu</code></td>
                          <td>Fired when the sidebar is expanded.</td>
                        </tr>
                        <tr>
                          <td><code>collapse.lte.push-menu</code></td>
                          <td>Fired when the sidebar is collapsed.</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>Both events bubble. Listen on <code>document</code> for a global hook:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;open.lte.push-menu&quot;</span><span style="color:#D4D4D4">, () </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#9CDCFE">  console</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">log</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;Sidebar opened&quot;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span></code></pre>
                    <h5 id="programmatic-api">Programmatic API</h5>
                    <p>
                      Import the class and instantiate it on any element (typically the sidebar
                      toggle button or <code>document.body</code>):
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">PushMenu</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> &quot;admin-lte&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> sidebar</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">new</span><span style="color:#DCDCAA"> PushMenu</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&#39;[data-lte-toggle=&quot;sidebar&quot;]&#39;</span><span style="color:#D4D4D4">), {</span></span>
<span class="line"><span style="color:#9CDCFE">  sidebarBreakpoint:</span><span style="color:#B5CEA8"> 992</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">  enablePersistence:</span><span style="color:#569CD6"> false</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span></code></pre>
                    <h6 id="methods">Methods</h6>

                    <table>
                      <thead>
                        <tr>
                          <th>Method</th>
                          <th>Returns</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>toggle()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Expands or collapses the sidebar based on current state. Persists state
                            if <code>enablePersistence</code> is <code>true</code>.
                          </td>
                        </tr>
                        <tr>
                          <td><code>expand()</code></td>
                          <td><code>void</code></td>
                          <td>Expands the sidebar. Fires <code>open.lte.push-menu</code>.</td>
                        </tr>
                        <tr>
                          <td><code>collapse()</code></td>
                          <td><code>void</code></td>
                          <td>Collapses the sidebar. Fires <code>collapse.lte.push-menu</code>.</td>
                        </tr>
                        <tr>
                          <td><code>isCollapsed()</code></td>
                          <td><code>boolean</code></td>
                          <td>
                            <code>true</code> if <code>&lt;body&gt;</code> has
                            <code>sidebar-collapse</code> class.
                          </td>
                        </tr>
                        <tr>
                          <td><code>isExplicitlyOpen()</code></td>
                          <td><code>boolean</code></td>
                          <td>
                            <code>true</code> if <code>&lt;body&gt;</code> has
                            <code>sidebar-open</code> (mobile, user opened it).
                          </td>
                        </tr>
                        <tr>
                          <td><code>isMiniMode()</code></td>
                          <td><code>boolean</code></td>
                          <td>
                            <code>true</code> if <code>&lt;body&gt;</code> has
                            <code>sidebar-mini</code>.
                          </td>
                        </tr>
                        <tr>
                          <td><code>isMobileSize()</code></td>
                          <td><code>boolean</code></td>
                          <td>
                            <code>true</code> if <code>window.innerWidth ≤ sidebarBreakpoint</code>.
                          </td>
                        </tr>
                        <tr>
                          <td><code>saveSidebarState(state)</code></td>
                          <td><code>void</code></td>
                          <td>
                            Manually save state to localStorage (<code
                              >&quot;sidebar-open&quot;</code
                            >
                            or <code>&quot;sidebar-collapse&quot;</code>).
                          </td>
                        </tr>
                        <tr>
                          <td><code>loadSidebarState()</code></td>
                          <td><code>void</code></td>
                          <td>Read state from localStorage and apply it.</td>
                        </tr>
                        <tr>
                          <td><code>clearSidebarState()</code></td>
                          <td><code>void</code></td>
                          <td>Remove saved state from localStorage.</td>
                        </tr>
                        <tr>
                          <td><code>updateStateByResponsiveLogic()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Recompute correct state based on viewport size (collapse on mobile,
                            expand on desktop unless mini). Called automatically on resize.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h6 id="storage-key">Storage key</h6>
                    <p>
                      When <code>enablePersistence</code> is enabled, the plugin reads/writes
                      <code>localStorage.getItem(&quot;lte.sidebar.state&quot;)</code>. The stored
                      value is one of:
                    </p>
                    <ul>
                      <li>
                        <code>&quot;sidebar-open&quot;</code> — user wants the sidebar expanded
                      </li>
                      <li><code>&quot;sidebar-collapse&quot;</code> — user wants it collapsed</li>
                    </ul>
                    <h5 id="example">Example</h5>
                    <a href="#" data-lte-toggle="sidebar">Toggle Sidebar</a>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
