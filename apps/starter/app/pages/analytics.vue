<script setup lang="ts">
import { computed } from 'vue'

definePageMeta({ middleware: 'auth' })
useSeoMeta({ title: 'Analytics · AdminLTE Starter', description: 'Revenue, sales and traffic charts.' })

const { data } = await useFetch('/api/analytics')

const kpis = computed(() => data.value?.kpis ?? [])
const revenue = computed(() => ({
  series: data.value?.revenue.series ?? [],
  options: {
    chart: { toolbar: { show: false } },
    stroke: { curve: 'smooth', width: 2 },
    xaxis: { categories: data.value?.revenue.categories ?? [] },
    dataLabels: { enabled: false },
  },
}))
const sales = computed(() => ({
  series: data.value?.sales.series ?? [],
  options: {
    chart: { toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 4, columnWidth: '55%' } },
    xaxis: { categories: data.value?.sales.categories ?? [] },
    dataLabels: { enabled: false },
  },
}))
const traffic = computed(() => ({
  series: data.value?.traffic.series ?? [],
  options: { labels: data.value?.traffic.labels ?? [], legend: { position: 'bottom' } },
}))
</script>

<template>
  <LteAppContent title="Analytics" :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Analytics' }]">
    <div class="row g-3 mb-1">
      <div v-for="k in kpis" :key="k.label" class="col-6 col-lg-3">
        <LteInfoBox :theme="k.theme" :icon="k.icon" :title="k.label" :text="k.value" />
      </div>
    </div>

    <div class="row g-3">
      <div class="col-lg-8">
        <LteCard title="Revenue" icon="bi-graph-up">
          <ClientOnly>
            <LteApexChart type="area" :height="320" :series="revenue.series" :options="revenue.options" />
            <template #fallback><div class="text-center text-secondary py-5">Loading chart…</div></template>
          </ClientOnly>
        </LteCard>
      </div>
      <div class="col-lg-4">
        <LteCard title="Traffic sources" icon="bi-pie-chart">
          <ClientOnly>
            <LteApexChart type="donut" :height="320" :series="traffic.series" :options="traffic.options" />
            <template #fallback><div class="text-center text-secondary py-5">Loading chart…</div></template>
          </ClientOnly>
        </LteCard>
      </div>
      <div class="col-12">
        <LteCard title="Weekly sales" icon="bi-bar-chart">
          <ClientOnly>
            <LteApexChart type="bar" :height="300" :series="sales.series" :options="sales.options" />
            <template #fallback><div class="text-center text-secondary py-5">Loading chart…</div></template>
          </ClientOnly>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
