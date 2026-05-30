<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='JavaScript Plugins Overview'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'JavaScript', href: '#' }, { label: 'Overview' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      AdminLTE ships seven JavaScript plugins as a single bundle
                      (<code>adminlte.js</code>). Each one is exported from the package root, can be
                      triggered via <code>data-lte-*</code> attributes for declarative use, and
                      exposes a programmatic API for code-driven control.
                    </p>
                    <h5 id="at-a-glance">At a glance</h5>

                    <table>
                      <thead>
                        <tr>
                          <th>Plugin</th>
                          <th>Data API</th>
                          <th>Programmatic</th>
                          <th>Documentation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>PushMenu</strong></td>
                          <td><code>data-lte-toggle=&quot;sidebar&quot;</code></td>
                          <td>
                            <code>.toggle()</code> / <code>.expand()</code> /
                            <code>.collapse()</code>
                          </td>
                          <td><a href="/docs/javascript/pushmenu">Reference</a></td>
                        </tr>
                        <tr>
                          <td><strong>Treeview</strong></td>
                          <td><code>data-lte-toggle=&quot;treeview&quot;</code> on parent menu</td>
                          <td>
                            <code>.toggle()</code> / <code>.open()</code> / <code>.close()</code>
                          </td>
                          <td><a href="/docs/javascript/treeview">Reference</a></td>
                        </tr>
                        <tr>
                          <td><strong>CardWidget</strong></td>
                          <td>
                            <code>data-lte-toggle=&quot;card-collapse&quot;</code>,
                            <code>card-remove</code>, <code>card-maximize</code>
                          </td>
                          <td>
                            <code>.toggle()</code> / <code>.collapse()</code> /
                            <code>.expand()</code> / <code>.remove()</code> /
                            <code>.maximize()</code> / <code>.minimize()</code> /
                            <code>.toggleMaximize()</code>
                          </td>
                          <td><a href="/docs/javascript/card-widget">Reference</a></td>
                        </tr>
                        <tr>
                          <td><strong>DirectChat</strong></td>
                          <td><code>data-lte-toggle=&quot;chat-pane&quot;</code></td>
                          <td><code>.toggle()</code></td>
                          <td><a href="/docs/javascript/direct-chat">Reference</a></td>
                        </tr>
                        <tr>
                          <td><strong>FullScreen</strong></td>
                          <td><code>data-lte-toggle=&quot;fullscreen&quot;</code></td>
                          <td>
                            <code>.toggleFullScreen()</code> / <code>.inFullScreen()</code> /
                            <code>.outFullscreen()</code>
                          </td>
                          <td><a href="/docs/javascript/fullscreen">Reference</a></td>
                        </tr>
                        <tr>
                          <td><strong>Layout</strong></td>
                          <td>(auto-applied to <code>&lt;body&gt;</code>)</td>
                          <td><code>.holdTransition(time)</code></td>
                          <td><a href="/docs/javascript/layout">Reference</a></td>
                        </tr>
                        <tr>
                          <td><strong>AccessibilityManager</strong></td>
                          <td>(helper function: <code>initAccessibility()</code>)</td>
                          <td>
                            <code>.announce()</code> / <code>.focusElement()</code> /
                            <code>.trapFocus()</code> / <code>.addLandmarks()</code>
                          </td>
                          <td><a href="/docs/javascript/accessibility">Reference</a></td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="two-ways-to-use-them">Two ways to use them</h5>
                    <h6 id="1-data-api-declarative">1. Data API (declarative)</h6>
                    <p>
                      For most pages, the data API is enough — no JavaScript code required. Drop the
                      right <code>data-lte-*</code> attribute on the trigger element and the bundle
                      wires it up on page load:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&lt;!-- Sidebar toggle --&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;sidebar&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">☰</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&lt;!-- Card collapse / remove / maximize --&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-header&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-title&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Title</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-tools&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn btn-tool&quot;</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-collapse&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> data-lte-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;expand&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-dash-lg&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> data-lte-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;collapse&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-plus-lg&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-body&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">…</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <p>
                      The bundle attaches all data-API listeners on <code>DOMContentLoaded</code>.
                      Dynamically-injected elements still work for the
                      <a href="/docs/javascript/pushmenu">PushMenu</a>,
                      <a href="/docs/javascript/card-widget">CardWidget</a>, and
                      <a href="/docs/javascript/treeview">Treeview</a> plugins, which use event delegation.
                    </p>
                    <h6 id="2-programmatic-imperative">2. Programmatic (imperative)</h6>
                    <p>
                      When you need to control a plugin from your own code — eg. open the sidebar
                      after a successful login, or expand a card on a route change — instantiate the
                      class directly:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#6A9955">// ESM (bundler import)</span></span>
<span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">PushMenu</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">CardWidget</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">Treeview</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> &quot;admin-lte&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Sidebar</span></span>
<span class="line"><span style="color:#569CD6">new</span><span style="color:#DCDCAA"> PushMenu</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">body</span><span style="color:#D4D4D4">, {}).</span><span style="color:#DCDCAA">expand</span><span style="color:#D4D4D4">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Card maximize</span></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> card</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;#chart-card&quot;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#569CD6">new</span><span style="color:#DCDCAA"> CardWidget</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">card</span><span style="color:#D4D4D4">, {}).</span><span style="color:#DCDCAA">maximize</span><span style="color:#D4D4D4">()</span></span></code></pre>
                    <p>Or use the globals (UMD bundle, no build step):</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">  // The bundle assigns to window.adminlte</span></span>
<span class="line"><span style="color:#569CD6">  new</span><span style="color:#9CDCFE"> adminlte</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">PushMenu</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">body</span><span style="color:#D4D4D4">, {}).</span><span style="color:#DCDCAA">expand</span><span style="color:#D4D4D4">()</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <h5 id="listening-to-plugin-events">Listening to plugin events</h5>
                    <p>
                      Every plugin fires a <code>CustomEvent</code> or <code>Event</code> on the
                      element it operates on. Listen for these to coordinate with your own code:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;expanded.lte.card-widget&quot;</span><span style="color:#D4D4D4">, (</span><span style="color:#9CDCFE">e</span><span style="color:#D4D4D4">) </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#9CDCFE">  console</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">log</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;Card expanded:&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">e</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">target</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;open.lte.push-menu&quot;</span><span style="color:#D4D4D4">, () </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#6A9955">  // user opened the sidebar — eg. analytics call</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span></code></pre>
                    <h6 id="event-name-reference">Event name reference</h6>

                    <table>
                      <thead>
                        <tr>
                          <th>Plugin</th>
                          <th>Event</th>
                          <th>Fired when</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PushMenu</td>
                          <td><code>open.lte.push-menu</code></td>
                          <td>Sidebar expanded</td>
                        </tr>
                        <tr>
                          <td>PushMenu</td>
                          <td><code>collapse.lte.push-menu</code></td>
                          <td>Sidebar collapsed</td>
                        </tr>
                        <tr>
                          <td>Treeview</td>
                          <td><code>expanded.lte.treeview</code></td>
                          <td>Submenu opened</td>
                        </tr>
                        <tr>
                          <td>Treeview</td>
                          <td><code>collapsed.lte.treeview</code></td>
                          <td>Submenu closed</td>
                        </tr>
                        <tr>
                          <td>Treeview</td>
                          <td><code>load.lte.treeview</code></td>
                          <td>Pre-opened submenu detected on page load</td>
                        </tr>
                        <tr>
                          <td>CardWidget</td>
                          <td><code>expanded.lte.card-widget</code></td>
                          <td>Card expanded</td>
                        </tr>
                        <tr>
                          <td>CardWidget</td>
                          <td><code>collapsed.lte.card-widget</code></td>
                          <td>Card collapsed</td>
                        </tr>
                        <tr>
                          <td>CardWidget</td>
                          <td><code>remove.lte.card-widget</code></td>
                          <td>Card removed</td>
                        </tr>
                        <tr>
                          <td>CardWidget</td>
                          <td><code>maximized.lte.card-widget</code></td>
                          <td>Card maximized</td>
                        </tr>
                        <tr>
                          <td>CardWidget</td>
                          <td><code>minimized.lte.card-widget</code></td>
                          <td>Card minimized</td>
                        </tr>
                        <tr>
                          <td>DirectChat</td>
                          <td><code>expanded.lte.direct-chat</code></td>
                          <td>Contacts pane opened</td>
                        </tr>
                        <tr>
                          <td>DirectChat</td>
                          <td><code>collapsed.lte.direct-chat</code></td>
                          <td>Contacts pane closed</td>
                        </tr>
                        <tr>
                          <td>FullScreen</td>
                          <td><code>maximized.lte.fullscreen</code></td>
                          <td>Entered fullscreen</td>
                        </tr>
                        <tr>
                          <td>FullScreen</td>
                          <td><code>minimized.lte.fullscreen</code></td>
                          <td>Exited fullscreen</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      All events bubble. Attach listeners to <code>document</code> or
                      <code>document.body</code> for global hooks, or to a specific card / sidebar
                      element for scoped listeners.
                    </p>
                    <h5 id="configuring-via-data-attributes">Configuring via data attributes</h5>
                    <p>
                      Some plugins read config from <code>data-*</code> attributes on their target
                      element:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&lt;!-- Treeview — non-accordion (multiple submenus can be open at once) --&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav sidebar-menu&quot;</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;treeview&quot;</span><span style="color:#9CDCFE"> data-accordion</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;false&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">…</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&lt;!-- Treeview — custom animation speed --&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav sidebar-menu&quot;</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;treeview&quot;</span><span style="color:#9CDCFE"> data-animation-speed</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;500&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">…</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&lt;!-- Sidebar — opt into localStorage persistence (default: off) --&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;app-sidebar&quot;</span><span style="color:#9CDCFE"> data-enable-persistence</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;true&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">…</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&lt;!-- Sidebar — override the mobile breakpoint --&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;app-sidebar&quot;</span><span style="color:#9CDCFE"> data-sidebar-breakpoint</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;768&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">…</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <p>Each plugin’s reference page documents which attributes it supports.</p>
                    <h5 id="css-classes-the-plugins-manage">CSS classes the plugins manage</h5>
                    <p>
                      The plugins toggle a small set of CSS classes that you can also style or react
                      to:
                    </p>

                    <table>
                      <thead>
                        <tr>
                          <th>Class</th>
                          <th>Set by</th>
                          <th>Where</th>
                          <th>Meaning</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>sidebar-collapse</code></td>
                          <td>PushMenu</td>
                          <td><code>&lt;body&gt;</code></td>
                          <td>Sidebar collapsed (desktop mini state, or mobile-closed)</td>
                        </tr>
                        <tr>
                          <td><code>sidebar-open</code></td>
                          <td>PushMenu</td>
                          <td><code>&lt;body&gt;</code></td>
                          <td>Mobile sidebar explicitly opened by user</td>
                        </tr>
                        <tr>
                          <td><code>sidebar-mini</code></td>
                          <td>PushMenu</td>
                          <td><code>&lt;body&gt;</code></td>
                          <td>Mini-sidebar mode active</td>
                        </tr>
                        <tr>
                          <td><code>menu-open</code></td>
                          <td>Treeview</td>
                          <td><code>.nav-item</code></td>
                          <td>Submenu is currently expanded</td>
                        </tr>
                        <tr>
                          <td><code>collapsed-card</code></td>
                          <td>CardWidget</td>
                          <td><code>.card</code></td>
                          <td>Card body/footer are collapsed</td>
                        </tr>
                        <tr>
                          <td><code>maximized-card</code></td>
                          <td>CardWidget</td>
                          <td><code>&lt;html&gt;</code> and <code>.card</code></td>
                          <td>Card is in fullscreen mode</td>
                        </tr>
                        <tr>
                          <td><code>direct-chat-contacts-open</code></td>
                          <td>DirectChat</td>
                          <td><code>.direct-chat</code></td>
                          <td>Contacts pane visible</td>
                        </tr>
                        <tr>
                          <td><code>hold-transition</code></td>
                          <td>Layout</td>
                          <td><code>&lt;body&gt;</code></td>
                          <td>Transitions disabled briefly (during resize, etc.)</td>
                        </tr>
                        <tr>
                          <td><code>app-loaded</code></td>
                          <td>Layout</td>
                          <td><code>&lt;body&gt;</code></td>
                          <td>Initial page-load animation finished</td>
                        </tr>
                        <tr>
                          <td><code>reduce-motion</code></td>
                          <td>AccessibilityManager</td>
                          <td><code>&lt;body&gt;</code></td>
                          <td>OS <code>prefers-reduced-motion</code> detected</td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="production-vs-source">Production vs source</h5>
                    <p>
                      The plugins live in
                      <a href="https://github.com/ColorlibHQ/master/src/ts"><code>src/ts/</code></a>
                      as TypeScript modules. The published <code>dist/js/adminlte.js</code> is a
                      Rollup bundle of all seven, exporting them under a single
                      <code>adminlte</code> namespace (UMD) or named imports (ESM).
                    </p>
                    <p>
                      If you only need one or two plugins and care about bundle size, importing
                      individual modules from <code>node_modules/admin-lte/src/ts/</code> will
                      tree-shake — but you’ll need TypeScript in your toolchain.
                    </p>
                    <h5 id="where-to-next">Where to next</h5>
                    <ul>
                      <li>Detailed reference for each plugin (links in the table above)</li>
                      <li>
                        <a href="/docs/layout-blueprint">Layout Blueprint</a> — the structural
                        classes the plugins operate on
                      </li>
                      <li>
                        <a href="/docs/javascript/accessibility">Accessibility</a> — keyboard navigation, focus
                        trapping, ARIA helpers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
