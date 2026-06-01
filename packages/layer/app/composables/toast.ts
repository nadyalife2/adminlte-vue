export type ToastTheme = 'success' | 'danger' | 'warning' | 'info'

export interface Toast {
  id: number
  message: string
  title?: string
  theme: ToastTheme
}

/**
 * Tiny app-wide toast queue (auto-imported in consumer apps). State lives in
 * useState so it's shared across components and survives in-layout navigation;
 * <AppToaster> (mounted in the default layout) renders + auto-dismisses them.
 */
export function useToast() {
  const toasts = useState<Toast[]>('app:toasts', () => [])
  const seq = useState('app:toast-seq', () => 0)

  function dismiss(id: number) {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  function push(message: string, theme: ToastTheme, title?: string) {
    const id = ++seq.value
    toasts.value = [...toasts.value, { id, message, theme, title }]
    if (import.meta.client) setTimeout(() => dismiss(id), 4000)
  }

  return {
    toasts,
    dismiss,
    success: (message: string, title?: string) => push(message, 'success', title),
    error: (message: string, title?: string) => push(message, 'danger', title),
    warning: (message: string, title?: string) => push(message, 'warning', title),
    info: (message: string, title?: string) => push(message, 'info', title),
  }
}
