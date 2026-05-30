<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Layout Plugin'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Layout Plugin' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      The Layout plugin manages CSS transitions during layout changes and signals
                      when the app has finished loading.
                    </p>
                    <h5 id="behavior">Behavior</h5>
                    <p>The Layout plugin performs two key tasks automatically:</p>
                    <ol>
                      <li>
                        <p>
                          <strong>Hold Transitions</strong> - During window resize, CSS transitions
                          on the sidebar, navbar, and content area are temporarily disabled to
                          prevent visual glitches. The <code>hold-transition</code> class is added
                          to <code>&lt;body&gt;</code> for the duration.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>App Loaded Signal</strong> - After a 400ms delay on
                          DOMContentLoaded, the <code>app-loaded</code> class is added to
                          <code>&lt;body&gt;</code>. Use this class in CSS to defer animations until
                          the app is ready, preventing flicker on initial page load.
                        </p>
                      </li>
                    </ol>
                    <h5 id="css-classes">CSS Classes</h5>

                    <table>
                      <thead>
                        <tr>
                          <th>Class</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>hold-transition</code></td>
                          <td>
                            Temporarily disables CSS transitions on layout elements. Applied during
                            window resize.
                          </td>
                        </tr>
                        <tr>
                          <td><code>app-loaded</code></td>
                          <td>
                            Added to <code>&lt;body&gt;</code> after the initial layout is ready.
                            Use for entrance animations.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="usage-in-css">Usage in CSS</h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="css"
                    ><code><span class="line"><span style="color:#6A9955">/* Hide sidebar transitions until the app is loaded */</span></span>
<span class="line"><span style="color:#D7BA7D">body:not</span><span style="color:#D4D4D4">(</span><span style="color:#D7BA7D">.app-loaded</span><span style="color:#D4D4D4">) </span><span style="color:#D7BA7D">.app-sidebar</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#9CDCFE">  transition</span><span style="color:#D4D4D4">: </span><span style="color:#CE9178">none</span><span style="color:#569CD6"> !important</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">/* Only animate after app is loaded */</span></span>
<span class="line"><span style="color:#D7BA7D">body.app-loaded</span><span style="color:#D7BA7D"> .app-sidebar</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#9CDCFE">  transition</span><span style="color:#D4D4D4">: width </span><span style="color:#B5CEA8">0.3s</span><span style="color:#CE9178"> ease</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">}</span></span></code></pre>
                    <h5 id="programmatic-api">Programmatic API</h5>
                    <p>
                      The Layout plugin self-initializes on <code>DOMContentLoaded</code> — there’s
                      nothing to wire up manually. The only public method is exposed for advanced
                      cases where you want to suppress transitions around your own DOM mutations:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">Layout</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> &quot;admin-lte&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> layout</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">new</span><span style="color:#DCDCAA"> Layout</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">body</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#9CDCFE">layout</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">holdTransition</span><span style="color:#D4D4D4">(</span><span style="color:#B5CEA8">200</span><span style="color:#D4D4D4">)   </span><span style="color:#6A9955">// disable transitions for 200ms</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// ... do something that would otherwise animate awkwardly</span></span>
<span class="line"><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">body</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">classList</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">toggle</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;sidebar-mini&quot;</span><span style="color:#D4D4D4">)</span></span></code></pre>
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
                          <td><code>holdTransition(time?)</code></td>
                          <td><code>void</code></td>
                          <td>
                            Adds <code>hold-transition</code> to <code>&lt;body&gt;</code>, removes
                            it after <code>time</code> milliseconds (default <code>100</code>). Use
                            to suppress CSS transitions during programmatic layout changes.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="notes">Notes</h5>
                    <ul>
                      <li>
                        The <code>hold-transition</code> class is automatically removed after the
                        timeout. You don’t need to clean up.
                      </li>
                      <li>
                        No data attributes — the plugin reads no config and initialises with the
                        body element on page load.
                      </li>
                      <li>
                        If you need to detect when the initial page-load animations are done, watch
                        for the <code>app-loaded</code> class on <code>&lt;body&gt;</code> or listen
                        for the standard <code>load</code> event.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
