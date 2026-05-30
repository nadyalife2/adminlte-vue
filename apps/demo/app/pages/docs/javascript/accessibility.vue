<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Accessibility Module'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Accessibility Module' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      The Accessibility module provides WCAG 2.1 AA compliance features that are
                      automatically initialized when AdminLTE loads.
                    </p>
                    <h5 id="features">Features</h5>

                    <table>
                      <thead>
                        <tr>
                          <th>Feature</th>
                          <th>WCAG Criterion</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Skip Links</td>
                          <td>2.4.1 Bypass Blocks</td>
                          <td>Adds “Skip to main content” and “Skip to navigation” links.</td>
                        </tr>
                        <tr>
                          <td>Focus Management</td>
                          <td>2.4.3 &amp; 2.4.7</td>
                          <td>Tab cycling, focus trapping in modals, and focus restoration.</td>
                        </tr>
                        <tr>
                          <td>Keyboard Navigation</td>
                          <td>2.1.1 Keyboard</td>
                          <td>Arrow key navigation in menus, Enter/Space for custom buttons.</td>
                        </tr>
                        <tr>
                          <td>Reduced Motion</td>
                          <td>2.3.3 Animation</td>
                          <td>
                            Respects <code>prefers-reduced-motion</code> by disabling animations.
                          </td>
                        </tr>
                        <tr>
                          <td>Live Announcements</td>
                          <td>4.1.3 Status Messages</td>
                          <td>Announces errors and success messages to screen readers.</td>
                        </tr>
                        <tr>
                          <td>Error Identification</td>
                          <td>3.3.1 &amp; 3.3.2</td>
                          <td>Auto-labels unlabelled inputs, announces form validation errors.</td>
                        </tr>
                        <tr>
                          <td>Table Accessibility</td>
                          <td>1.3.1 Info &amp; Relationships</td>
                          <td>
                            Adds <code>scope</code> attributes to table headers automatically.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="configuration">Configuration</h5>
                    <p>
                      The module is initialized in <code>adminlte.ts</code> with all features
                      enabled by default:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#DCDCAA">initAccessibility</span><span style="color:#D4D4D4">({</span></span>
<span class="line"><span style="color:#9CDCFE">  announcements:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">  skipLinks:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">  focusManagement:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">  keyboardNavigation:</span><span style="color:#569CD6"> true</span><span style="color:#D4D4D4">,</span></span>
<span class="line"><span style="color:#9CDCFE">  reducedMotion:</span><span style="color:#569CD6"> true</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span></code></pre>
                    <p>Set any option to <code>false</code> to disable that feature.</p>
                    <h5 id="public-api">Public API</h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">initAccessibility</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> &#39;admin-lte&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> a11y</span><span style="color:#D4D4D4"> = </span><span style="color:#DCDCAA">initAccessibility</span><span style="color:#D4D4D4">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Announce a message to screen readers</span></span>
<span class="line"><span style="color:#9CDCFE">a11y</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">announce</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&#39;Item saved successfully&#39;</span><span style="color:#D4D4D4">, </span><span style="color:#CE9178">&#39;polite&#39;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#9CDCFE">a11y</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">announce</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&#39;Form has errors&#39;</span><span style="color:#D4D4D4">, </span><span style="color:#CE9178">&#39;assertive&#39;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Focus a specific element</span></span>
<span class="line"><span style="color:#9CDCFE">a11y</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">focusElement</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&#39;#my-input&#39;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Trap focus inside a container (useful for custom modals/dialogs)</span></span>
<span class="line"><span style="color:#9CDCFE">a11y</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">trapFocus</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&#39;.my-dialog&#39;</span><span style="color:#D4D4D4">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Add semantic landmarks to the page</span></span>
<span class="line"><span style="color:#9CDCFE">a11y</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addLandmarks</span><span style="color:#D4D4D4">()</span></span></code></pre>
                    <h5 id="utility-functions">Utility Functions</h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">accessibilityUtils</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> &#39;admin-lte&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Check color contrast ratio (WCAG 1.4.3)</span></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> result</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">accessibilityUtils</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">checkColorContrast</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&#39;rgb(0,0,0)&#39;</span><span style="color:#D4D4D4">, </span><span style="color:#CE9178">&#39;rgb(255,255,255)&#39;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#6A9955">// { ratio: 21, passes: true }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Check if an element is focusable</span></span>
<span class="line"><span style="color:#9CDCFE">accessibilityUtils</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">isFocusable</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">element</span><span style="color:#D4D4D4">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Generate a unique ID for ARIA attributes</span></span>
<span class="line"><span style="color:#9CDCFE">accessibilityUtils</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">generateId</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&#39;modal&#39;</span><span style="color:#D4D4D4">) </span><span style="color:#6A9955">// &quot;modal-x7k2m9p4q&quot;</span></span></code></pre>
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
                          <td><code>skip-links</code></td>
                          <td>Container for skip navigation links.</td>
                        </tr>
                        <tr>
                          <td><code>skip-link</code></td>
                          <td>Individual skip link, visible only on focus.</td>
                        </tr>
                        <tr>
                          <td><code>reduce-motion</code></td>
                          <td>
                            Added to <code>&lt;body&gt;</code> when user prefers reduced motion.
                          </td>
                        </tr>
                        <tr>
                          <td><code>sr-only</code></td>
                          <td>Screen reader only content (visually hidden).</td>
                        </tr>
                        <tr>
                          <td><code>live-region</code></td>
                          <td>ARIA live region for dynamic announcements.</td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="notes">Notes</h5>
                    <ul>
                      <li>
                        The module integrates with Bootstrap’s modal and dropdown events for focus
                        management.
                      </li>
                      <li>
                        Modal Escape key handling is deferred to Bootstrap to respect
                        <code>keyboard: false</code> and stacked modals.
                      </li>
                      <li>
                        Form validation announcements work automatically for any input with HTML5
                        validation attributes.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
