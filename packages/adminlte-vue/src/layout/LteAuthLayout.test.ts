import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import LteAuthLayout from './LteAuthLayout.vue'

beforeEach(() => {
  document.body.className = ''
})

describe('LteAuthLayout', () => {
  it('renders the default login box with the logo above a plain card', () => {
    const wrapper = mount(LteAuthLayout, { slots: { default: '<form>fields</form>' } })
    expect(wrapper.find('.login-box').exists()).toBe(true)
    expect(wrapper.find('.login-logo').exists()).toBe(true)
    expect(wrapper.find('.card-body.login-card-body form').text()).toBe('fields')
    // The default variant has no card header.
    expect(wrapper.find('.card-header').exists()).toBe(false)
  })

  it('derives box / body classes from authType', () => {
    const wrapper = mount(LteAuthLayout, { props: { authType: 'register' } })
    expect(wrapper.find('.register-box').exists()).toBe(true)
    expect(wrapper.find('.register-card-body').exists()).toBe(true)
  })

  it('renders the v2 variant with the logo inside a card-outline header', () => {
    const wrapper = mount(LteAuthLayout, { props: { variant: 'v2' } })
    const card = wrapper.find('.card')
    expect(card.classes()).toEqual(expect.arrayContaining(['card-outline', 'card-primary']))
    expect(wrapper.find('.card-header h1').text()).toContain('AdminLTE')
    // No separate logo block above the card in v2.
    expect(wrapper.find('.login-logo').exists()).toBe(false)
  })

  it('toggles the page body class on mount/unmount', () => {
    const wrapper = mount(LteAuthLayout)
    expect(document.body.classList.contains('login-page')).toBe(true)
    wrapper.unmount()
    expect(document.body.classList.contains('login-page')).toBe(false)
  })
})
