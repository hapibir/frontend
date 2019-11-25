<template>
  <div class="calendar">
    <div
      v-for="(text, i) in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']"
      :key="i"
      class="week"
    >
      <span>{{ text }}</span>
    </div>
    <CalendarBlock
      v-for="(date, i) in blocks"
      :key="`${Math.floor(i / 7) + 1}-${(i % 7) + 1}`"
      class="block"
      :class="`block-${Math.floor(i / 7) + 1}-${(i % 7) + 1}`"
      :date="date"
    />
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import CalendarBlock from './CalendarBlock.vue'

export default createComponent({
  components: { FontAwesomeIcon, CalendarBlock },
  props: {
    year: { type: Number, required: true },
    month: { type: Number, required: true }
  },
  setup(props) {
    const blocks = []
    const firstOfMonth = new Date(props.year, props.month - 1, 1)
    const first = new Date(
      firstOfMonth.getFullYear(),
      firstOfMonth.getMonth(),
      firstOfMonth.getDate() - firstOfMonth.getDay()
    )
    for (let i = 0; i < 7 * 6; i += 1) {
      blocks.push(
        new Date(first.getFullYear(), first.getMonth(), first.getDate() + i)
      )
    }
    return { blocks: ref(blocks) }
  }
})
</script>

<style lang="scss" scoped>
.calendar {
  width: 720px;
  height: 480px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 40px repeat(6, auto);
  box-shadow: 0 8px 32px $shadow-color;
  overflow: hidden;
}

.week {
  background: linear-gradient(135deg, #24292e, darken(#24292e, 5%));
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @for $i from 1 through 7 {
    &:nth-of-type(#{$i}) {
      grid-column: $i;
      span {
        @if $i == 1 {
          color: hsl(2, 92%, lightness($text-color-whity));
        } @else if $i == 7 {
          color: hsl(235, 92%, lightness($text-color-whity));
        } @else {
          color: $text-color-whity;
        }
      }
    }
  }
  span {
    font-family: 'Montserrat', sans-serif;
  }
}

.block {
  @for $i from 1 through 6 {
    @for $j from 1 through 7 {
      &.block-#{$i}-#{$j} {
        grid-row: $i + 1;
        grid-column: $j;
      }
    }
  }
}
</style>
