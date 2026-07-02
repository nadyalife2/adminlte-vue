<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Treeview Plugin'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Treeview Plugin' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      The Treeview plugin converts a nested list into a collapsible tree where
                      submenus expand and contract on click. It’s what powers the sidebar navigation
                      in the demo dashboards.
                    </p>
                    <h5 id="usage">Usage</h5>
                    <h6 id="data-api">Data API</h6>
                    <p>
                      Add <code>data-lte-toggle=&quot;treeview&quot;</code> to the parent
                      <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>. Inside, mark items that
                      have children with <code>.nav-item</code> and put the submenu in a nested
                      <code>&lt;ul class=&quot;nav-treeview&quot;&gt;</code>:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav sidebar-menu flex-column"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"treeview"</span><span style="color:#9CDCFE"> role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"menu"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-speedometer"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Dashboard</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-folder"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">        Reports</span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-arrow bi bi-chevron-right"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav nav-treeview"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-circle"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Sales</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-circle"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">>&#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Traffic</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      To start with a submenu pre-expanded, add <code>menu-open</code> to its
                      <code>.nav-item</code>.
                    </p>
                    <h5 id="configuration">Configuration</h5>
                    <p>
                      Configure via <code>data-*</code> attributes on the parent
                      <code>&lt;ul&gt;</code>:
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
                          <td><code>data-accordion</code></td>
                          <td><code>true</code></td>
                          <td>
                            Close other open submenus when one opens. Set <code>false</code> for
                            non-accordion behaviour (multiple submenus open at once).
                          </td>
                        </tr>
                        <tr>
                          <td><code>data-animation-speed</code></td>
                          <td><code>300</code></td>
                          <td>
                            Slide animation duration in milliseconds. Set <code>0</code> to disable
                            animation.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!-- Non-accordion mode: multiple submenus can stay open --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav sidebar-menu"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"treeview"</span><span style="color:#9CDCFE"> data-accordion</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"false"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">  …</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&#x3C;!-- Faster animation --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav sidebar-menu"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"treeview"</span><span style="color:#9CDCFE"> data-animation-speed</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"150"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">  …</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span></code></pre>
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
                          <td><code>menu-open</code></td>
                          <td><code>.nav-item</code> (the parent of a submenu)</td>
                          <td>The submenu is currently expanded.</td>
                        </tr>
                        <tr>
                          <td><code>nav-treeview</code></td>
                          <td><code>&lt;ul&gt;</code> (nested)</td>
                          <td>Marks a submenu so the plugin recognises it.</td>
                        </tr>
                        <tr>
                          <td><code>nav-arrow</code></td>
                          <td><code>&lt;i&gt;</code> inside <code>.nav-link</code></td>
                          <td>The chevron icon that rotates when the submenu opens.</td>
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
                          <td><code>expanded.lte.treeview</code></td>
                          <td>Fired on the <code>.nav-item</code> when its submenu opens.</td>
                        </tr>
                        <tr>
                          <td><code>collapsed.lte.treeview</code></td>
                          <td>Fired on the <code>.nav-item</code> when its submenu closes.</td>
                        </tr>
                        <tr>
                          <td><code>load.lte.treeview</code></td>
                          <td>
                            Fired once per page load for any submenu that’s already expanded via the
                            <code>menu-open</code> class.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"expanded.lte.treeview"</span><span style="color:#D4D4D4">, (</span><span style="color:#9CDCFE">e</span><span style="color:#D4D4D4">) </span><span style="color:#569CD6">=></span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#9CDCFE">  console</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">log</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"Opened submenu inside:"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">e</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">target</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span></code></pre>
                    <h5 id="programmatic-api">Programmatic API</h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">Treeview</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> "admin-lte"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> item</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">".sidebar-menu .nav-item"</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> tv</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">new</span><span style="color:#DCDCAA"> Treeview</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">item</span><span style="color:#D4D4D4">, { </span><span style="color:#9CDCFE">accordion:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">animationSpeed:</span><span style="color:#B5CEA8"> 300</span><span style="color:#D4D4D4"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">tv</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">open</span><span style="color:#D4D4D4">()    </span><span style="color:#6A9955">// expand this item's submenu</span></span>
<span class="line"><span style="color:#9CDCFE">tv</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">close</span><span style="color:#D4D4D4">()   </span><span style="color:#6A9955">// collapse it</span></span>
<span class="line"><span style="color:#9CDCFE">tv</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">toggle</span><span style="color:#D4D4D4">()  </span><span style="color:#6A9955">// toggle</span></span></code></pre>
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
                          <td><code>open()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Expands the submenu. If <code>accordion</code> is <code>true</code>,
                            closes sibling submenus first. Fires <code>expanded.lte.treeview</code>.
                          </td>
                        </tr>
                        <tr>
                          <td><code>close()</code></td>
                          <td><code>void</code></td>
                          <td>Collapses the submenu. Fires <code>collapsed.lte.treeview</code>.</td>
                        </tr>
                        <tr>
                          <td><code>toggle()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Calls <code>open()</code> or <code>close()</code> based on current
                            state.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="example">Example</h5>
                    <ul
                      class="nav sidebar-menu flex-column"
                      data-lte-toggle="treeview"
                      role="menu"
                      style="
                        background: var(--bs-tertiary-bg);
                        padding: 0.5rem;
                        border-radius: var(--bs-border-radius);
                      "
                    >
                      <li class="nav-item">
                        <a class="nav-link" href="#"
                          ><i class="nav-icon bi bi-circle"></i>
                          <p>One level</p></a
                        >
                      </li>
                      <li class="nav-item menu-open">
                        <a class="nav-link" href="#"
                          ><i class="nav-icon bi bi-folder"></i>
                          <p>Multilevel <i class="nav-arrow bi bi-chevron-right"></i></p
                        ></a>
                        <ul class="nav nav-treeview">
                          <li class="nav-item">
                            <a href="#" class="nav-link"
                              ><i class="nav-icon bi bi-circle"></i>
                              <p>Level 2</p></a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
