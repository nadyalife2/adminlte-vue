<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

// Clone of the original AdminLTE "Theme Customize" page: pick a Bootstrap
// background + color mode for the live sidebar / navbar / footer. The chrome
// elements are rendered by the layout, so we mutate them via the document and
// restore them on unmount.
const themeBg = [
  'bg-primary', 'bg-primary-subtle', 'bg-secondary', 'bg-secondary-subtle',
  'bg-success', 'bg-success-subtle', 'bg-danger', 'bg-danger-subtle',
  'bg-warning', 'bg-warning-subtle', 'bg-info', 'bg-info-subtle',
  'bg-light', 'bg-light-subtle', 'bg-dark', 'bg-dark-subtle',
  'bg-body-secondary', 'bg-body-tertiary', 'bg-body', 'bg-black',
  'bg-white', 'bg-transparent',
]
let cleanups: Array<() => void> = []

onMounted(() => {
  const wire = (
    selector: string,
    modeId: string,
    colorId: string,
    codeId: string,
    code: (bg: string, mode: string) => string,
  ) => {
    const el = document.querySelector(selector)
    const modeSel = document.getElementById(modeId) as HTMLSelectElement | null
    const colorSel = document.getElementById(colorId) as HTMLSelectElement | null
    const codeEl = document.getElementById(codeId)
    if (!el || !modeSel || !colorSel || !codeEl) return
    colorSel.innerHTML = themeBg
      .map((bg) => `<option value="${bg}" class="text-${bg}">${bg}</option>`)
      .join('')
    let mode = ''
    let bg = ''
    const update = () => {
      el.setAttribute('data-bs-theme', mode)
      codeEl.innerHTML = code(bg, mode)
    }
    const onMode = (e: Event) => {
      mode = (e.target as HTMLSelectElement).value
      update()
    }
    const onColor = (e: Event) => {
      bg = (e.target as HTMLSelectElement).value
      themeBg.forEach((c) => el.classList.remove(c))
      if (themeBg.includes(bg)) el.classList.add(bg)
      update()
    }
    modeSel.addEventListener('input', onMode)
    colorSel.addEventListener('input', onColor)
    cleanups.push(() => {
      modeSel.removeEventListener('input', onMode)
      colorSel.removeEventListener('input', onColor)
    })
  }

  wire('.app-sidebar', 'sidebar-color-modes', 'sidebar-color', 'sidebar-color-code',
    (bg, mode) => `<pre><code class="language-html">&lt;aside class="app-sidebar ${bg}" data-bs-theme="${mode}"&gt;...&lt;/aside&gt;</code></pre>`)
  wire('.app-header', 'navbar-color-modes', 'navbar-color', 'navbar-color-code',
    (bg, mode) => `<pre><code class="language-html">&lt;nav class="app-header navbar navbar-expand ${bg}" data-bs-theme="${mode}"&gt;...&lt;/nav&gt;</code></pre>`)
  wire('.app-footer', 'footer-color-modes', 'footer-color', 'footer-color-code',
    (bg, mode) => `<pre><code class="language-html">&lt;footer class="app-footer ${bg}" data-bs-theme="${mode}"&gt;...&lt;/footer&gt;</code></pre>`)
})

onBeforeUnmount(() => {
  for (const selector of ['.app-sidebar', '.app-header', '.app-footer']) {
    const el = document.querySelector(selector)
    if (!el) continue
    themeBg.forEach((c) => el.classList.remove(c))
    el.removeAttribute('data-bs-theme')
  }
  cleanups.forEach((fn) => fn())
  cleanups = []
})
</script>

<template>
  <LteAppContent
    title="Theme Customize"
    :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Theme Customize' }]"
  >
            <div class="row">
              <!--begin::Col-->
              <div class="col-12">
                <!--begin::Card-->
                <LteCard title="Sidebar Theme" collapsible removable>
                  <!--begin::Card Body-->
                    <!--begin::Row-->
                    <div class="row">
                      <!--begin::Col-->
                      <div class="col-md-3">
                        <select
                          id="sidebar-color-modes"
                          class="form-select form-select-lg"
                          aria-label="Sidebar Color Mode Select"
                        >
                          <option value="">---Select---</option>
                          <option value="dark">Dark</option>
                          <option value="light">Light</option>
                        </select>
                      </div>
                      <!--end::Col-->
                      <!--begin::Col-->
                      <div class="col-md-3">
                        <select
                          id="sidebar-color"
                          class="form-select form-select-lg"
                          aria-label="Sidebar Color Select"
                        >
                          <option value="">---Select---</option>
                        </select>
                      </div>
                      <!--end::Col-->
                      <!--begin::Col-->
                      <div class="col-md-6">
                        <div id="sidebar-color-code" class="w-100"></div>
                      </div>
                      <!--end::Col-->
                    </div>
                    <!--end::Row-->
                  <!--end::Card Body-->
                  <!--begin::Card Footer-->
                  <template #footer>
                    Check more color in
                    <a
                      href="https://getbootstrap.com/docs/5.3/utilities/background/"
                      target="_blank"
                      class="link-primary"
                      >Bootstrap Background Colors</a
                    >
                  </template>
                  <!--end::Card Footer-->
                </LteCard>
                <!--end::Card-->

                <!--begin::Card-->
                <LteCard title="Navbar Theme" collapsible removable class="mt-4">
                  <!--begin::Card Body-->
                    <!--begin::Row-->
                    <div class="row">
                      <!--begin::Col-->
                      <div class="col-md-3">
                        <select
                          id="navbar-color-modes"
                          class="form-select form-select-lg"
                          aria-label="Navbar Color Mode Select"
                        >
                          <option value="">---Select---</option>
                          <option value="dark">Dark</option>
                          <option value="light">Light</option>
                        </select>
                      </div>
                      <!--end::Col-->
                      <!--begin::Col-->
                      <div class="col-md-3">
                        <select
                          id="navbar-color"
                          class="form-select form-select-lg"
                          aria-label="Navbar Color Select"
                        >
                          <option value="">---Select---</option>
                        </select>
                      </div>
                      <!--end::Col-->
                      <!--begin::Col-->
                      <div class="col-md-6">
                        <div id="navbar-color-code" class="w-100"></div>
                      </div>
                      <!--end::Col-->
                    </div>
                    <!--end::Row-->
                  <!--end::Card Body-->
                  <!--begin::Card Footer-->
                  <template #footer>
                    Check more color in
                    <a
                      href="https://getbootstrap.com/docs/5.3/utilities/background/"
                      target="_blank"
                      class="link-primary"
                      >Bootstrap Background Colors</a
                    >
                  </template>
                  <!--end::Card Footer-->
                </LteCard>
                <!--end::Card-->

                <!--begin::Card-->
                <LteCard title="Footer Theme" collapsible removable class="mt-4">
                  <!--begin::Card Body-->
                    <!--begin::Row-->
                    <div class="row">
                      <!--begin::Col-->
                      <div class="col-md-3">
                        <select
                          id="footer-color-modes"
                          class="form-select form-select-lg"
                          aria-label="Footer Color Mode Select"
                        >
                          <option value="">---Select---</option>
                          <option value="dark">Dark</option>
                          <option value="light">Light</option>
                        </select>
                      </div>
                      <!--end::Col-->
                      <!--begin::Col-->
                      <div class="col-md-3">
                        <select
                          id="footer-color"
                          class="form-select form-select-lg"
                          aria-label="Footer Color Select"
                        >
                          <option value="">---Select---</option>
                        </select>
                      </div>
                      <!--end::Col-->
                      <!--begin::Col-->
                      <div class="col-md-6">
                        <div id="footer-color-code" class="w-100"></div>
                      </div>
                      <!--end::Col-->
                    </div>
                    <!--end::Row-->
                  <!--end::Card Body-->
                  <!--begin::Card Footer-->
                  <template #footer>
                    Check more color in
                    <a
                      href="https://getbootstrap.com/docs/5.3/utilities/background/"
                      target="_blank"
                      class="link-primary"
                      >Bootstrap Background Colors</a
                    >
                  </template>
                  <!--end::Card Footer-->
                </LteCard>
                <!--end::Card-->
              </div>
              <!--end::Col-->
            </div>
  </LteAppContent>
</template>
