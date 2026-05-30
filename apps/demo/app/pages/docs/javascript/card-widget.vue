<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Card Widget Plugin'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Card Widget Plugin' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      The CardWidget plugin provides collapse, expand, remove, and maximize
                      functionality for card components.
                    </p>
                    <h5 id="usage">Usage</h5>
                    <p>
                      This plugin is activated via data attributes on buttons inside a
                      <code>.card</code> element.
                    </p>
                    <p><strong>Data API</strong></p>
                    <p>
                      Add <code>data-lte-toggle=&quot;card-collapse&quot;</code> to toggle card body
                      visibility, <code>data-lte-toggle=&quot;card-remove&quot;</code> to remove the
                      card, or <code>data-lte-toggle=&quot;card-maximize&quot;</code> to maximize
                      it.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-header&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-title&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Card Title</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-tools&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn btn-tool&quot;</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-collapse&quot;</span><span style="color:#9CDCFE"> title</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;Collapse&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> data-lte-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;expand&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-plus-lg&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> data-lte-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;collapse&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-dash-lg&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn btn-tool&quot;</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-maximize&quot;</span><span style="color:#9CDCFE"> title</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;Maximize&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-fullscreen&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn btn-tool&quot;</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-remove&quot;</span><span style="color:#9CDCFE"> title</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;Remove&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-x-lg&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-body&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Card content here.</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-footer&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Card footer</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <h5 id="events">Events</h5>
                    <p>The plugin dispatches the following events on the trigger element:</p>

                    <table>
                      <thead>
                        <tr>
                          <th>Event</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>collapsed.lte.card-widget</code></td>
                          <td>Fired when the card body is collapsed.</td>
                        </tr>
                        <tr>
                          <td><code>expanded.lte.card-widget</code></td>
                          <td>Fired when the card body is expanded.</td>
                        </tr>
                        <tr>
                          <td><code>remove.lte.card-widget</code></td>
                          <td>Fired when the card is removed.</td>
                        </tr>
                        <tr>
                          <td><code>maximized.lte.card-widget</code></td>
                          <td>Fired when the card is maximized.</td>
                        </tr>
                        <tr>
                          <td><code>minimized.lte.card-widget</code></td>
                          <td>Fired when the card is minimized (restored from maximized).</td>
                        </tr>
                      </tbody>
                    </table>
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
                          <td><code>collapsed-card</code></td>
                          <td>Applied to the card when collapsed.</td>
                        </tr>
                        <tr>
                          <td><code>maximized-card</code></td>
                          <td>Applied to the card when maximized.</td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="configuration">Configuration</h5>
                    <p>
                      The plugin reads no <code>data-*</code> configuration attributes. To customize
                      behaviour, instantiate it programmatically and pass a config:
                    </p>

                    <table>
                      <thead>
                        <tr>
                          <th>Option</th>
                          <th>Default</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>animationSpeed</code></td>
                          <td><code>500</code></td>
                          <td>Slide animation duration in milliseconds.</td>
                        </tr>
                        <tr>
                          <td><code>collapseTrigger</code></td>
                          <td><code>[data-lte-toggle=&quot;card-collapse&quot;]</code></td>
                          <td>CSS selector for collapse buttons.</td>
                        </tr>
                        <tr>
                          <td><code>removeTrigger</code></td>
                          <td><code>[data-lte-toggle=&quot;card-remove&quot;]</code></td>
                          <td>CSS selector for remove buttons.</td>
                        </tr>
                        <tr>
                          <td><code>maximizeTrigger</code></td>
                          <td><code>[data-lte-toggle=&quot;card-maximize&quot;]</code></td>
                          <td>CSS selector for maximize buttons.</td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="programmatic-api">Programmatic API</h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">CardWidget</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> &quot;admin-lte&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> card</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;#chart-card&quot;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> widget</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">new</span><span style="color:#DCDCAA"> CardWidget</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">card</span><span style="color:#D4D4D4">, { </span><span style="color:#9CDCFE">animationSpeed:</span><span style="color:#B5CEA8"> 250</span><span style="color:#D4D4D4"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">widget</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">maximize</span><span style="color:#D4D4D4">()     </span><span style="color:#6A9955">// expand to fullscreen</span></span>
<span class="line"><span style="color:#9CDCFE">widget</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">collapse</span><span style="color:#D4D4D4">()     </span><span style="color:#6A9955">// hide body and footer</span></span>
<span class="line"><span style="color:#9CDCFE">widget</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">expand</span><span style="color:#D4D4D4">()       </span><span style="color:#6A9955">// restore from collapsed</span></span>
<span class="line"><span style="color:#9CDCFE">widget</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">remove</span><span style="color:#D4D4D4">()       </span><span style="color:#6A9955">// animate out and remove from DOM</span></span>
<span class="line"><span style="color:#9CDCFE">widget</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">toggle</span><span style="color:#D4D4D4">()       </span><span style="color:#6A9955">// expand / collapse based on current state</span></span>
<span class="line"><span style="color:#9CDCFE">widget</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">toggleMaximize</span><span style="color:#D4D4D4">()  </span><span style="color:#6A9955">// maximize / minimize based on current state</span></span></code></pre>
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
                          <td><code>collapse()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Slides up body and footer, adds <code>collapsed-card</code>. Fires
                            <code>collapsed.lte.card-widget</code>.
                          </td>
                        </tr>
                        <tr>
                          <td><code>expand()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Slides down body and footer, removes <code>collapsed-card</code>. Fires
                            <code>expanded.lte.card-widget</code>.
                          </td>
                        </tr>
                        <tr>
                          <td><code>toggle()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Calls <code>collapse()</code> or <code>expand()</code> based on the
                            <code>collapsed-card</code> class.
                          </td>
                        </tr>
                        <tr>
                          <td><code>maximize()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Sets the card to fixed fullscreen positioning, adds
                            <code>maximized-card</code>. Fires
                            <code>maximized.lte.card-widget</code>.
                          </td>
                        </tr>
                        <tr>
                          <td><code>minimize()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Restores original size, removes <code>maximized-card</code>. Fires
                            <code>minimized.lte.card-widget</code>.
                          </td>
                        </tr>
                        <tr>
                          <td><code>toggleMaximize()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Calls <code>maximize()</code> or <code>minimize()</code> based on the
                            <code>maximized-card</code> class.
                          </td>
                        </tr>
                        <tr>
                          <td><code>remove()</code></td>
                          <td><code>void</code></td>
                          <td>
                            Animates the card out and removes it from the DOM. Fires
                            <code>remove.lte.card-widget</code>.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="notes">Notes</h5>
                    <ul>
                      <li>
                        Nested cards are handled correctly: collapsing a parent card does not affect
                        child cards.
                      </li>
                      <li>
                        Maximizing a card also adds <code>maximized-card</code> to
                        <code>&lt;html&gt;</code> so global styles can react.
                      </li>
                      <li>
                        A card that’s collapsed when you maximize it remembers that — the
                        <code>was-collapsed</code> class tracks this state.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
