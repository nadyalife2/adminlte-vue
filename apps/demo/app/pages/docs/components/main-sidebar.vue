<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Main Sidebar Component'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Main Sidebar Component' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>
                      The sidebar used in this page to the left provides an example of what your
                      sidebar would look like. Construction of a sidebar:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!--begin::Sidebar--></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-sidebar bg-body-secondary shadow"</span><span style="color:#9CDCFE"> data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!--begin::Sidebar Brand--></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar-brand"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">    &#x3C;!--begin::Brand Link--></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"./index.html"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">      &#x3C;!--begin::Brand Image--></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">img</span></span>
<span class="line"><span style="color:#9CDCFE">        src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"./assets/img/AdminLTELogo.png"</span></span>
<span class="line"><span style="color:#9CDCFE">        alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"AdminLTE Logo"</span></span>
<span class="line"><span style="color:#9CDCFE">        class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-image opacity-75 shadow"</span></span>
<span class="line"><span style="color:#808080">      /></span></span>
<span class="line"><span style="color:#6A9955">      &#x3C;!--end::Brand Image--></span></span>
<span class="line"><span style="color:#6A9955">      &#x3C;!--begin::Brand Text--></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-text fw-light"</span><span style="color:#808080">></span><span style="color:#D4D4D4">AdminLTE 4</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">      &#x3C;!--end::Brand Text--></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">    &#x3C;!--end::Brand Link--></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!--end::Sidebar Brand--></span></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!--begin::Sidebar Wrapper--></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar-wrapper"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">nav</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"mt-2"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">      &#x3C;!--begin::Sidebar Menu--></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">ul</span></span>
<span class="line"><span style="color:#9CDCFE">        class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav sidebar-menu flex-column"</span></span>
<span class="line"><span style="color:#9CDCFE">        data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"treeview"</span></span>
<span class="line"><span style="color:#9CDCFE">        role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"menu"</span></span>
<span class="line"><span style="color:#9CDCFE">        data-accordion</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"false"</span></span>
<span class="line"><span style="color:#808080">      ></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-header"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Nav Header</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"./index.html"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-circle-fill"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Level 1</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-circle-fill"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">              Treeview</span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-arrow bi bi-chevron-right"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav nav-treeview"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"./index.html"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-circle"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">                  Level 2 (Badge)</span></span>
<span class="line"><span style="color:#808080">                  &#x3C;</span><span style="color:#569CD6">span</span></span>
<span class="line"><span style="color:#9CDCFE">                    class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-badge badge text-bg-secondary me-3"</span></span>
<span class="line"><span style="color:#808080">                  ></span></span>
<span class="line"><span style="color:#D4D4D4">                    6</span></span>
<span class="line"><span style="color:#808080">                  &#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"./index.html"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-circle"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Level 2</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"./index.html"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link active"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-circle-fill"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Level 1 Active</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item menu-open"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link active"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-circle-fill"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">              Treeview Menu Open</span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-arrow bi bi-chevron-right"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav nav-treeview"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"./index.html"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link active"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-circle"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Level 2 Active</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"./index.html"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-icon bi bi-circle"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span><span style="color:#D4D4D4">Level 2</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">      &#x3C;!--end::Sidebar Menu--></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">nav</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!--end::Sidebar Wrapper--></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">&#x3C;!--end::Sidebar--></span></span></code></pre>
                    <h2 id="alternate-logo">Alternate Logo</h2>
                    <p>
                      You can use two logo images instead of logo with text, you only need to change
                      the markup to this:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar-brand"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"./index.html"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-link logo-switch"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">img</span></span>
<span class="line"><span style="color:#9CDCFE">      src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"./assets/img/AdminLTELogo.png"</span></span>
<span class="line"><span style="color:#9CDCFE">      alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"AdminLTE Logo Small"</span></span>
<span class="line"><span style="color:#9CDCFE">      class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-image-xl logo-xs opacity-75 shadow"</span></span>
<span class="line"><span style="color:#808080">    /></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">img</span></span>
<span class="line"><span style="color:#9CDCFE">      src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"./assets/img/AdminLTEFullLogo.png"</span></span>
<span class="line"><span style="color:#9CDCFE">      alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"AdminLTE Logo Large"</span></span>
<span class="line"><span style="color:#9CDCFE">      class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"brand-image-xs logo-xl opacity-75"</span></span>
<span class="line"><span style="color:#808080">    /></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span></code></pre>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
