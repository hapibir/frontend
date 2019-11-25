<template>
  <div class="block" :class="{ today: isToday }">
    <div v-if="isToday" class="today-marker">
      <div class="today-marker-icon-wrap">
        <font-awesome-icon :icon="icons.faPennant" />
      </div>
    </div>
    <span class="day">{{ day }}</span>
  </div>
</template>

<script lang="ts">
import { createComponent, ref, computed } from '@vue/composition-api'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPennant } from '@fortawesome/pro-regular-svg-icons'

export default createComponent({
  components: { FontAwesomeIcon },
  props: {
    date: { type: Date, required: true }
  },
  setup(props) {
    const date = new Date(props.date)
    const today = new Date()
    return {
      day: ref(date.getDate()),
      icons: { faPennant },
      isToday: computed(
        () =>
          date.getFullYear() === today.getFullYear() &&
          date.getMonth() === today.getMonth() &&
          date.getDate() === today.getDate()
      )
    }
  }
})
</script>

<style lang="scss" scoped>
.block {
  padding: 6px 6px;
  position: relative;
}

.today-marker {
  position: absolute 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.today-marker-icon-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: $accent-color;
}

.day {
  color: $text-color;
  font-family: 'Montserrat', sans-serif;
}
</style>
