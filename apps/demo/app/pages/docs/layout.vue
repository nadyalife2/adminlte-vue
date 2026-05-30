<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Layout'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Layout' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="callout callout-info mb-4">
                      <h5 class="fw-bold">Tips</h5>
                      <p>
                        The
                        <a
                          href="https://github.com/ColorlibHQ/AdminLTE/tree/master/dist"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="callout-link"
                        >
                          starter pages
                        </a>
                        are a good place to start building your app from scratch.
                      </p>
                    </div>

                    <p>The layout consists of five major parts:</p>
                    <ul>
                      <li>
                        Wrapper <code>.app-wrapper</code> &mdash; a div that wraps the whole site.
                      </li>
                      <li>
                        Main Header <code>.app-header</code> &mdash; contains the logo and navbar.
                      </li>
                      <li>
                        Main Sidebar <code>.app-sidebar</code> &mdash; contains the sidebar user
                        panel and menu.
                      </li>
                      <li>
                        Content <code>.app-main</code> &mdash; contains the page header and content.
                      </li>
                      <li>Main Footer <code>.app-footer</code> &mdash; contains the footer.</li>
                    </ul>

                    <h4>Layout Options</h4>
                    <p>
                      AdminLTE v4 provides a set of options to apply to your main layout. Each one
                      of these classes can be added to the
                      <code>body</code> tag to get the desired goal.
                    </p>
                    <ul>
                      <li>
                        Fixed Sidebar: use the class <code>.layout-fixed</code> to get a fixed
                        sidebar.
                      </li>
                      <li>
                        Mini Sidebar on Toggle: use the class
                        <code>.sidebar-expand-* .sidebar-mini</code> to have a collapsed sidebar
                        upon loading.
                      </li>
                      <li>
                        Collapsed Sidebar: use the class
                        <code>.sidebar-expand-* .sidebar-mini .sidebar-collapse</code> to have a
                        collapsed sidebar upon loading.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
