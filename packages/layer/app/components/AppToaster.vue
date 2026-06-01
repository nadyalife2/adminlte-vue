<script setup lang="ts">
const { toasts, dismiss } = useToast()

const icon: Record<string, string> = {
  success: 'bi-check-circle-fill',
  danger: 'bi-exclamation-octagon-fill',
  warning: 'bi-exclamation-triangle-fill',
  info: 'bi-info-circle-fill',
}
</script>

<template>
  <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1090">
    <TransitionGroup name="toast">
      <div
        v-for="t in toasts"
        :key="t.id"
        class="toast show align-items-center text-bg-light border-0 mb-2"
        role="alert"
        aria-live="assertive"
      >
        <div class="d-flex">
          <div class="toast-body d-flex align-items-start gap-2">
            <i class="bi mt-1" :class="[icon[t.theme], `text-${t.theme}`]" />
            <div>
              <strong v-if="t.title" class="d-block">{{ t.title }}</strong>
              {{ t.message }}
            </div>
          </div>
          <button
            type="button"
            class="btn-close me-2 m-auto"
            aria-label="Close"
            @click="dismiss(t.id)"
          />
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style>
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(1rem);
}
</style>
