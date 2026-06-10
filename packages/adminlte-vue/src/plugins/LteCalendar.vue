<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue'
import type { PropType } from 'vue'
import type {
  Calendar,
  CalendarOptions,
  EventInput,
  EventClickArg,
  EventDropArg,
} from '@fullcalendar/core'
import type { DateClickArg } from '@fullcalendar/interaction'

// Runtime prop declaration (not the `defineProps<T>()` type form): an array prop
// whose only declaration is a `() => []` factory default compiles without a
// runtime `type`, so Volar infers `never[]` when the component is auto-imported.
// `Array as PropType<…>` emits `type: Array`, keeping the element type intact.
const props = defineProps({
  events: { type: Array as PropType<EventInput[]>, default: () => [] },
  /** Reactive after mount — changes are applied via `calendar.changeView()`. */
  initialView: { type: String, default: 'dayGridMonth' },
  /** Reactive after mount — changed keys are applied via `calendar.setOption()`. */
  options: { type: Object as PropType<Partial<CalendarOptions>>, default: undefined },
  /**
   * Watch `events` deeply (recursive traversal — costly for large datasets).
   * Off by default: replace the array immutably to trigger an update.
   */
  deepWatch: { type: Boolean, default: false },
})

const emit = defineEmits<{
  dateClick: [arg: DateClickArg]
  eventClick: [arg: EventClickArg]
  eventDrop: [arg: EventDropArg]
}>()

const el = useTemplateRef('el')
let calendar: Calendar | null = null

onMounted(async () => {
  if (!el.value) return
  const [{ Calendar: FullCalendar }, dayGrid, interaction] = await Promise.all([
    import('@fullcalendar/core'),
    import('@fullcalendar/daygrid'),
    import('@fullcalendar/interaction'),
  ])
  if (!el.value) return
  calendar = new FullCalendar(el.value, {
    plugins: [dayGrid.default, interaction.default],
    initialView: props.initialView,
    headerToolbar: { left: 'prev,next today', center: 'title', right: 'dayGridMonth,dayGridWeek' },
    editable: true,
    events: props.events,
    dateClick: (arg) => emit('dateClick', arg),
    eventClick: (arg) => emit('eventClick', arg),
    eventDrop: (arg) => emit('eventDrop', arg),
    ...props.options,
  })
  calendar.render()
})

defineExpose({
  /** The underlying FullCalendar instance (null until mounted). */
  getApi: () => calendar,
})

watch(
  () => props.events,
  (events) => {
    if (!calendar) return
    calendar.removeAllEvents()
    calendar.addEventSource(events)
  },
  { deep: props.deepWatch }
)
watch(
  () => props.initialView,
  (view) => calendar?.changeView(view)
)
watch(
  () => props.options,
  (options) => {
    if (!calendar || !options) return
    for (const [key, value] of Object.entries(options)) {
      calendar.setOption(key as keyof CalendarOptions, value as never)
    }
  }
)

onBeforeUnmount(() => {
  calendar?.destroy()
  calendar = null
})
</script>

<template>
  <div ref="el"></div>
</template>
