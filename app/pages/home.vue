<template>
  <div>
    <div class="calendar-wrap">
      <Calendar :year="calendar.year" :month="calendar.month" />
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'

import Calendar from '~/components/Calendar/Calendar.vue'

export default createComponent({
  layout: 'app',
  middleware: 'authenticated',
  components: { Calendar },
  setup() {
    const now = new Date()
    return {
      calendar: reactive({
        year: now.getFullYear(),
        month: now.getMonth() + 1
      })
    }
  }
})
</script>

<style lang="scss" scoped>
.calendar-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 640px;
}
</style>
