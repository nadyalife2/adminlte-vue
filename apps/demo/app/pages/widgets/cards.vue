<script setup lang="ts">
type Theme = 'primary' | 'success' | 'warning' | 'danger'
type Tool = 'collapse' | 'remove' | 'maximize'

const abilities: Array<{ theme: Theme; title: string; tool: Tool; collapsed?: boolean }> = [
  { theme: 'primary', title: 'Expandable', tool: 'collapse', collapsed: true },
  { theme: 'success', title: 'Collapsable', tool: 'collapse' },
  { theme: 'warning', title: 'Removable', tool: 'remove' },
  { theme: 'danger', title: 'Maximizable', tool: 'maximize' },
]

const sections = [
  { heading: 'Abilities', variant: 'default' as const },
  { heading: 'Card Outlined', variant: 'outline' as const },
  { heading: 'Card with', code: '.text-bg-*', variant: 'solid' as const },
]
</script>

<template>
  <LteAppContent title="Cards" :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Cards' }]">
    <h4 class="mb-2">Cards</h4>

    <template v-for="(s, si) in sections" :key="si">
      <h5 class="mb-2">{{ s.heading }} <code v-if="s.code">{{ s.code }}</code></h5>
      <div class="row g-4 mb-4">
        <div v-for="(a, ai) in abilities" :key="ai" class="col-md-3">
          <LteCard
            :title="a.title"
            :theme="a.theme"
            :variant="s.variant"
            :collapsible="a.tool === 'collapse'"
            :default-collapsed="a.tool === 'collapse' && !!a.collapsed"
            :removable="a.tool === 'remove'"
            :maximizable="a.tool === 'maximize'"
          >
            The body of the card
          </LteCard>
        </div>
      </div>
    </template>
  </LteAppContent>
</template>
