import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LteCard from './LteCard.vue'

describe('LteCard', () => {
  it('renders a plain card by default', () => {
    const wrapper = mount(LteCard)
    const card = wrapper.find('.card')
    expect(card.exists()).toBe(true)
    expect(card.classes()).toContain('card')
    // No header when there is no title / tools / header slot.
    expect(wrapper.find('.card-header').exists()).toBe(false)
  })

  it('applies the solid theme treatment', () => {
    const wrapper = mount(LteCard, { props: { theme: 'primary', variant: 'solid' } })
    expect(wrapper.find('.card').classes()).toContain('text-bg-primary')
  })

  it('adds bg-gradient only when a theme is also set', () => {
    const themed = mount(LteCard, { props: { theme: 'success', variant: 'solid', gradient: true } })
    expect(themed.find('.card').classes()).toContain('bg-gradient')

    // gradient without a theme is a no-op.
    const plain = mount(LteCard, { props: { gradient: true } })
    expect(plain.find('.card').classes()).not.toContain('bg-gradient')
  })

  it('renders the title and a collapse tool button', () => {
    const wrapper = mount(LteCard, { props: { title: 'Sales', collapsible: true } })
    expect(wrapper.find('.card-title').text()).toBe('Sales')
    expect(wrapper.find('.card-tools button').exists()).toBe(true)
  })

  it('lets the #header slot fully replace the default header', () => {
    const wrapper = mount(LteCard, {
      props: { title: 'Ignored', collapsible: true },
      slots: { header: '<div class="custom-head">Custom</div>' },
    })
    expect(wrapper.find('.card-header .custom-head').text()).toBe('Custom')
    // Default title / tools are not rendered when #header is provided.
    expect(wrapper.find('.card-title').exists()).toBe(false)
    expect(wrapper.find('.card-tools').exists()).toBe(false)
  })
})
