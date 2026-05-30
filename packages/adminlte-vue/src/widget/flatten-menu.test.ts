import { describe, it, expect } from 'vitest'
import { flattenMenuToCommands } from './LteCommandPalette.vue'
import type { MenuNode } from '../types/menu'

describe('flattenMenuToCommands', () => {
  it('collects only navigable leaf items', () => {
    const menu: MenuNode[] = [
      { type: 'header', text: 'MAIN' },
      { type: 'item', text: 'Home', href: '/', icon: 'bi-house' },
      { type: 'item', text: 'Placeholder', href: '#' }, // skipped: non-navigable
    ]
    const cmds = flattenMenuToCommands(menu)
    expect(cmds).toHaveLength(1)
    expect(cmds[0]).toMatchObject({ label: 'Home', href: '/', icon: 'bi-house' })
  })

  it('attaches the nearest header text as the group', () => {
    const menu: MenuNode[] = [
      { type: 'header', text: 'REPORTS' },
      { type: 'item', text: 'Sales', href: '/sales' },
    ]
    expect(flattenMenuToCommands(menu)[0].group).toBe('REPORTS')
  })

  it('recurses into groups, using the group text as the group label', () => {
    const menu: MenuNode[] = [
      {
        type: 'group',
        text: 'Pages',
        children: [{ type: 'item', text: 'Profile', href: '/pages/profile' }],
      },
    ]
    const cmds = flattenMenuToCommands(menu)
    expect(cmds).toHaveLength(1)
    expect(cmds[0]).toMatchObject({ label: 'Profile', href: '/pages/profile', group: 'Pages' })
  })

  it('dedupes commands that share an href, keeping the first', () => {
    const menu: MenuNode[] = [
      { type: 'item', text: 'Sales', href: '/sales' },
      { type: 'item', text: 'Sales (again)', href: '/sales' },
    ]
    const cmds = flattenMenuToCommands(menu)
    expect(cmds).toHaveLength(1)
    expect(cmds[0].label).toBe('Sales')
  })
})
