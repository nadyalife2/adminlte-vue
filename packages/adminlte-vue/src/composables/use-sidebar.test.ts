import { describe, it, expect, beforeEach } from 'vitest'
import { defineComponent, nextTick } from 'vue'
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
