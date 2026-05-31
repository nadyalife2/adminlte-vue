// Mock recent-activity feed for the dashboard timeline.
export default defineEventHandler(() => ({
  activity: [
    { id: 1, who: 'Jane Cooper', action: 'created an invoice', time: '12 minutes ago', icon: 'bi-receipt', theme: 'primary' },
    { id: 2, who: 'Devon Lane', action: 'updated the pricing page', time: '1 hour ago', icon: 'bi-pencil', theme: 'success' },
    { id: 3, who: 'Esther Howard', action: 'closed ticket #4821', time: '3 hours ago', icon: 'bi-check2-circle', theme: 'info' },
    { id: 4, who: 'Cameron Williamson', action: 'left a 5-star review', time: 'Yesterday', icon: 'bi-star', theme: 'warning' },
  ],
}))
