<script setup lang="ts">
// Plain / custom-shadow info boxes (sections 1 & 2 share the same data).
const statBoxes = [
  { theme: 'primary', icon: 'bi-gear-fill', text: 'CPU Traffic', number: '10', unit: '%' },
  { theme: 'success', icon: 'bi-cart-fill', text: 'Sales', number: '760' },
  { theme: 'warning', icon: 'bi-people-fill', text: 'New Members', number: '2,000' },
  { theme: 'danger', icon: 'bi-hand-thumbs-up-fill', text: 'Likes', number: '41,410' },
]
// Per-box shadow utility for the "Custom Shadows" section.
const shadows = ['shadow-none', 'shadow-sm', 'shadow', 'shadow-lg']

// Colored info boxes with a progress bar (sections 3 & 4).
const progressBoxes = [
  { theme: 'primary', icon: 'bi-bookmark-fill', text: 'Bookmarks' },
  { theme: 'success', icon: 'bi-hand-thumbs-up', text: 'Likes' },
  { theme: 'warning', icon: 'bi-calendar3', text: 'Events' },
  { theme: 'danger', icon: 'bi-chat-text-fill', text: 'Comments' },
]
</script>

<template>
  <LteAppContent
    title="Info Box"
    :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Info Box' }]"
  >
    <h5 class="mb-2">Info Box</h5>
    <div class="row">
      <div v-for="(b, i) in statBoxes" :key="i" class="col-12 col-sm-6 col-md-3">
        <div class="info-box">
          <span :class="`info-box-icon text-bg-${b.theme} shadow-sm`">
            <i :class="`bi ${b.icon}`"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">{{ b.text }}</span>
            <span class="info-box-number"> {{ b.number }} <small v-if="b.unit">{{ b.unit }}</small> </span>
          </div>
        </div>
      </div>
    </div>

    <h5 class="mb-2">
      Info Box With Custom Shadows
      <small><i>Using Bootstrap's Shadow Utility</i></small>
    </h5>
    <div class="row">
      <div v-for="(b, i) in statBoxes" :key="i" class="col-12 col-sm-6 col-md-3">
        <div :class="`info-box ${shadows[i]}`">
          <span :class="`info-box-icon text-bg-${b.theme} shadow-sm`">
            <i :class="`bi ${b.icon}`"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">{{ b.text }}</span>
            <span class="info-box-number"> {{ b.number }} <small v-if="b.unit">{{ b.unit }}</small> </span>
          </div>
        </div>
      </div>
    </div>

    <h5 class="mt-4 mb-2">Info Box With <code>bg-*</code></h5>
    <div class="row">
      <div v-for="(b, i) in progressBoxes" :key="i" class="col-md-3 col-sm-6 col-12">
        <div :class="`info-box text-bg-${b.theme}`">
          <span class="info-box-icon">
            <i :class="`bi ${b.icon}`"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">{{ b.text }}</span>
            <span class="info-box-number">41,410</span>
            <div class="progress">
              <div class="progress-bar" style="width: 70%"></div>
            </div>
            <span class="progress-description"> 70% Increase in 30 Days </span>
          </div>
        </div>
      </div>
    </div>

    <h5 class="mt-4 mb-2">Info Box With <code>bg-gradient</code></h5>
    <div class="row">
      <div v-for="(b, i) in progressBoxes" :key="i" class="col-md-3 col-sm-6 col-12">
        <div :class="`info-box text-bg-${b.theme} bg-gradient`">
          <span class="info-box-icon">
            <i :class="`bi ${b.icon}`"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">{{ b.text }}</span>
            <span class="info-box-number">41,410</span>
            <div class="progress">
              <div class="progress-bar" style="width: 70%"></div>
            </div>
            <span class="progress-description"> 70% Increase in 30 Days </span>
          </div>
        </div>
      </div>
    </div>
  </LteAppContent>
</template>
