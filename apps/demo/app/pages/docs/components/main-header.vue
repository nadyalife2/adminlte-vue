<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Main Header Component'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Main Header Component' }]"
  >

            <div class="callout callout-warning mb-4">
              <h5 class="fw-bold">Reminder!</h5>
              <p>
                AdminLTE uses all of Bootstrap 5 components. It's a good start to review the
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="callout-link"
                >
                  Bootstrap documentation
                </a>
                to get an idea of the various components that this documentation
                <b>does not</b> cover.
              </p>
            </div>

            <div class="callout callout-info mb-4">
              <h5 class="fw-bold">Tips!</h5>
              <p>
                If you go through the example pages and would like to copy a component, right-click
                on the component and choose “inspect element” to get to the HTML quicker than
                scanning the HTML page.
              </p>
            </div>

            <!-- Navbar -->
            <nav class="navbar navbar-expand bg-body">
              <!--begin::Container-->
              <div class="container-fluid">
                <!-- Start navbar links -->
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" data-lte-toggle="sidebar" href="#" role="button">
                      <i class="bi bi-list"></i>
                    </a>
                  </li>
                  <li class="nav-item d-none d-md-block">
                    <a href="#" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item d-none d-md-block">
                    <a href="#" class="nav-link">Contact</a>
                  </li>
                </ul>
                <!-- End navbar links -->

                <ul class="navbar-nav ms-auto">
                  <!-- Messages Dropdown Menu -->
                  <li class="nav-item dropdown">
                    <a class="nav-link" data-bs-toggle="dropdown" href="#">
                      <i class="bi bi-chat-text"></i>
                      <span class="navbar-badge badge text-bg-danger">3</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                      <a href="#" class="dropdown-item">
                        <!-- Message Start -->
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <img
                              src="/assets/img/user1-128x128.jpg"
                              alt="User Avatar"
                              class="img-size-50 rounded-circle me-3"
                            />
                          </div>
                          <div class="flex-grow-1">
                            <h3 class="dropdown-item-title">
                              Brad Diesel
                              <span class="float-end fs-7 text-danger">
                                <i class="bi bi-star-fill"></i>
                              </span>
                            </h3>
                            <p class="fs-7">Call me whenever you can...</p>
                            <p class="fs-7 text-secondary">
                              <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
                            </p>
                          </div>
                        </div>
                        <!-- Message End -->
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <!-- Message Start -->
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <img
                              src="/assets/img/user8-128x128.jpg"
                              alt="User Avatar"
                              class="img-size-50 rounded-circle me-3"
                            />
                          </div>
                          <div class="flex-grow-1">
                            <h3 class="dropdown-item-title">
                              John Pierce
                              <span class="float-end fs-7 text-secondary">
                                <i class="bi bi-star-fill"></i>
                              </span>
                            </h3>
                            <p class="fs-7">I got your message bro</p>
                            <p class="fs-7 text-secondary">
                              <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
                            </p>
                          </div>
                        </div>
                        <!-- Message End -->
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <!-- Message Start -->
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <img
                              src="/assets/img/user3-128x128.jpg"
                              alt="User Avatar"
                              class="img-size-50 rounded-circle me-3"
                            />
                          </div>
                          <div class="flex-grow-1">
                            <h3 class="dropdown-item-title">
                              Nora Silvester
                              <span class="float-end fs-7 text-warning">
                                <i class="bi bi-star-fill"></i>
                              </span>
                            </h3>
                            <p class="fs-7">The subject goes here</p>
                            <p class="fs-7 text-secondary">
                              <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
                            </p>
                          </div>
                        </div>
                        <!-- Message End -->
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item dropdown-footer"> See All Messages </a>
                    </div>
                  </li>
                  <!-- Notifications Dropdown Menu -->
                  <li class="nav-item dropdown">
                    <a class="nav-link" data-bs-toggle="dropdown" href="#">
                      <i class="bi bi-bell-fill"></i>
                      <span class="navbar-badge badge text-bg-warning">15</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                      <span class="dropdown-item dropdown-header">15 Notifications</span>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <i class="bi bi-envelope me-2"></i> 4 new messages
                        <span class="float-end text-secondary fs-7">3 mins</span>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <i class="bi bi-people-fill me-2"></i> 8 friend requests
                        <span class="float-end text-secondary fs-7"> 12 hours </span>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <i class="bi bi-file-earmark-fill me-2"></i> 3 new reports
                        <span class="float-end text-secondary fs-7"> 2 days </span>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item dropdown-footer"> See All Notifications </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown user-menu">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                      <img
                        src="/assets/img/user2-160x160.jpg"
                        class="user-image rounded-circle shadow"
                        alt="User Image"
                      />
                      <span class="d-none d-md-inline">Alexander Pierce</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                      <!-- User image -->
                      <li class="user-header text-bg-primary">
                        <img
                          src="/assets/img/user2-160x160.jpg"
                          class="rounded-circle shadow"
                          alt="User Image"
                        />

                        <p>
                          Alexander Pierce - Web Developer
                          <small>Member since Nov. 2023</small>
                        </p>
                      </li>
                      <!-- Menu Body -->
                      <li class="user-body">
                        <!--begin::Row-->
                        <div class="row">
                          <div class="col-4 text-center">
                            <a href="#">Followers</a>
                          </div>
                          <div class="col-4 text-center">
                            <a href="#">Sales</a>
                          </div>
                          <div class="col-4 text-center">
                            <a href="#">Friends</a>
                          </div>
                        </div>
                        <!--end::Row-->
                      </li>
                      <!-- Menu Footer-->
                      <li class="user-footer">
                        <a href="#" class="btn btn-default btn-flat">Profile</a>
                        <a href="#" class="btn btn-default btn-flat float-end"> Sign out </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <!--end::Container-->
            </nav>
            <!-- /.navbar -->

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="html"
                    ><code><span class="line"><span style="color:#6A9955">&#x3C;!-- Navbar --></span></span>
<span class="line"><span style="color:#808080">&#x3C;</span><span style="color:#569CD6">nav</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"app-header navbar navbar-expand bg-body"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!--begin::Container--></span></span>
<span class="line"><span style="color:#808080">  &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"container-fluid"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">    &#x3C;!-- Start navbar links --></span></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"navbar-nav"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#9CDCFE"> data-lte-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"sidebar"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-list"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item d-none d-md-block"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Home</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item d-none d-md-block"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Contact</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">    &#x3C;!-- End navbar links --></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">    &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"navbar-nav ms-auto"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">      &#x3C;!-- Navbar Search --></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#9CDCFE"> data-widget</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"navbar-search"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> role</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"button"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-search"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955">      &#x3C;!-- Messages Dropdown Menu --></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item dropdown"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#9CDCFE"> data-bs-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-chat-text"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"navbar-badge badge text-bg-danger"</span><span style="color:#808080">></span><span style="color:#D4D4D4">3</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-menu dropdown-menu-lg dropdown-menu-end"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">            &#x3C;!-- Message Start --></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"d-flex"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"flex-shrink-0"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">img</span></span>
<span class="line"><span style="color:#9CDCFE">                  src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"../../../dist/assets/img/user1-128x128.jpg"</span></span>
<span class="line"><span style="color:#9CDCFE">                  alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"User Avatar"</span></span>
<span class="line"><span style="color:#9CDCFE">                  class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"img-size-50 rounded-circle me-3"</span></span>
<span class="line"><span style="color:#808080">                /></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"flex-grow-1"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item-title"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">                  Brad Diesel</span></span>
<span class="line"><span style="color:#808080">                  &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"float-end fs-7 text-danger"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                    &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-star-fill"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                  &#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"fs-7"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Call me whenever you can...</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"fs-7 text-secondary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                  &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-clock-fill me-1"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span><span style="color:#D4D4D4"> 4 Hours Ago</span></span>
<span class="line"><span style="color:#808080">                &#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">            &#x3C;!-- Message End --></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-divider"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">            &#x3C;!-- Message Start --></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"d-flex"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"flex-shrink-0"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">img</span></span>
<span class="line"><span style="color:#9CDCFE">                  src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"../../../dist/assets/img/user8-128x128.jpg"</span></span>
<span class="line"><span style="color:#9CDCFE">                  alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"User Avatar"</span></span>
<span class="line"><span style="color:#9CDCFE">                  class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"img-size-50 rounded-circle me-3"</span></span>
<span class="line"><span style="color:#808080">                /></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"flex-grow-1"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item-title"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">                  John Pierce</span></span>
<span class="line"><span style="color:#808080">                  &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"float-end fs-7 text-secondary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                    &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-star-fill"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                  &#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"fs-7"</span><span style="color:#808080">></span><span style="color:#D4D4D4">I got your message bro</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"fs-7 text-secondary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                  &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-clock-fill me-1"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span><span style="color:#D4D4D4"> 4 Hours Ago</span></span>
<span class="line"><span style="color:#808080">                &#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">            &#x3C;!-- Message End --></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-divider"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">            &#x3C;!-- Message Start --></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"d-flex"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"flex-shrink-0"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">img</span></span>
<span class="line"><span style="color:#9CDCFE">                  src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"../../../dist/assets/img/user3-128x128.jpg"</span></span>
<span class="line"><span style="color:#9CDCFE">                  alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"User Avatar"</span></span>
<span class="line"><span style="color:#9CDCFE">                  class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"img-size-50 rounded-circle me-3"</span></span>
<span class="line"><span style="color:#808080">                /></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"flex-grow-1"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">h3</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item-title"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">                  Nora Silvester</span></span>
<span class="line"><span style="color:#808080">                  &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"float-end fs-7 text-warning"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                    &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-star-fill"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                  &#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;/</span><span style="color:#569CD6">h3</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"fs-7"</span><span style="color:#808080">></span><span style="color:#D4D4D4">The subject goes here</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"fs-7 text-secondary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                  &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-clock-fill me-1"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span><span style="color:#D4D4D4"> 4 Hours Ago</span></span>
<span class="line"><span style="color:#808080">                &#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">            &#x3C;!-- Message End --></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-divider"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item dropdown-footer"</span><span style="color:#808080">></span><span style="color:#D4D4D4">See All Messages</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">      &#x3C;!-- Notifications Dropdown Menu --></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item dropdown"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link"</span><span style="color:#9CDCFE"> data-bs-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown"</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-bell-fill"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"navbar-badge badge text-bg-warning"</span><span style="color:#808080">></span><span style="color:#D4D4D4">15</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-menu dropdown-menu-lg dropdown-menu-end"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item dropdown-header"</span><span style="color:#808080">></span><span style="color:#D4D4D4">15 Notifications</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-divider"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-envelope me-2"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span><span style="color:#D4D4D4"> 4 new messages</span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"float-end text-secondary fs-7"</span><span style="color:#808080">></span><span style="color:#D4D4D4">3 mins</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-divider"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-people-fill me-2"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span><span style="color:#D4D4D4"> 8 friend requests</span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"float-end text-secondary fs-7"</span><span style="color:#808080">></span><span style="color:#D4D4D4">12 hours</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-divider"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">i</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"bi bi-file-earmark-fill me-2"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">i</span><span style="color:#808080">></span><span style="color:#D4D4D4"> 3 new reports</span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"float-end text-secondary fs-7"</span><span style="color:#808080">></span><span style="color:#D4D4D4">2 days</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-divider"</span><span style="color:#808080">>&#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-item dropdown-footer"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">            See All Notifications</span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-item dropdown user-menu"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"nav-link dropdown-toggle"</span><span style="color:#9CDCFE"> data-bs-toggle</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">img</span></span>
<span class="line"><span style="color:#9CDCFE">            src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"../../../dist/assets/img/user2-160x160.jpg"</span></span>
<span class="line"><span style="color:#9CDCFE">            class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"user-image rounded-circle shadow"</span></span>
<span class="line"><span style="color:#9CDCFE">            alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"User Image"</span></span>
<span class="line"><span style="color:#808080">          /></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">span</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"d-none d-md-inline"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Alexander Pierce</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">span</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;</span><span style="color:#569CD6">ul</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"dropdown-menu dropdown-menu-lg dropdown-menu-end"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">          &#x3C;!-- User image --></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"user-header text-bg-primary"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">img</span></span>
<span class="line"><span style="color:#9CDCFE">              src</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"../../../dist/assets/img/user2-160x160.jpg"</span></span>
<span class="line"><span style="color:#9CDCFE">              class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"rounded-circle shadow"</span></span>
<span class="line"><span style="color:#9CDCFE">              alt</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"User Image"</span></span>
<span class="line"><span style="color:#808080">            /></span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#D4D4D4">              Alexander Pierce - Web Developer</span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">small</span><span style="color:#808080">></span><span style="color:#D4D4D4">Member since Nov. 2023</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">small</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">p</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">          &#x3C;!-- Menu Body --></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"user-body"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">            &#x3C;!--begin::Row--></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"row"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"col-4 text-center"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Followers</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"col-4 text-center"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Sales</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;</span><span style="color:#569CD6">div</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"col-4 text-center"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">                &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Friends</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">              &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">            &#x3C;!--end::Row--></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">          &#x3C;!-- Menu Footer--></span></span>
<span class="line"><span style="color:#808080">          &#x3C;</span><span style="color:#569CD6">li</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"user-footer"</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"btn btn-outline-secondary"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Profile</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">            &#x3C;</span><span style="color:#569CD6">a</span><span style="color:#9CDCFE"> href</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"#"</span><span style="color:#9CDCFE"> class</span><span style="color:#D4D4D4">=</span><span style="color:#CE9178">"btn btn-outline-danger float-end"</span><span style="color:#808080">></span><span style="color:#D4D4D4">Sign out</span><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">a</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">          &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">        &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">      &#x3C;/</span><span style="color:#569CD6">li</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">    &#x3C;/</span><span style="color:#569CD6">ul</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#808080">  &#x3C;/</span><span style="color:#569CD6">div</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">  &#x3C;!--end::Container--></span></span>
<span class="line"><span style="color:#808080">&#x3C;/</span><span style="color:#569CD6">nav</span><span style="color:#808080">></span></span>
<span class="line"><span style="color:#6A9955">&#x3C;!-- /.navbar --></span></span></code></pre>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
