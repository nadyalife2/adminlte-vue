import { computed, useId, type ComputedRef } from 'vue'

/**
 * Stable id for a form control, preferring an explicitly passed `id` prop.
 *
 * `useId()` must be called during `setup()` — inside a computed getter it would
 * mint a new id on every re-evaluation (breaking the label/control pairing) and
 * warn when first read outside render. This captures one SSR-safe id eagerly
 * and only falls back to it when no explicit id is given.
 */
export function useControlId(
  prefix: string,
  explicitId: () => string | undefined
): ComputedRef<string> {
  const uid = useId()
  return computed(() => explicitId() ?? `${prefix}-${uid}`)
}
