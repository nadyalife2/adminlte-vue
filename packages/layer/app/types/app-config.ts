import type { MenuNode, NavMessage, NavNotification } from 'adminlte-vue'

/** Sidebar / topbar branding. */
export interface AdminlteBrand {
  logo?: string
  text?: string
  href?: string
}

/** The signed-in user shown in the topbar (overridden at runtime by the auth store). */
export interface AdminlteUser {
  name: string
  email?: string
  image?: string
  role?: string
  memberSince?: string
}

/**
 * The `adminlte` block of a consuming app's `app.config.ts`. Drives the default
 * dashboard layout so apps can rebrand and supply their menu without touching
 * the layout component.
 */
export interface AdminlteAppConfig {
  brand?: AdminlteBrand
  user?: AdminlteUser
  menu?: MenuNode[]
  messages?: NavMessage[]
  notifications?: NavNotification[]
}
