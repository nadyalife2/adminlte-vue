<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Direct Chat Plugin'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Direct Chat Plugin' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>The DirectChat plugin toggles the contacts pane in a direct chat widget.</p>
                    <h5 id="usage">Usage</h5>
                    <p>This plugin is activated via data attributes.</p>
                    <p><strong>Data API</strong></p>
                    <p>
                      Add <code>data-lte-toggle=&quot;chat-pane&quot;</code> to a button inside a
                      <code>.direct-chat</code> container to toggle the contacts list.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card direct-chat&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-header&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-title&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Direct Chat</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-tools&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn btn-tool&quot;</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;chat-pane&quot;</span><span style="color:#9CDCFE"> title</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;Toggle Contacts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-people-fill&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-body&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-messages&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">      &lt;!-- Chat messages go here --&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-contacts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">      &lt;!-- Contacts list goes here --&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span></code></pre>
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
                          <td><code>expanded.lte.direct-chat</code></td>
                          <td>Fired when the contacts pane is opened.</td>
                        </tr>
                        <tr>
                          <td><code>collapsed.lte.direct-chat</code></td>
                          <td>Fired when the contacts pane is closed.</td>
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
                          <td><code>direct-chat-contacts-open</code></td>
                          <td>
                            Applied to the <code>.direct-chat</code> container when the contacts
                            pane is visible.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h5 id="programmatic-api">Programmatic API</h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">DirectChat</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> &quot;admin-lte&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> chat</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;.direct-chat&quot;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> dc</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">new</span><span style="color:#DCDCAA"> DirectChat</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">chat</span><span style="color:#D4D4D4">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">dc</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">toggle</span><span style="color:#D4D4D4">()  </span><span style="color:#6A9955">// show or hide the contacts pane</span></span></code></pre>
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
                            Toggles the <code>direct-chat-contacts-open</code> class on the
                            <code>.direct-chat</code> container. Fires
                            <code>expanded.lte.direct-chat</code> or
                            <code>collapsed.lte.direct-chat</code>.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      The constructor takes no config object — pass only the
                      <code>.direct-chat</code> element.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
