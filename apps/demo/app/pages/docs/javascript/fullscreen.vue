<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Fullscreen Plugin'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Fullscreen Plugin' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>The FullScreen plugin toggles the browser’s native fullscreen mode.</p>
                    <h5 id="usage">Usage</h5>
                    <p>This plugin is activated via data attributes.</p>
                    <p><strong>Data API</strong></p>
                    <p>
                      Add <code>data-lte-toggle=&quot;fullscreen&quot;</code> to a button element.
                      Use <code>data-lte-icon=&quot;maximize&quot;</code> and
                      <code>data-lte-icon=&quot;minimize&quot;</code> on child icon elements to
                      toggle their visibility.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn&quot;</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;fullscreen&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> data-lte-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;maximize&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-arrows-fullscreen&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> data-lte-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;minimize&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-fullscreen-exit d-none&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span></code></pre>
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
                          <td><code>maximized.lte.fullscreen</code></td>
                          <td>Fired when entering fullscreen mode.</td>
                        </tr>
                        <tr>
                          <td><code>minimized.lte.fullscreen</code></td>
                          <td>Fired when exiting fullscreen mode.</td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="programmatic-api">Programmatic API</h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">FullScreen</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> &quot;admin-lte&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> btn</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&#39;[data-lte-toggle=&quot;fullscreen&quot;]&#39;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> fs</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">new</span><span style="color:#DCDCAA"> FullScreen</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">btn</span><span style="color:#D4D4D4">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">fs</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">toggleFullScreen</span><span style="color:#D4D4D4">()  </span><span style="color:#6A9955">// enter or exit based on current state</span></span>
<span class="line"><span style="color:#9CDCFE">fs</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">inFullScreen</span><span style="color:#D4D4D4">()      </span><span style="color:#6A9955">// request fullscreen</span></span>
<span class="line"><span style="color:#9CDCFE">fs</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">outFullscreen</span><span style="color:#D4D4D4">()     </span><span style="color:#6A9955">// exit fullscreen</span></span></code></pre>
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
                          <td><code>toggleFullScreen()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Calls <code>inFullScreen()</code> if not in fullscreen, otherwise
                            <code>outFullscreen()</code>. Checks
                            <code>document.fullscreenEnabled</code> first.
                          </td>
                        </tr>
                        <tr>
                          <td><code>inFullScreen()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Calls <code>document.documentElement.requestFullscreen()</code>, toggles
                            <code>.d-none</code> on the maximize/minimize icons. Fires
                            <code>maximized.lte.fullscreen</code>.
                          </td>
                        </tr>
                        <tr>
                          <td><code>outFullscreen()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Calls <code>document.exitFullscreen()</code>, toggles
                            <code>.d-none</code> on the maximize/minimize icons. Fires
                            <code>minimized.lte.fullscreen</code>.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>The constructor takes no config — pass only the trigger element.</p>
                    <h5 id="notes">Notes</h5>
                    <ul>
                      <li>
                        Requires browser support for the
                        <a href="https://developer.mozilla.org/docs/Web/API/Fullscreen_API"
                          >Fullscreen API</a
                        >. Check <code>document.fullscreenEnabled</code> before invoking.
                      </li>
                      <li>
                        The maximize icon is hidden via the <code>d-none</code> Bootstrap utility
                        class (not inline <code>display</code>) so it doesn’t override the icon
                        library’s natural display value — this works correctly with FontAwesome,
                        Lucide, Tabler Icons, etc.
                      </li>
                      <li>
                        Fullscreen on <code>document.documentElement</code> (i.e.
                        <code>&lt;html&gt;</code>) means the entire page goes fullscreen. To
                        fullscreen just a card, use the
                        <a href="/docs/javascript/card-widget#programmatic-api"
                          >CardWidget <code>maximize()</code> method</a
                        >
                        instead.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
