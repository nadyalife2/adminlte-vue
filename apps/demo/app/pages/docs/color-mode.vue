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
                    <p>
                      AdminLTE supports Bootstrap 5.3 color modes (light, dark, and auto) out of the
                      box. Since 4.1 the switcher ships in <code>adminlte.js</code> as the
                      <strong>ColorMode</strong> module — you no longer need to copy a script into
                      your pages.
                    </p>
                    <h5 id="how-it-works">How it works</h5>
                    <ul>
                      <li>
                        The chosen mode is persisted in <code>localStorage</code> under the key
                        <code>lte-theme</code>.
                      </li>
                      <li>
                        <code>auto</code> follows the operating system’s
                        <code>prefers-color-scheme</code> and updates live when the OS preference
                        changes.
                      </li>
                      <li>
                        The resolved mode is applied as
                        <code>data-bs-theme=&quot;light|dark&quot;</code> on
                        <code>&lt;html&gt;</code>, so every Bootstrap and AdminLTE component adapts
                        automatically.
                      </li>
                    </ul>
                    <h5 id="markup">Markup</h5>
                    <p>
                      Add toggle buttons anywhere with <code>data-bs-theme-value</code> — the module
                      binds them automatically. Optional <code>data-lte-theme-icon</code> elements
                      act as an indicator for the current choice (the demo uses them in the topbar
                      trigger):
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item dropdown"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">a</span></span>
<span class="line"><span style="color:#9CDCFE">    class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span></span>
<span class="line"><span style="color:#9CDCFE">    href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span></span>
<span class="line"><span style="color:#9CDCFE">    id</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bd-theme"</span></span>
<span class="line"><span style="color:#9CDCFE">    aria-label</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"Toggle color scheme"</span></span>
<span class="line"><span style="color:#9CDCFE">    data-bs-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown"</span></span>
<span class="line"><span style="color:#9CDCFE">    aria-expanded</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"false"</span></span>
<span class="line"><span style="color:#808080">  ></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-sun-fill"</span><span style="color:#9CDCFE"> data-lte-theme-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"light"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-moon-fill d-none"</span><span style="color:#9CDCFE"> data-lte-theme-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-circle-half d-none"</span><span style="color:#9CDCFE"> data-lte-theme-icon</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"auto"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-menu dropdown-menu-end"</span><span style="color:#9CDCFE"> aria-labelledby</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bd-theme"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item d-flex align-items-center"</span><span style="color:#9CDCFE"> data-bs-theme-value</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"light"</span><span style="color:#9CDCFE"> aria-pressed</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"false"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-sun-fill me-2"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">        Light</span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-check-lg ms-auto d-none"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item d-flex align-items-center"</span><span style="color:#9CDCFE"> data-bs-theme-value</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark"</span><span style="color:#9CDCFE"> aria-pressed</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"false"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-moon-fill me-2"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">        Dark</span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-check-lg ms-auto d-none"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">button</span><span style="color:#9CDCFE"> type</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item d-flex align-items-center active"</span><span style="color:#9CDCFE"> data-bs-theme-value</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"auto"</span><span style="color:#9CDCFE"> aria-pressed</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"true"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-circle-half me-2"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">        Auto</span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-check-lg ms-auto d-none"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">button</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span></code></pre>
                    <p>
                      The module keeps the <code>active</code> class,
                      <code>aria-pressed</code> state, and the <code>.bi-check-lg</code> check marks
                      in sync on every <code>[data-bs-theme-value]</code> button.
                    </p>
                    <h5 id="javascript-api">JavaScript API</h5>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="js"
                    ><code><span class="line"><span style="color:#C586C0">import</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">ColorMode</span><span style="color:#D4D4D4"> } </span><span style="color:#C586C0">from</span><span style="color:#CE9178"> "admin-lte"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6">const</span><span style="color:#4FC1FF"> colorMode</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">new</span><span style="color:#DCDCAA"> ColorMode</span><span style="color:#D4D4D4">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE">colorMode</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getPreferredTheme</span><span style="color:#D4D4D4">() </span><span style="color:#6A9955">// "light" | "dark" | "auto"</span></span>
<span class="line"><span style="color:#9CDCFE">colorMode</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">setTheme</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"dark"</span><span style="color:#D4D4D4">)    </span><span style="color:#6A9955">// apply + persist + sync toggles</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">// React to changes (fired on document)</span></span>
<span class="line"><span style="color:#9CDCFE">document</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">addEventListener</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"changed.lte.color-mode"</span><span style="color:#D4D4D4">, (</span><span style="color:#9CDCFE">event</span><span style="color:#D4D4D4">) </span><span style="color:#569CD6">=></span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#9CDCFE">  console</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">log</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">event</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">detail</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">theme</span><span style="color:#D4D4D4">)    </span><span style="color:#6A9955">// what the user chose: "light" | "dark" | "auto"</span></span>
<span class="line"><span style="color:#9CDCFE">  console</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">log</span><span style="color:#D4D4D4">(</span><span style="color:#9CDCFE">event</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">detail</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">resolved</span><span style="color:#D4D4D4">) </span><span style="color:#6A9955">// what got applied:    "light" | "dark"</span></span>
<span class="line"><span style="color:#D4D4D4">})</span></span></code></pre>
                    <h5 id="preventing-the-flash-of-wrong-theme">
                      Preventing the flash of wrong theme
                    </h5>
                    <p>
                      The module runs after the DOM is ready, so pages should also apply the stored
                      theme <em>before first paint</em> with a tiny inline snippet in
                      <code>&lt;head&gt;</code> (this is the one piece that must stay inline — see
                      <code>#6043</code>):
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">  (() </span><span style="color:#569CD6">=></span><span style="color:#D4D4D4"> {</span></span>
<span class="line"><span style="color:#CE9178">    "use strict"</span></span>
<span class="line"><span style="color:#569CD6">    let</span><span style="color:#9CDCFE"> stored</span><span style="color:#D4D4D4"> = </span><span style="color:#569CD6">null</span></span>
<span class="line"><span style="color:#C586C0">    try</span><span style="color:#D4D4D4"> { </span><span style="color:#9CDCFE">stored</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">localStorage</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">getItem</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"lte-theme"</span><span style="color:#D4D4D4">) } </span><span style="color:#C586C0">catch</span><span style="color:#D4D4D4"> {}</span></span>
<span class="line"><span style="color:#569CD6">    const</span><span style="color:#4FC1FF"> prefersDark</span><span style="color:#D4D4D4"> = </span><span style="color:#DCDCAA">matchMedia</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"(prefers-color-scheme: dark)"</span><span style="color:#D4D4D4">).</span><span style="color:#9CDCFE">matches</span></span>
<span class="line"><span style="color:#569CD6">    const</span><span style="color:#4FC1FF"> resolved</span><span style="color:#D4D4D4"> = (</span><span style="color:#9CDCFE">stored</span><span style="color:#D4D4D4"> === </span><span style="color:#CE9178">"dark"</span><span style="color:#D4D4D4"> || </span><span style="color:#9CDCFE">stored</span><span style="color:#D4D4D4"> === </span><span style="color:#CE9178">"light"</span><span style="color:#D4D4D4">) ? </span><span style="color:#9CDCFE">stored</span><span style="color:#D4D4D4"> : (</span><span style="color:#9CDCFE">prefersDark</span><span style="color:#D4D4D4"> ? </span><span style="color:#CE9178">"dark"</span><span style="color:#D4D4D4"> : </span><span style="color:#CE9178">"light"</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#9CDCFE">    document</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">documentElement</span><span style="color:#D4D4D4">.</span><span style="color:#DCDCAA">setAttribute</span><span style="color:#D4D4D4">(</span><span style="color:#CE9178">"data-bs-theme"</span><span style="color:#D4D4D4">, </span><span style="color:#9CDCFE">resolved</span><span style="color:#D4D4D4">)</span></span>
<span class="line"><span style="color:#9CDCFE">    document</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">documentElement</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">style</span><span style="color:#D4D4D4">.</span><span style="color:#9CDCFE">colorScheme</span><span style="color:#D4D4D4"> = </span><span style="color:#9CDCFE">resolved</span></span>
<span class="line"><span style="color:#D4D4D4">  })()</span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">script</span><span style="color:#808080">></span></span></code></pre>
                    <h5 id="per-region-color-modes">Per-region color modes</h5>
                    <p>
                      <code>data-bs-theme</code> also works on any element, not just
                      <code>&lt;html&gt;</code> — for example a permanently dark sidebar in an
                      otherwise light layout:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">aside</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-sidebar"</span><span style="color:#9CDCFE"> data-bs-theme</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dark"</span><span style="color:#808080">></span><span style="color:#D4D4D4">...</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">aside</span><span style="color:#808080">></span></span></code></pre>
                  </div>
                </div>
              </div>
            </div>
            <!--end::Row-->
  </LteAppContent>
</template>
