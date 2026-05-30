<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Color Mode Toggle'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Color Mode' }]"
  >

            <!--begin::Row-->
            <div class="row g-4">
              <div class="col-12">
                <div class="callout callout-info">
                  <h5 class="fw-bold">Tips</h5>
                  <p>
                    <a
                      href="https://getbootstrap.com/docs/5.3/customize/color-modes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="callout-link"
                    >
                      Color modes in Bootstrap
                    </a>
                    allow you to switch between light and dark modes. You can do this using the
                    data-bs-theme attribute. You can also create your own custom color modes.
                  </p>
                </div>
              </div>
              <!-- Start column -->
              <div class="col-12">
                <!--begin::Header-->
                <nav class="navbar navbar-expand bg-body">
                  <!--begin::Container-->
                  <div class="container-fluid">
                    <!--begin::Start Navbar links-->
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" data-lte-toggle="sidebar" href="#" role="button"
                          ><i class="bi bi-list"></i
                        ></a>
                      </li>
                      <li class="nav-item d-none d-md-block">
                        <a href="#" class="nav-link">Home</a>
                      </li>
                      <li class="nav-item d-none d-md-block">
                        <a href="#" class="nav-link">Contact</a>
                      </li>
                    </ul>
                    <!--end::Start Navbar links-->
                    <!--begin::End Navbar links-->
                    <ul class="navbar-nav ms-auto">
                      <li class="nav-item dropdown">
                        <button
                          class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
                          id="bd-theme"
                          type="button"
                          aria-expanded="false"
                          data-bs-toggle="dropdown"
                          data-bs-display="static"
                        >
                          <span class="theme-icon-active">
                            <i class="my-1"></i>
                          </span>
                          <span class="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>
                        </button>
                        <ul
                          class="dropdown-menu dropdown-menu-end"
                          aria-labelledby="bd-theme-text"
                          style="--bs-dropdown-min-width: 8rem"
                        >
                          <li>
                            <button
                              type="button"
                              class="dropdown-item d-flex align-items-center active"
                              data-bs-theme-value="light"
                              aria-pressed="false"
                            >
                              <i class="bi bi-sun-fill me-2"></i>
                              Light
                              <i class="bi bi-check-lg ms-auto d-none"></i>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              class="dropdown-item d-flex align-items-center"
                              data-bs-theme-value="dark"
                              aria-pressed="false"
                            >
                              <i class="bi bi-moon-fill me-2"></i>
                              Dark
                              <i class="bi bi-check-lg ms-auto d-none"></i>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              class="dropdown-item d-flex align-items-center"
                              data-bs-theme-value="auto"
                              aria-pressed="true"
                            >
                              <i class="bi bi-circle-half me-2"></i>
                              Auto
                              <i class="bi bi-check-lg ms-auto d-none"></i>
                            </button>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <!--end::End Navbar links-->
                  </div>
                  <!--end::Container-->
                </nav>
                <!--end::Header-->
              </div>
              <!-- Start column -->
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&lt;!--begin::Header--&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;</span><span style="color:#569CD6">nav</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;navbar navbar-expand bg-body&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">  &lt;!--begin::Container--&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;container-fluid&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">    &lt;!--begin::Start Navbar links--&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;navbar-nav&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link&quot;</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;sidebar&quot;</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#9CDCFE"> role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span></span>
<span class="line"><span style="color:#808080">          &gt;&lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-list&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span></span>
<span class="line"><span style="color:#808080">        &gt;&lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item d-none d-md-block&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Home</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item d-none d-md-block&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;#&quot;</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-link&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Contact</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">a</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">    &lt;!--end::Start Navbar links--&gt;</span></span>
<span class="line"><span style="color:#6A9955">    &lt;!--begin::End Navbar links--&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;navbar-nav ms-auto&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;nav-item dropdown&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">button</span></span>
<span class="line"><span style="color:#9CDCFE">          class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">          id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bd-theme&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">          type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">          aria-expanded</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;false&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">          data-bs-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dropdown&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">          data-bs-display</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;static&quot;</span></span>
<span class="line"><span style="color:#808080">        &gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;theme-icon-active&quot;</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;my-1&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;d-lg-none ms-2&quot;</span><span style="color:#9CDCFE"> id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bd-theme-text&quot;</span><span style="color:#808080">&gt;</span><span style="color:#D4D4D4">Toggle theme</span><span style="color:#808080">&lt;/</span><span style="color:#569CD6">span</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;</span><span style="color:#569CD6">ul</span></span>
<span class="line"><span style="color:#9CDCFE">          class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dropdown-menu dropdown-menu-end&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">          aria-labelledby</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bd-theme-text&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">          style</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;--bs-dropdown-min-width: 8rem;&quot;</span></span>
<span class="line"><span style="color:#808080">        &gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">button</span></span>
<span class="line"><span style="color:#9CDCFE">              type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">              class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dropdown-item d-flex align-items-center active&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">              data-bs-theme-value</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;light&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">              aria-pressed</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;false&quot;</span></span>
<span class="line"><span style="color:#808080">            &gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-sun-fill me-2&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">              Light</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-check-lg ms-auto d-none&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">button</span></span>
<span class="line"><span style="color:#9CDCFE">              type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">              class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dropdown-item d-flex align-items-center&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">              data-bs-theme-value</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dark&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">              aria-pressed</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;false&quot;</span></span>
<span class="line"><span style="color:#808080">            &gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-moon-fill me-2&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">              Dark</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-check-lg ms-auto d-none&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;</span><span style="color:#569CD6">button</span></span>
<span class="line"><span style="color:#9CDCFE">              type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;button&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">              class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;dropdown-item d-flex align-items-center&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">              data-bs-theme-value</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;auto&quot;</span></span>
<span class="line"><span style="color:#9CDCFE">              aria-pressed</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;true&quot;</span></span>
<span class="line"><span style="color:#808080">            &gt;</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-circle-half me-2&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4">              Auto</span></span>
<span class="line"><span style="color:#808080">              &lt;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">&quot;bi bi-check-lg ms-auto d-none&quot;</span><span style="color:#808080">&gt;&lt;/</span><span style="color:#569CD6">i</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">            &lt;/</span><span style="color:#569CD6">button</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">          &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">        &lt;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">      &lt;/</span><span style="color:#569CD6">li</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#808080">    &lt;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">    &lt;!--end::End Navbar links--&gt;</span></span>
<span class="line"><span style="color:#808080">  &lt;/</span><span style="color:#569CD6">div</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">  &lt;!--end::Container--&gt;</span></span>
<span class="line"><span style="color:#808080">&lt;/</span><span style="color:#569CD6">nav</span><span style="color:#808080">&gt;</span></span>
<span class="line"><span style="color:#6A9955">&lt;!--end::Header--&gt;</span></span></code></pre>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#6A9955">// Color Mode Toggler</span></span>
<span class="line"><span style="color:#D4D4D4">(() </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#CE9178">  &quot;use strict&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">  const</span><span style="color:#4FC1FF"> storedTheme</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">localStorage</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getItem</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;theme&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">  const</span><span style="color:#DCDCAA"> getPreferredTheme</span><span style="color:#D4D4D4"> = () </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#C586C0">    if</span><span style="color:#D4D4D4"> (</span><span style="color:#9CDCFE">storedTheme</span><span style="color:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#C586C0">      return</span><span style="color:#9CDCFE"> storedTheme</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0">    return</span><span style="color:#9CDCFE"> window</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">matchMedia</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;(prefers-color-scheme: dark)&quot;</span><span style="color:#D4D4D4">).</span><span style="color:#9CDCFE">matches</span></span>
<span class="line"><span style="color:#D4D4D4">      ? </span><span style="color:#CE9178">&quot;dark&quot;</span></span>
<span class="line"><span style="color:#D4D4D4">      : </span><span style="color:#CE9178">&quot;light&quot;</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">  const</span><span style="color:#DCDCAA"> setTheme</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">function</span><span style="color:#D4D4D4"> (</span><span style="color:#9CDCFE">theme</span><span style="color:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#C586C0">    if</span><span style="color:#D4D4D4"> (</span></span>
<span class="line"><span style="color:#9CDCFE">      theme</span><span style="color:#D4D4D4"> === </span><span style="color:#CE9178">&quot;auto&quot;</span><span style="color:#D4D4D4"> &amp;&amp;</span></span>
<span class="line"><span style="color:#9CDCFE">      window</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">matchMedia</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;(prefers-color-scheme: dark)&quot;</span><span style="color:#D4D4D4">).</span><span style="color:#9CDCFE">matches</span></span>
<span class="line"><span style="color:#D4D4D4">    ) {</span></span>
<span class="line"><span style="color:#9CDCFE">      document</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">documentElement</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">setAttribute</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;data-bs-theme&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#CE9178">&quot;dark&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">    } </span><span style="color:#C586C0">else</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#9CDCFE">      document</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">documentElement</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">setAttribute</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;data-bs-theme&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">theme</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#D4D4D4">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA">  setTheme</span><span style="color:#D4D4D4">(</span><span style="color:#DCDCAA">getPreferredTheme</span><span style="color:#D4D4D4">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">  const</span><span style="color:#DCDCAA"> showActiveTheme</span><span style="color:#D4D4D4"> = (</span><span style="color:#9CDCFE">theme</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">focus</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">false</span><span style="color:#D4D4D4">) </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#569CD6">    const</span><span style="color:#4FC1FF"> themeSwitcher</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;#bd-theme&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0">    if</span><span style="color:#D4D4D4"> (!</span><span style="color:#9CDCFE">themeSwitcher</span><span style="color:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#C586C0">      return</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">    const</span><span style="color:#4FC1FF"> themeSwitcherText</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;#bd-theme-text&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#569CD6">    const</span><span style="color:#4FC1FF"> activeThemeIcon</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;.theme-icon-active i&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#569CD6">    const</span><span style="color:#4FC1FF"> btnToActive</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span></span>
<span class="line"><span style="color:#CE9178">      `[data-bs-theme-value=&quot;</span><span style="color:#569CD6">${</span><span style="color:#9CDCFE">theme</span><span style="color:#569CD6">}</span><span style="color:#CE9178">&quot;]`</span></span>
<span class="line"><span style="color:#D4D4D4">    );</span></span>
<span class="line"><span style="color:#569CD6">    const</span><span style="color:#4FC1FF"> svgOfActiveBtn</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">btnToActive</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelector</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;i&quot;</span><span style="color:#D4D4D4">).</span><span style="color:#DCDCAA">getAttribute</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;class&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0">    for</span><span style="color:#D4D4D4"> (</span><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> element</span><span style="color:#569CD6"> of</span><span style="color:#9CDCFE"> document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelectorAll</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;[data-bs-theme-value]&quot;</span><span style="color:#D4D4D4">)) {</span></span>
<span class="line"><span style="color:#9CDCFE">      element</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">classList</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">remove</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;active&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#9CDCFE">      element</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">setAttribute</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;aria-pressed&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#CE9178">&quot;false&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">    btnToActive</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">classList</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">add</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;active&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#9CDCFE">    btnToActive</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">setAttribute</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;aria-pressed&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#CE9178">&quot;true&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#9CDCFE">    activeThemeIcon</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">setAttribute</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;class&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">svgOfActiveBtn</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#569CD6">    const</span><span style="color:#4FC1FF"> themeSwitcherLabel</span><span style="color:#D4D4D4"> = </span><span style="color:#CE9178">`</span><span style="color:#569CD6">${</span><span style="color:#9CDCFE">themeSwitcherText</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">textContent</span><span style="color:#569CD6">}</span><span style="color:#CE9178"> (</span><span style="color:#569CD6">${</span><span style="color:#9CDCFE">btnToActive</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">dataset</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">bsThemeValue</span><span style="color:#569CD6">}</span><span style="color:#CE9178">)`</span><span style="color:#D4D4D4">;</span></span>
<span class="line"><span style="color:#9CDCFE">    themeSwitcher</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">setAttribute</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;aria-label&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">themeSwitcherLabel</span><span style="color:#D4D4D4">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0">    if</span><span style="color:#D4D4D4"> (</span><span style="color:#9CDCFE">focus</span><span style="color:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#9CDCFE">      themeSwitcher</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">focus</span><span style="color:#D4D4D4">();</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#D4D4D4">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">  window</span></span>
<span class="line"><span style="color:#D4D4D4">    .</span><span style="color:#DCDCAA">matchMedia</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;(prefers-color-scheme: dark)&quot;</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#D4D4D4">    .</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;change&quot;</span><span style="color:#D4D4D4">, () </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#C586C0">      if</span><span style="color:#D4D4D4"> (</span><span style="color:#9CDCFE">storedTheme</span><span style="color:#D4D4D4"> !== </span><span style="color:#CE9178">&quot;light&quot;</span><span style="color:#D4D4D4"> || </span><span style="color:#9CDCFE">storedTheme</span><span style="color:#D4D4D4"> !== </span><span style="color:#CE9178">&quot;dark&quot;</span><span style="color:#D4D4D4">) {</span></span>
<span class="line"><span style="color:#DCDCAA">        setTheme</span><span style="color:#D4D4D4">(</span><span style="color:#DCDCAA">getPreferredTheme</span><span style="color:#D4D4D4">());</span></span>
<span class="line"><span style="color:#D4D4D4">      }</span></span>
<span class="line"><span style="color:#D4D4D4">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">  window</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;DOMContentLoaded&quot;</span><span style="color:#D4D4D4">, () </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#DCDCAA">    showActiveTheme</span><span style="color:#D4D4D4">(</span><span style="color:#DCDCAA">getPreferredTheme</span><span style="color:#D4D4D4">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0">    for</span><span style="color:#D4D4D4"> (</span><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> toggle</span><span style="color:#569CD6"> of</span><span style="color:#9CDCFE"> document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">querySelectorAll</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;[data-bs-theme-value]&quot;</span><span style="color:#D4D4D4">)) {</span></span>
<span class="line"><span style="color:#9CDCFE">      toggle</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;click&quot;</span><span style="color:#D4D4D4">, () </span><span style="color:#569CD6">=&gt;</span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#569CD6">        const</span><span style="color:#4FC1FF"> theme</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">toggle</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getAttribute</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;data-bs-theme-value&quot;</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#9CDCFE">        localStorage</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">setItem</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">&quot;theme&quot;</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">theme</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#DCDCAA">        setTheme</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">theme</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#DCDCAA">        showActiveTheme</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">theme</span><span style="color:#D4D4D4">, </span><span style="color:#569CD6">true</span><span style="color:#D4D4D4">);</span></span>
<span class="line"><span style="color:#D4D4D4">      });</span></span>
<span class="line"><span style="color:#D4D4D4">    }</span></span>
<span class="line"><span style="color:#D4D4D4">  });</span></span>
<span class="line"><span style="color:#D4D4D4">})();</span></span></code></pre>
                  </div>
                </div>
              </div>
            </div>
            <!--end::Row-->
  </LteAppContent>
</template>
