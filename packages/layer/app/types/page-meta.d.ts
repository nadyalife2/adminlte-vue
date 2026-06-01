// Allow pages to declare the roles required to view them:
//   definePageMeta({ middleware: 'auth', roles: ['admin'] })
import '#app'

declare module '#app' {
  interface PageMeta {
    roles?: string[]
  }
}

export {}
