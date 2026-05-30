import type { MenuNode } from 'adminlte-vue'

/** Sidebar menu for the documentation section (mirrors the AdminLTE 4 docs nav). */
export const docsMenu: MenuNode[] = [
  { type: 'header', text: 'START HERE' },
  { type: 'item', text: 'Introduction', href: '/docs/introduction', icon: 'bi-circle' },
  { type: 'item', text: 'Getting Started', href: '/docs/getting-started', icon: 'bi-circle' },
  { type: 'header', text: 'FOUNDATIONS' },
  { type: 'item', text: 'Layout', href: '/docs/layout', icon: 'bi-circle' },
  { type: 'item', text: 'Layout Blueprint', href: '/docs/layout-blueprint', icon: 'bi-circle' },
  { type: 'item', text: 'Customization', href: '/docs/customization', icon: 'bi-circle' },
  { type: 'item', text: 'Color Mode', href: '/docs/color-mode', icon: 'bi-circle' },
  { type: 'item', text: 'RTL', href: '/docs/rtl', icon: 'bi-circle' },
  { type: 'header', text: 'BUILDING' },
  { type: 'item', text: 'Recipes', href: '/docs/recipes', icon: 'bi-circle' },
  {
    type: 'group',
    text: 'Components',
    icon: 'bi-circle',
    children: [
      { type: 'item', text: 'Main Header', href: '/docs/components/main-header', icon: 'bi-circle' },
      { type: 'item', text: 'Main Sidebar', href: '/docs/components/main-sidebar', icon: 'bi-circle' },
    ],
  },
  {
    type: 'group',
    text: 'JavaScript',
    icon: 'bi-circle',
    children: [
      { type: 'item', text: 'Plugins Overview', href: '/docs/javascript/plugins-overview', icon: 'bi-circle' },
      { type: 'item', text: 'Layout', href: '/docs/javascript/layout', icon: 'bi-circle' },
      { type: 'item', text: 'Pushmenu', href: '/docs/javascript/pushmenu', icon: 'bi-circle' },
      { type: 'item', text: 'Treeview', href: '/docs/javascript/treeview', icon: 'bi-circle' },
      { type: 'item', text: 'Card Widget', href: '/docs/javascript/card-widget', icon: 'bi-circle' },
      { type: 'item', text: 'Direct Chat', href: '/docs/javascript/direct-chat', icon: 'bi-circle' },
      { type: 'item', text: 'Fullscreen', href: '/docs/javascript/fullscreen', icon: 'bi-circle' },
      { type: 'item', text: 'Accessibility', href: '/docs/javascript/accessibility', icon: 'bi-circle' },
    ],
  },
  { type: 'item', text: 'Integrations', href: '/docs/integrations', icon: 'bi-circle' },
  { type: 'header', text: 'SHIPPING' },
  { type: 'item', text: 'Migration', href: '/docs/migration', icon: 'bi-circle' },
  { type: 'item', text: 'Deployment', href: '/docs/deployment', icon: 'bi-circle' },
  { type: 'item', text: 'Browser Support', href: '/docs/browser-support', icon: 'bi-circle' },
  { type: 'header', text: 'RESOURCES' },
  { type: 'item', text: 'FAQ', href: '/docs/faq', icon: 'bi-circle' },
  { type: 'item', text: 'How to Contribute', href: '/docs/how-to-contribute', icon: 'bi-circle' },
  { type: 'item', text: 'License', href: '/docs/license', icon: 'bi-circle' },
]
