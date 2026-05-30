import { describe, it, expect } from 'vitest'
import { cn, biClass } from './class-name'

describe('cn', () => {
  it('joins truthy class names with a single space', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('filters out falsy values', () => {
    expect(cn('a', false, null, undefined, '', 'b')).toBe('a b')
  })

  it('returns an empty string when nothing is truthy', () => {
    expect(cn(false, null, undefined, '')).toBe('')
  })
})

describe('biClass', () => {
  it('returns an empty string when no icon is given', () => {
    expect(biClass()).toBe('')
    expect(biClass('')).toBe('')
  })

  it('keeps an already base-prefixed icon untouched', () => {
    expect(biClass('bi bi-speedometer')).toBe('bi bi-speedometer')
  })

  it('passes a non-bootstrap-icon class through unchanged', () => {
    expect(biClass('fa-home')).toBe('fa-home')
  })

  // A bare `bi-*` token already satisfies Bootstrap Icons' `[class^="bi-"]`
  // selector, so it is left as-is (the leading `bi` base is not required).
  it('leaves a bare bi-* icon as-is', () => {
    expect(biClass('bi-circle')).toBe('bi-circle')
  })
})
