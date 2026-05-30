import { describe, it, expect, beforeEach, vi } from 'vitest'
import { defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { provideColorMode, useColorMode, type ColorModeApi } from './use-color-mode'
import type { ColorMode } from '../types/theme'

// Mount a throwaway component that provides color mode, returning its API so the
// composable runs through real onMounted / watch lifecycle in jsdom.
function withColorMode(initialMode?: ColorMode) {
  let api!: ColorModeApi
  const wrapper = mount(
    defineComponent({
      setup() {
        api = provideColorMode({ initialMode })
        return () => null
      },
    })
  )
  return { api, wrapper }
}

function mockMatchMedia(matches: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

beforeEach(() => {
  localStorage.clear()
  document.documentElement.removeAttribute('data-bs-theme')
  mockMatchMedia(false)
})

describe('useColorMode', () => {
  it('applies the initial mode to <html data-bs-theme> on mount', () => {
    withColorMode('light')
    expect(document.documentElement.getAttribute('data-bs-theme')).toBe('light')
  })

  it('persists and applies a new mode when set', async () => {
    const { api } = withColorMode('light')
    api.setColorMode('dark')
    await nextTick()
    expect(api.resolvedMode.value).toBe('dark')
    expect(localStorage.getItem('lte-theme')).toBe('dark')
    expect(document.documentElement.getAttribute('data-bs-theme')).toBe('dark')
  })

  it('resolves "auto" against the system preference', () => {
    mockMatchMedia(true) // system prefers dark
    const { api } = withColorMode('auto')
    expect(api.resolvedMode.value).toBe('dark')
  })

  it('reconciles with a previously persisted preference on mount', () => {
    localStorage.setItem('lte-theme', 'dark')
    const { api } = withColorMode('light')
    expect(api.colorMode.value).toBe('dark')
    expect(document.documentElement.getAttribute('data-bs-theme')).toBe('dark')
  })

  it('throws when used outside a provider', () => {
    expect(() =>
      mount(defineComponent({ setup() { useColorMode(); return () => null } }))
    ).toThrow(/within <LteDashboardLayout>/)
  })
})
