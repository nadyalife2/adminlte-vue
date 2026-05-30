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
                    ><code><span class="line"><span style="color:#6A9955">&lt;!--begin::Sidebar--&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;app-sidebar bg-body-secondary shadow&quot;</span><span style="color:#9CDCFE"> data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dark&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">  &lt;!--begin::Sidebar Brand--&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;sidebar-brand&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">    &lt;!--begin::Brand Link--&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;./index.html&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;brand-link&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">      &lt;!--begin::Brand Image--&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">img</span></span>
<span class="line"><span style="color:#9CDCFE">        src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;./assets/img/AdminLTELogo.png&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">        alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;AdminLTE Logo&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">        class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;brand-image opacity-75 shadow&quot;</span></span>
<span class="line"><span style="color:#808080">      /&gt;</span></span>
<span class="line"><span style="color:#6A9955">      &lt;!--end::Brand Image--&gt;</span></span>
<span class="line"><span style="color:#6A9955">      &lt;!--begin::Brand Text--&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;brand-text fw-light&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">AdminLTE 4</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">      &lt;!--end::Brand Text--&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">    &lt;!--end::Brand Link--&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">  &lt;!--end::Sidebar Brand--&gt;</span></span>
<span class="line"><span style="color:#6A9955">  &lt;!--begin::Sidebar Wrapper--&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;sidebar-wrapper&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">nav</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;mt-2&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">      &lt;!--begin::Sidebar Menu--&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">ul</span></span>
<span class="line"><span style="color:#9CDCFE">        class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav sidebar-menu flex-column&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">        data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;treeview&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">        role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;menu&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">        data-accordion</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;false&quot;</span></span>
<span class="line"><span style="color:#808080">      &gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-header&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Nav Header</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;./index.html&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-circle-fill&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Level 1</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-circle-fill&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">              Treeview</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-arrow bi bi-chevron-right&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav nav-treeview&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;./index.html&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">                &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-circle&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">                &lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">                  Level 2 (Badge)</span></span>
<span class="line"><span style="color:#808080">                  &lt;</span><span style="color:#569CD6">span</span></span>
<span class="line"><span style="color:#9CDCFE">                    class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-badge badge text-bg-secondary me-3&quot;</span></span>
<span class="line"><span style="color:#808080">                  &gt;</span></span>
<span class="line"><span style="color:#D4D4D4">                    6</span></span>
<span class="line"><span style="color:#808080">                  &lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">                &lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;./index.html&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">                &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-circle&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">                &lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Level 2</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;./index.html&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link active&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-circle-fill&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Level 1 Active</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item menu-open&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link active&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-circle-fill&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">              Treeview Menu Open</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-arrow bi bi-chevron-right&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav nav-treeview&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;./index.html&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link active&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">                &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-circle&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">                &lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Level 2 Active</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;./index.html&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">                &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-icon bi bi-circle&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">                &lt;</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Level 2</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">p</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">      &lt;!--end::Sidebar Menu--&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">nav</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">  &lt;!--end::Sidebar Wrapper--&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">&lt;!--end::Sidebar--&gt;</span></span></code></pre>
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
                    ><code><span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;sidebar-brand&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;./index.html&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;brand-link logo-switch&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">img</span></span>
<span class="line"><span style="color:#9CDCFE">      src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;./assets/img/AdminLTELogo.png&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">      alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;AdminLTE Logo Small&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">      class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;brand-image-xl logo-xs opacity-75 shadow&quot;</span></span>
<span class="line"><span style="color:#808080">    /&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">img</span></span>
<span class="line"><span style="color:#9CDCFE">      src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;./assets/img/AdminLTEFullLogo.png&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">      alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;AdminLTE Logo Large&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">      class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;brand-image-xs logo-xl opacity-75&quot;</span></span>
<span class="line"><span style="color:#808080">    /&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span></code></pre>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
