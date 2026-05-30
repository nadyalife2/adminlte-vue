<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Common Patterns & Recipes'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Recipes' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      Copy-paste solutions for the patterns that show up in every admin dashboard.
                      Each recipe assumes you’ve followed
                      <a href="/docs/getting-started">Getting Started</a> and have a working AdminLTE
                      page to build on.
                    </p>
                    <h5 id="a-multi-level-sidebar-with-icons-badges-and-headers">
                      A multi-level sidebar with icons, badges, and headers
                    </h5>
                    <p>
                      The demo dashboards use this exact pattern. Group sections with
                      <code>.nav-header</code>, indicate item depth with nested
                      <code>.nav-treeview</code> lists, and use <code>.navbar-badge</code> for
                      counts.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;app-sidebar bg-body-secondary shadow&quot;</span><span style="color:#9CDCFE"> data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dark&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;sidebar-brand&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;/&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;brand-link&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;brand-text fw-light&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">My Dashboard</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;sidebar-wrapper&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">nav</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;mt-2&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav sidebar-menu flex-column&quot;</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;treeview&quot;</span><span style="color:#9CDCFE"> role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;menu&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-header&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">MAIN</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;/&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link active&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-speedometer&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Dashboard</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-folder&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">              Projects</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;badge text-bg-info ms-2&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">12</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-arrow bi bi-chevron-right&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav nav-treeview&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link&quot;</span><span style="color:#808080">&gt;&lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-circle&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;&lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Active</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link&quot;</span><span style="color:#808080">&gt;&lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-circle&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;&lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Archived</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-header&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">REPORTS</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-bar-chart&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Sales</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;badge text-bg-danger ms-auto&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">3</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">nav</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <p>
                      To mark the current page as active, server-render the
                      <code>.active</code> class onto the matching <code>.nav-link</code>. For SPA
                      frameworks, add it on route change.
                    </p>
                    <h5 id="highlighting-the-active-sidebar-item-from-javascript">
                      Highlighting the active sidebar item from JavaScript
                    </h5>
                    <p>
                      If you’re rendering the sidebar once and want client-side route highlighting:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#569CD6">function</span><span style="color:#DCDCAA"> setActiveSidebarItem</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">href</span><span style="color:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#9CDCFE">  document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelectorAll</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;.sidebar-menu .nav-link&quot;</span><span style="color:#D4D4D4">).</span><span style="color:#DCDCAA">forEach</span><span style="color:#D4D4D4">((</span><span style="color:#9CDCFE">el</span><span style="color:#D4D4D4">) </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#9CDCFE">    el</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">classList</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">toggle</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;active&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">el</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getAttribute</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;href&quot;</span><span style="color:#D4D4D4">) === </span><span style="color:#9CDCFE">href</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">  })</span></span>
<span class="line"><span style="color:#D4D4D4">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// Call on route change</span></span>
<span class="line"><span style="color:#DCDCAA">setActiveSidebarItem</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">window</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">location</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">pathname</span><span style="color:#D4D4D4">)</span></span></code></pre>
                    <h5 id="responsive-data-tables">Responsive data tables</h5>
                    <p>
                      Wrap a <code>&lt;table&gt;</code> in <code>.table-responsive</code> so it gets
                      a horizontal scrollbar on narrow viewports instead of overflowing the card.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-header&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-title&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Recent orders</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-body p-0&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;table-responsive&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">table</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;table table-striped align-middle mb-0&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">thead</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">tr</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">th</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">#</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">th</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">th</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Customer</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">th</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">th</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Total</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">th</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">th</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Status</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">th</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">th</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;text-end&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Actions</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">th</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">tr</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">thead</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">tbody</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">          &lt;!-- rows --&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">tbody</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">table</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <p>
                      For interactive sorting/filtering/pagination, use
                      <a href="/docs/integrations#tabulator">Tabulator</a> —
                      <code>tables/data.html</code> in the demo has a full example.
                    </p>
                    <h5 id="a-user-dropdown-in-the-topbar">A user dropdown in the topbar</h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item dropdown user-menu&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link dropdown-toggle&quot;</span><span style="color:#9CDCFE"> data-bs-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dropdown&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;d-none d-md-inline me-1&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Jane Doe</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-person-circle fs-5&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dropdown-menu dropdown-menu-end&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;/profile&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dropdown-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-person me-2&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Profile</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;/settings&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dropdown-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-gear me-2&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Settings</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;&lt;</span><span style="color:#569CD6">hr</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dropdown-divider&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;/logout&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dropdown-item text-danger&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-box-arrow-right me-2&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Sign out</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <p>
                      Put this inside the
                      <code>&lt;ul class=&quot;navbar-nav ms-auto&quot;&gt;</code> in
                      <code>.app-header</code>.
                    </p>
                    <h5 id="a-kpi-card-small-box">A KPI card (small-box)</h5>
                    <p>The bright-coloured stat boxes at the top of most dashboards:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;row g-3&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;col-lg-3 col-6&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;small-box text-bg-primary&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;inner&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">h3</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">150</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">New orders</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-cart small-box-icon&quot;</span><span style="color:#9CDCFE"> aria-hidden</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;true&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;small-box-footer link-light&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">        More info </span><span style="color:#808080">&lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-arrow-right&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">  &lt;!-- repeat 3 more times with different values + colours --&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <p>
                      Swap <code>text-bg-primary</code> for <code>text-bg-success</code>,
                      <code>text-bg-warning</code>, <code>text-bg-danger</code>, etc.
                    </p>
                    <h5 id="a-breadcrumb--page-title-row">A breadcrumb + page-title row</h5>
                    <p>
                      This is the standard <code>.app-content-header</code> pattern used across
                      every demo page:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;app-content-header&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;container-fluid&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;row&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;col-sm-6&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;mb-0&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Page Title</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;col-sm-6&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">ol</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;breadcrumb float-sm-end&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;breadcrumb-item&quot;</span><span style="color:#808080">&gt;&lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;/&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Home</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;breadcrumb-item&quot;</span><span style="color:#808080">&gt;&lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;/section&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Section</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;breadcrumb-item active&quot;</span><span style="color:#9CDCFE"> aria-current</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;page&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Current page</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">ol</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <h5 id="a-timeline">A timeline</h5>
                    <p>For activity feeds, audit logs, or roadmap views:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;timeline&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-envelope bg-info&quot;</span><span style="color:#9CDCFE"> aria-hidden</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;true&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;timeline-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;time&quot;</span><span style="color:#808080">&gt;&lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-clock&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4"> 12:05</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;timeline-header&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Olivia</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4"> sent you a message</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;timeline-body&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">        Hey, can we review the Q4 numbers tomorrow at 10?</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;timeline-footer&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn btn-primary btn-sm&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Read more</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">  &lt;!-- repeat --&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <p>
                      The timeline component lives in <code>_timeline.scss</code> and has variants.
                      See <a href="/ui/timeline"><code>/UI/timeline.html</code></a> for the
                      full set.
                    </p>
                    <h5 id="a-direct-chat-widget">A direct-chat widget</h5>
                    <p>
                      The chat-style card used for live customer support, team chat, etc. Includes
                      contact toggle and message bubbles.
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card direct-chat direct-chat-primary&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-header&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-title&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Direct Chat</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-tools&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;badge text-bg-primary&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">3 new</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn btn-tool&quot;</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;chat-pane&quot;</span><span style="color:#9CDCFE"> title</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;Contacts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-people-fill&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-body&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-messages&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-msg&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-infos clearfix&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-name float-start&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Olivia</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-timestamp float-end&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">12:05</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">img</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-img&quot;</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;/avatars/olivia.jpg&quot;</span><span style="color:#9CDCFE"> alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;&quot;</span><span style="color:#808080"> /&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-text&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Hey, ready for the review?</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-msg right&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-infos clearfix&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-name float-end&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">You</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-timestamp float-start&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">12:06</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">img</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-img&quot;</span><span style="color:#9CDCFE"> src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;/avatars/me.jpg&quot;</span><span style="color:#9CDCFE"> alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;&quot;</span><span style="color:#808080"> /&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-text&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Yes, on my way.</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;direct-chat-contacts&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">      &lt;!-- contacts list, shown when chat-pane toggled --&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-footer&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">form</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;input-group&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">input</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;text&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;form-control&quot;</span><span style="color:#9CDCFE"> placeholder</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;Message…&quot;</span><span style="color:#808080"> /&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;submit&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn btn-primary&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-send&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">form</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <p>
                      For a full-page chat application, see <code>/pages/chat.html</code> in the
                      demo.
                    </p>
                    <h5 id="reacting-to-layoutsidebar-changes">
                      Reacting to layout/sidebar changes
                    </h5>
                    <p>
                      Listen for plugin events to coordinate with your own code — e.g., refit a
                      chart when the sidebar collapses (so the chart re-measures its container
                      width):
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#569CD6">let</span><span style="color:#9CDCFE"> chart</span><span style="color:#D4D4D4"> = </span><span style="color:#6A9955">/* your ApexCharts instance */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;collapse.lte.push-menu&quot;</span><span style="color:#D4D4D4">, () </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#6A9955">  // wait for the transition to finish (~300ms by default)</span></span>
<span class="line"><span style="color:#DCDCAA">  setTimeout</span><span style="color:#D4D4D4">(() </span><span style="color:#569CD6">=&gt;</span><span style="color:#9CDCFE"> chart</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">updateOptions</span><span style="color:#D4D4D4">({}), </span><span style="color:#B5CEA8">350</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;open.lte.push-menu&quot;</span><span style="color:#D4D4D4">, () </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#DCDCAA">  setTimeout</span><span style="color:#D4D4D4">(() </span><span style="color:#569CD6">=&gt;</span><span style="color:#9CDCFE"> chart</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">updateOptions</span><span style="color:#D4D4D4">({}), </span><span style="color:#B5CEA8">350</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span></code></pre>
                    <p>
                      The same pattern works for Tabulator, FullCalendar, and any other library that
                      reads its container width on init.
                    </p>
                    <h5 id="loading-content-into-a-card-via-fetch">
                      Loading content into a card via fetch
                    </h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card&quot;</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;users-card&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-header&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-title&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Users</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-tools&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;spinner-border spinner-border-sm text-secondary d-none&quot;</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;users-spinner&quot;</span><span style="color:#9CDCFE"> role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;status&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;card-body p-0&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;users-body&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;text-secondary p-3&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Loading</span><span style="color:#569CD6">&amp;hellip;</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#569CD6">  const</span><span style="color:#4FC1FF"> spinner</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getElementById</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;users-spinner&quot;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#569CD6">  const</span><span style="color:#4FC1FF"> body</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getElementById</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;users-body&quot;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">  spinner</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">classList</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">remove</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;d-none&quot;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#DCDCAA">  fetch</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;/api/users&quot;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">    .</span><span style="color:#DCDCAA">then</span><span style="color:#D4D4D4">((</span><span style="color:#9CDCFE">r</span><span style="color:#D4D4D4">) </span><span style="color:#569CD6">=&gt;</span><span style="color:#9CDCFE"> r</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">text</span><span style="color:#D4D4D4">())</span></span>
<span class="line"><span style="color:#D4D4D4">    .</span><span style="color:#DCDCAA">then</span><span style="color:#D4D4D4">((</span><span style="color:#9CDCFE">html</span><span style="color:#D4D4D4">) </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">body</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">innerHTML</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">html</span><span style="color:#D4D4D4"> })</span></span>
<span class="line"><span style="color:#D4D4D4">    .</span><span style="color:#DCDCAA">catch</span><span style="color:#D4D4D4">(() </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">body</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">textContent</span><span style="color:#D4D4D4"> = </span><span style="color:#CE9178">&quot;Failed to load.&quot;</span><span style="color:#D4D4D4"> })</span></span>
<span class="line"><span style="color:#D4D4D4">    .</span><span style="color:#DCDCAA">finally</span><span style="color:#D4D4D4">(() </span><span style="color:#569CD6">=&gt;</span><span style="color:#9CDCFE"> spinner</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">classList</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">add</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;d-none&quot;</span><span style="color:#D4D4D4">))</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">script</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <h5 id="confirming-destructive-actions-before-submission">
                      Confirming destructive actions before submission
                    </h5>
                    <p>Bootstrap modal + a tiny confirmation pattern:</p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn btn-danger&quot;</span><span style="color:#9CDCFE"> data-bs-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;modal&quot;</span><span style="color:#9CDCFE"> data-bs-target</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#confirmDelete&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">  Delete account</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;modal fade&quot;</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;confirmDelete&quot;</span><span style="color:#9CDCFE"> tabindex</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;-1&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;modal-dialog&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;modal-content&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;modal-header&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">h5</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;modal-title&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Delete account?</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">h5</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn-close&quot;</span><span style="color:#9CDCFE"> data-bs-dismiss</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;modal&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;modal-body&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">        This permanently deletes your account and all associated data. This cannot be undone.</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;modal-footer&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn btn-outline-secondary&quot;</span><span style="color:#9CDCFE"> data-bs-dismiss</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;modal&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Cancel</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">form</span><span style="color:#9CDCFE"> action</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;/account/delete&quot;</span><span style="color:#9CDCFE"> method</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;POST&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;d-inline&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;submit&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn btn-danger&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Yes, delete it</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">form</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span></code></pre>
                    <p>
                      The <a href="/docs/color-mode">Color Mode</a>,
                      <a href="/docs/javascript/accessibility">Accessibility</a>, and the bundled JS
                      handle Escape-to-close, focus trap, and keyboard navigation inside the modal
                      automatically.
                    </p>
                    <h5 id="where-to-next">Where to next</h5>
                    <ul>
                      <li>
                        <a href="/docs/javascript/plugins-overview">JavaScript Plugins Overview</a> —
                        every plugin’s event names and methods
                      </li>
                      <li>
                        <a href="/docs/integrations">Recommended Integrations</a> — when you need
                        more than what’s in this list
                      </li>
                      <li>
                        <a href="/docs/customization">Customization</a> — change colours, sidebar
                        width, breakpoints
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
