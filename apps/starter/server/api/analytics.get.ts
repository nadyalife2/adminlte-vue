// Mock analytics data, shaped for ApexCharts series/options.
export default defineEventHandler(() => ({
  kpis: [
    { label: 'Revenue', value: '$48.2k', delta: '+12.5%', up: true, icon: 'bi-cash-stack', theme: 'success' },
    { label: 'Orders', value: '1,284', delta: '+4.1%', up: true, icon: 'bi-bag', theme: 'primary' },
    { label: 'Refunds', value: '37', delta: '-1.8%', up: false, icon: 'bi-arrow-counterclockwise', theme: 'warning' },
    { label: 'Churn', value: '2.3%', delta: '-0.4%', up: false, icon: 'bi-person-dash', theme: 'danger' },
  ],
  revenue: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      { name: '2025', data: [31, 40, 28, 51, 42, 62, 69, 78, 71, 84, 92, 101] },
      { name: '2024', data: [22, 30, 25, 38, 35, 41, 48, 52, 49, 58, 63, 70] },
    ],
  },
  sales: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [{ name: 'Sales', data: [11, 32, 45, 32, 34, 52, 41] }],
  },
  traffic: {
    labels: ['Chrome', 'Safari', 'Firefox', 'Edge'],
    series: [44, 55, 13, 33],
  },
}))
