<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type {
  Calendar,
  CalendarOptions,
  EventInput,
  EventClickArg,
  EventDropArg,
} from '@fullcalendar/core'
import type { DateClickArg } from '@fullcalendar/interaction'

const props = withDefaults(
  defineProps<{
    events?: EventInput[]
    initialView?: string
    options?: Partial<CalendarOptions>
  }>(),
  { events: () => [] as EventInput[], initialView: 'dayGridMonth' }
)

const emit = defineEmits<{
  dateClick: [arg: DateClickArg]
  eventClick: [arg: EventClickArg]
  eventDrop: [arg: EventDropArg]
}>()

const el = ref<HTMLElement | null>(null)
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
  { deep: true }
)

onBeforeUnmount(() => {
  calendar?.destroy()
  calendar = null
})
</script>

<template>
  <div ref="el"></div>
</template>
