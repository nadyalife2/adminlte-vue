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
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!-- Sidebar toggle --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar"</span><span style="color:#808080">></span><span style="color:#D4D4D4">☰</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&#x3C;!-- Card collapse / remove / maximize --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-header"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-title"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Title</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-tools"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"btn btn-tool"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-collapse"</span><span style="color:#9CDCFE"> aria-label</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"Collapse card"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> data-lte-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"expand"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-dash-lg"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> data-lte-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"collapse"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-plus-lg"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"card-body"</span><span style="color:#808080">></span><span style="color:#D4D4D4">…</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span></code></pre>
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
                      after a successful login, or expand a card on a route change — retrieve the
                      instance the data API already created, or create one on demand (since 4.1):
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#6A9955">// ESM (bundler import)</span></span>
<span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">PushMenu</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">CardWidget</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> "admin-lte"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Sidebar: the data API creates the instance on load — just fetch it</span></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> sidebar</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">".app-sidebar"</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#9CDCFE">PushMenu</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getInstance</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">sidebar</span><span style="color:#D4D4D4">)?.</span><span style="color:#DCDCAA">expand</span><span style="color:#D4D4D4">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Card maximize: reuses the existing instance, or creates one</span></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> card</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"#chart-card"</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#9CDCFE">CardWidget</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getOrCreateInstance</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">card</span><span style="color:#D4D4D4">).</span><span style="color:#DCDCAA">maximize</span><span style="color:#D4D4D4">()</span></span></code></pre>
                    <p>Or use the globals (UMD bundle, no build step):</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">  // The bundle assigns to window.adminlte</span></span>
<span class="line"><span style="color:#9CDCFE">  adminlte</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">PushMenu</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getInstance</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">".app-sidebar"</span><span style="color:#D4D4D4">))?.</span><span style="color:#DCDCAA">expand</span><span style="color:#D4D4D4">()</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h6 id="component-lifecycle">Component lifecycle</h6>
                    <p>Every component follows the same Bootstrap-style contract:</p>
                    <ul>
                      <li>
                        <code>Component.getInstance(element)</code> — the instance created for that
                        element, or <code>null</code>.
                      </li>
                      <li>
                        <code>Component.getOrCreateInstance(element, config?)</code> — reuse or
                        create (config only applies on creation).
                      </li>
                      <li>
                        <code>instance.dispose()</code> — unregister the instance;
                        <code>getInstance()</code> returns <code>null</code> afterwards.
                      </li>
                    </ul>
                    <p>
                      One instance is kept per element in a registry backed by a
                      <code>WeakMap</code>, so instances are garbage-collected together with their
                      elements (nothing to clean up on Hotwired Turbo navigations). The data API
                      listens with <strong>delegated document-level handlers</strong>, which means
                      toggles inside content inserted after page load — AJAX partials, Turbo Frames
                      — work without any re-initialisation.
                    </p>
                    <h5 id="listening-to-plugin-events">Listening to plugin events</h5>
                    <p>
                      Every plugin fires bubbling <code>CustomEvent</code>s on its root element (the
                      card, the nav item, the sidebar) — listen on <code>document</code> for global
                      hooks or on the element itself for scoped ones. Actions with a “before” event
                      are cancelable: call <code>preventDefault()</code> to veto them.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"expanded.lte.card-widget"</span><span style="color:#D4D4D4">, (</span><span style="color:#9CDCFE">e</span><span style="color:#D4D4D4">) </span><span style="color:#569CD6">=></span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#9CDCFE">  console</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">log</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"Card expanded:"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">e</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">target</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Veto card removal until the user confirmed</span></span>
<span class="line"><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"remove.lte.card-widget"</span><span style="color:#D4D4D4">, (</span><span style="color:#9CDCFE">e</span><span style="color:#D4D4D4">) </span><span style="color:#569CD6">=></span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#C586C0">  if</span><span style="color:#D4D4D4"> (!</span><span style="color:#DCDCAA">confirm</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"Remove this card?"</span><span style="color:#D4D4D4">)) {</span></span>
<span class="line"><span style="color:#9CDCFE">    e</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">preventDefault</span><span style="color:#D4D4D4">()</span></span>
<span class="line"><span style="color:#D4D4D4">  }</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span></code></pre>
                    <h6 id="event-name-reference">Event name reference</h6>
                    <table>
                      <thead>
                        <tr>
                          <th>Plugin</th>
                          <th>Before (cancelable)</th>
                          <th>After</th>
                          <th>Fired for</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PushMenu</td>
                          <td><code>open.lte.push-menu</code></td>
                          <td><code>opened.lte.push-menu</code></td>
                          <td>Sidebar expanding</td>
                        </tr>
                        <tr>
                          <td>PushMenu</td>
                          <td><code>collapse.lte.push-menu</code></td>
                          <td><code>collapsed.lte.push-menu</code></td>
                          <td>Sidebar collapsing</td>
                        </tr>
                        <tr>
                          <td>Treeview</td>
                          <td><code>expand.lte.treeview</code></td>
                          <td><code>expanded.lte.treeview</code></td>
                          <td>Submenu opening (after fires post-animation)</td>
                        </tr>
                        <tr>
                          <td>Treeview</td>
                          <td><code>collapse.lte.treeview</code></td>
                          <td><code>collapsed.lte.treeview</code></td>
                          <td>Submenu closing (after fires post-animation)</td>
                        </tr>
                        <tr>
                          <td>Treeview</td>
                          <td>—</td>
                          <td><code>load.lte.treeview</code></td>
                          <td>Pre-opened submenu detected on page load</td>
                        </tr>
                        <tr>
                          <td>CardWidget</td>
                          <td><code>expand.lte.card-widget</code></td>
                          <td><code>expanded.lte.card-widget</code></td>
                          <td>Card expanding (after fires post-animation)</td>
                        </tr>
                        <tr>
                          <td>CardWidget</td>
                          <td><code>collapse.lte.card-widget</code></td>
                          <td><code>collapsed.lte.card-widget</code></td>
                          <td>Card collapsing (after fires post-animation)</td>
                        </tr>
                        <tr>
                          <td>CardWidget</td>
                          <td><code>remove.lte.card-widget</code></td>
                          <td><code>removed.lte.card-widget</code></td>
                          <td>Card removal (the card leaves the DOM after <code>removed</code>)</td>
                        </tr>
                        <tr>
                          <td>CardWidget</td>
                          <td>—</td>
                          <td><code>maximized.lte.card-widget</code></td>
                          <td>Card maximized</td>
                        </tr>
                        <tr>
                          <td>CardWidget</td>
                          <td>—</td>
                          <td><code>minimized.lte.card-widget</code></td>
                          <td>Card minimized</td>
                        </tr>
                        <tr>
                          <td>DirectChat</td>
                          <td>—</td>
                          <td><code>expanded.lte.direct-chat</code></td>
                          <td>Contacts pane opened</td>
                        </tr>
                        <tr>
                          <td>DirectChat</td>
                          <td>—</td>
                          <td><code>collapsed.lte.direct-chat</code></td>
                          <td>Contacts pane closed</td>
                        </tr>
                        <tr>
                          <td>FullScreen</td>
                          <td>—</td>
                          <td><code>maximized.lte.fullscreen</code></td>
                          <td>Entered fullscreen</td>
                        </tr>
                        <tr>
                          <td>FullScreen</td>
                          <td>—</td>
                          <td><code>minimized.lte.fullscreen</code></td>
                          <td>Exited fullscreen</td>
                        </tr>
                        <tr>
                          <td>ColorMode</td>
                          <td>—</td>
                          <td><code>changed.lte.color-mode</code></td>
                          <td>
                            Theme changed (<code>detail: { theme, resolved }</code>, fired on
                            <code>document</code>)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      All events bubble (since 4.1). The “after” events of animated actions fire
                      when the animation completes, not when it starts.
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
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!-- Treeview — non-accordion (multiple submenus can be open at once) --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav sidebar-menu"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"treeview"</span><span style="color:#9CDCFE"> data-accordion</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"false"</span><span style="color:#808080">></span><span style="color:#D4D4D4">…</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&#x3C;!-- Treeview — custom animation speed --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav sidebar-menu"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"treeview"</span><span style="color:#9CDCFE"> data-animation-speed</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"500"</span><span style="color:#808080">></span><span style="color:#D4D4D4">…</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&#x3C;!-- Sidebar — opt into localStorage persistence (default: off) --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-sidebar"</span><span style="color:#9CDCFE"> data-enable-persistence</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"true"</span><span style="color:#808080">></span><span style="color:#D4D4D4">…</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">&#x3C;!-- Sidebar — override the mobile breakpoint --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-sidebar"</span><span style="color:#9CDCFE"> data-sidebar-breakpoint</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"768"</span><span style="color:#808080">></span><span style="color:#D4D4D4">…</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">></span></span></code></pre>
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
