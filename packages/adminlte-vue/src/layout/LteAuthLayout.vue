<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import type { AuthLayoutProps } from '../types/layout'

const props = withDefaults(defineProps<AuthLayoutProps>(), {
  authType: 'login',
  variant: 'default',
  logoHref: '/',
})

// Apply the page-level body classes client-side (the host owns <body>).
const bodyClasses = [`${props.authType}-page`, 'bg-body-secondary']
onMounted(() => document.body.classList.add(...bodyClasses))
onBeforeUnmount(() => document.body.classList.remove(...bodyClasses))
</script>

<template>
  <div :class="`${authType}-box`">
    <!-- v2: card-outline with the logo inside the card header -->
    <div v-if="variant === 'v2'" class="card card-outline card-primary">
      <div class="card-header">
        <a
          :href="logoHref"
          class="link-dark text-center link-offset-2 link-opacity-100 link-opacity-50-hover"
        >
          <slot name="logo">
            <img v-if="logo" :src="logo" alt="Logo" height="48" />
            <h1 v-else class="mb-0"><b>Admin</b>LTE</h1>
          </slot>
        </a>
      </div>
      <div :class="`card-body ${authType}-card-body`">
        <slot />
      </div>
    </div>

    <!-- default (v1): logo above a plain card -->
    <template v-else>
      <div :class="`${authType}-logo`">
        <a :href="logoHref">
          <slot name="logo">
            <img v-if="logo" :src="logo" alt="Logo" height="48" />
            <template v-else><b>Admin</b>LTE</template>
          </slot>
        </a>
      </div>

      <div class="card">
        <div :class="`card-body ${authType}-card-body`">
          <slot />
        </div>
      </div>
    </template>
  </div>
</template>
