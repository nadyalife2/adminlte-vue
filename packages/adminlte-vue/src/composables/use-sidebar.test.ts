import { describe, it, expect, beforeEach } from 'vitest'
import { defineComponent, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { provideSidebar, useSidebar, type SidebarApi, type ProvideSidebarOptions } from './use-sidebar'

function withSidebar(options: ProvideSidebarOptions = {}) {
  let api!: SidebarApi
  const wrapper = mount(
    defineComponent({
      setup() {
        api = provideSidebar(options)
        return () => null
      },
    })
  )
  return { api, wrapper }
}

function setWidth(px: number) {
  Object.defineProperty(window, 'innerWidth', { value: px, configurable: true, writable: true })
}

beforeEach(() => {
  localStorage.clear()
  document.body.className = ''
  setWidth(1280) // desktop by default
})

describe('useSidebar', () => {
  it('starts expanded and toggles the collapse body class on desktop', async () => {
    const { api } = withSidebar()
    expect(api.isCollapsed.value).toBe(false)
    expect(document.body.classList.contains('sidebar-collapse')).toBe(false)

    api.toggle()
    await nextTick()
    expect(api.isCollapsed.value).toBe(true)
    expect(document.body.classList.contains('sidebar-collapse')).toBe(true)
  })

  it('collapse() and expand() set the state explicitly', async () => {
    const { api } = withSidebar()
    api.collapse()
    await nextTick()
    expect(document.body.classList.contains('sidebar-collapse')).toBe(true)
    api.expand()
    await nextTick()
    expect(document.body.classList.contains('sidebar-collapse')).toBe(false)
  })

  it('reflects mini mode and static body classes onto <body>', async () => {
    withSidebar({ sidebarMini: true, staticBodyClasses: 'layout-fixed sidebar-expand-lg' })
    await nextTick()
    expect(document.body.classList.contains('sidebar-mini')).toBe(true)
    expect(document.body.classList.contains('layout-fixed')).toBe(true)
    expect(document.body.classList.contains('sidebar-expand-lg')).toBe(true)
  })

  it('removes all of its body classes when the provider unmounts', async () => {
    const { api, wrapper } = withSidebar({
      sidebarMini: true,
      staticBodyClasses: 'layout-fixed sidebar-expand-lg',
    })
    api.collapse()
    await nextTick()
    expect(document.body.classList.contains('sidebar-collapse')).toBe(true)
    expect(document.body.classList.contains('layout-fixed')).toBe(true)

    wrapper.unmount()
    expect(document.body.className).toBe('')
  })

  it('removes stale static classes when the static set changes', async () => {
    const staticClasses = ref('fixed-header')
    withSidebar({ staticBodyClasses: staticClasses })
    await nextTick()
    expect(document.body.classList.contains('fixed-header')).toBe(true)

    staticClasses.value = 'fixed-footer'
    await nextTick()
    expect(document.body.classList.contains('fixed-header')).toBe(false)
    expect(document.body.classList.contains('fixed-footer')).toBe(true)
  })

  it('reacts to a breakpoint change after creation', async () => {
    const breakpoint = ref(992)
    const { api } = withSidebar({ sidebarBreakpoint: breakpoint })
    expect(api.isMobile.value).toBe(false) // width 1280 > 992

    breakpoint.value = 1400
    await nextTick()
    expect(api.isMobile.value).toBe(true)
    expect(api.sidebarBreakpoint.value).toBe(1400)
  })

  it('toggles the mobile overlay (not collapse) below the breakpoint', async () => {
    setWidth(500)
    const { api } = withSidebar({ sidebarBreakpoint: 992 })
    expect(api.isMobile.value).toBe(true)
    api.toggle()
    await nextTick()
    expect(api.isMobileOpen.value).toBe(true)
    expect(api.isCollapsed.value).toBe(false)
    expect(document.body.classList.contains('sidebar-open')).toBe(true)
  })

  describe('persistence', () => {
    it('does NOT write localStorage when persistence is disabled', async () => {
      const { api } = withSidebar({ enablePersistence: false })
      api.collapse()
      await nextTick()
      expect(localStorage.getItem('lte.sidebar.state')).toBeNull()
    })

    it('writes the collapse state when persistence is enabled', async () => {
      const { api } = withSidebar({ enablePersistence: true })
      api.collapse()
      await nextTick()
      expect(JSON.parse(localStorage.getItem('lte.sidebar.state')!)).toEqual({ collapsed: true })
    })

    it('restores a persisted collapse state on mount', () => {
      localStorage.setItem('lte.sidebar.state', JSON.stringify({ collapsed: true }))
      const { api } = withSidebar({ enablePersistence: true })
      expect(api.isCollapsed.value).toBe(true)
    })
  })

  it('throws when used outside a provider', () => {
    expect(() =>
      mount(defineComponent({ setup() { useSidebar(); return () => null } }))
    ).toThrow(/within <LteDashboardLayout>/)
  })
})
