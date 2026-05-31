// Mock dashboard KPIs. Swap for a real query/aggregation in your app.
export default defineEventHandler(() => ({
  stats: [
    { label: 'New Orders', value: 150, icon: 'bi-bag', theme: 'info', progress: 70, note: '70% increase in 30 days' },
    { label: 'Bounce Rate', value: '53%', icon: 'bi-graph-up', theme: 'success', progress: 53, note: '53% increase in 30 days' },
    { label: 'User Registrations', value: 44, icon: 'bi-person-plus', theme: 'warning', progress: 80, note: '80% increase in 30 days' },
    { label: 'Unique Visitors', value: '65k', icon: 'bi-pie-chart', theme: 'danger', progress: 50, note: '50% increase in 30 days' },
  ],
}))
