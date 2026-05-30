<script setup lang="ts">
type Theme = 'primary' | 'success' | 'warning' | 'danger'

// Plain / custom-shadow boxes (sections 1 & 2 share this data).
const statBoxes: Array<{ theme: Theme; icon: string; text: string; number: string; unit?: string }> = [
  { theme: 'primary', icon: 'bi-gear-fill', text: 'CPU Traffic', number: '10', unit: '%' },
  { theme: 'success', icon: 'bi-cart-fill', text: 'Sales', number: '760' },
  { theme: 'warning', icon: 'bi-people-fill', text: 'New Members', number: '2,000' },
  { theme: 'danger', icon: 'bi-hand-thumbs-up-fill', text: 'Likes', number: '41,410' },
]
const shadows = ['shadow-none', 'shadow-sm', 'shadow', 'shadow-lg']

// Colored boxes with a progress bar (sections 3 & 4).
const progressBoxes: Array<{ theme: Theme; icon: string; text: string }> = [
  { theme: 'primary', icon: 'bi-bookmark-fill', text: 'Bookmarks' },
  { theme: 'success', icon: 'bi-hand-thumbs-up', text: 'Likes' },
  { theme: 'warning', icon: 'bi-calendar3', text: 'Events' },
  { theme: 'danger', icon: 'bi-chat-text-fill', text: 'Comments' },
]
</script>

<template>
  <LteAppContent title="Info Box" :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Info Box' }]">
    <h5 class="mb-2">Info Box</h5>
    <div class="row">
      <div v-for="(b, i) in statBoxes" :key="i" class="col-12 col-sm-6 col-md-3">
        <LteInfoBox :theme="b.theme" :icon="b.icon" :text="b.text" :title="b.number" :unit="b.unit" />
      </div>
    </div>

    <h5 class="mb-2">
      Info Box With Custom Shadows
      <small><i>Using Bootstrap's Shadow Utility</i></small>
    </h5>
    <div class="row">
      <div v-for="(b, i) in statBoxes" :key="i" class="col-12 col-sm-6 col-md-3">
        <LteInfoBox
          :theme="b.theme"
          :icon="b.icon"
          :text="b.text"
          :title="b.number"
          :unit="b.unit"
          :box-class="shadows[i]"
        />
      </div>
    </div>

    <h5 class="mt-4 mb-2">Info Box With <code>bg-*</code></h5>
    <div class="row">
      <div v-for="(b, i) in progressBoxes" :key="i" class="col-md-3 col-sm-6 col-12">
        <LteInfoBox
          variant="solid"
          :theme="b.theme"
          :icon="b.icon"
          :text="b.text"
          title="41,410"
          :progress="70"
          progress-text="70% Increase in 30 Days"
        />
      </div>
    </div>

    <h5 class="mt-4 mb-2">Info Box With <code>bg-gradient</code></h5>
    <div class="row">
      <div v-for="(b, i) in progressBoxes" :key="i" class="col-md-3 col-sm-6 col-12">
        <LteInfoBox
          variant="solid"
          gradient
          :theme="b.theme"
          :icon="b.icon"
          :text="b.text"
          title="41,410"
          :progress="70"
          progress-text="70% Increase in 30 Days"
        />
      </div>
    </div>
  </LteAppContent>
</template>
