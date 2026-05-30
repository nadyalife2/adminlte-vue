<script setup lang="ts">
type Ability = { theme: string; title: string; tool: 'collapse' | 'remove' | 'maximize'; collapsed?: boolean }

const abilities: Ability[] = [
  { theme: 'primary', title: 'Expandable', tool: 'collapse', collapsed: true },
  { theme: 'success', title: 'Collapsable', tool: 'collapse' },
  { theme: 'warning', title: 'Removable', tool: 'remove' },
  { theme: 'danger', title: 'Maximizable', tool: 'maximize' },
]

const sections = [
  { heading: 'Abilities', variant: 'header' as const },
  { heading: 'Card Outlined', variant: 'outline' as const },
  { heading: 'Card with', code: '.text-bg-*', variant: 'bg' as const },
]

function cardClass(variant: string, a: Ability): string {
  const base =
    variant === 'outline'
      ? `card card-outline card-${a.theme}`
      : variant === 'bg'
        ? `card text-bg-${a.theme}`
        : `card card-${a.theme}`
  return a.collapsed ? `${base} collapsed-card` : base
}
</script>

<template>
  <LteAppContent title="Cards" :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Cards' }]">
    <h4 class="mb-2">Cards</h4>

    <template v-for="(s, si) in sections" :key="si">
      <h5 class="mb-2">{{ s.heading }} <code v-if="s.code">{{ s.code }}</code></h5>
      <div class="row g-4 mb-4">
        <div v-for="(a, ai) in abilities" :key="ai" class="col-md-3">
          <div :class="cardClass(s.variant, a)">
            <div class="card-header">
              <h3 class="card-title">{{ a.title }}</h3>
              <div class="card-tools">
                <button
                  v-if="a.tool === 'collapse'"
                  type="button"
                  class="btn btn-tool"
                  data-lte-toggle="card-collapse"
                >
                  <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                  <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
                </button>
                <button
                  v-else-if="a.tool === 'remove'"
                  type="button"
                  class="btn btn-tool"
                  data-lte-toggle="card-remove"
                >
                  <i class="bi bi-x-lg"></i>
                </button>
                <button
                  v-else
                  type="button"
                  class="btn btn-tool"
                  data-lte-toggle="card-maximize"
                >
                  <i data-lte-icon="maximize" class="bi bi-fullscreen"></i>
                  <i data-lte-icon="minimize" class="bi bi-fullscreen-exit"></i>
                </button>
              </div>
            </div>
            <div class="card-body">The body of the card</div>
          </div>
        </div>
      </div>
    </template>
  </LteAppContent>
</template>
