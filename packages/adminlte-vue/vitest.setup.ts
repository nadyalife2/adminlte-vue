// jsdom only wires up localStorage for a non-opaque document origin, and Vitest
// skips copying the throwing getter onto globalThis — so the bare `localStorage`
// the composables use can be undefined. Install a deterministic in-memory shim.
class MemoryStorage implements Storage {
  private store = new Map<string, string>()
  get length() {
    return this.store.size
  }
  clear() {
    this.store.clear()
  }
  getItem(key: string) {
    return this.store.has(key) ? this.store.get(key)! : null
  }
  key(index: number) {
    return Array.from(this.store.keys())[index] ?? null
  }
  removeItem(key: string) {
    this.store.delete(key)
  }
  setItem(key: string, value: string) {
    this.store.set(key, String(value))
  }
}

function hasLocalStorage() {
  try {
    return typeof globalThis.localStorage !== 'undefined'
  } catch {
    return false
  }
}

if (!hasLocalStorage()) {
  const storage = new MemoryStorage()
  Object.defineProperty(globalThis, 'localStorage', { value: storage, configurable: true })
  if (typeof window !== 'undefined') {
    Object.defineProperty(window, 'localStorage', { value: storage, configurable: true })
  }
}
