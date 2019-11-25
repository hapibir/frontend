<template>
  <section>
    <ul class="details-list">
      <li class="detail">
        <div class="detail-icon-wrap">
          <FontAwesomeIcon :icon="icons.faBirthdayCake" fixed-width />
        </div>
        <div class="detail-text-wrap">
          <p>{{ formattedBirthday }}</p>
        </div>
      </li>
      <li class="detail">
        <div class="detail-icon-wrap">
          <FontAwesomeIcon :icon="icons.faCalendarStar" fixed-width />
        </div>
        <div class="detail-text-wrap">
          <p>次の誕生日まで、あと{{ remind }}日</p>
        </div>
      </li>
      <li class="detail">
        <div class="detail-icon-wrap">
          <FontAwesomeIcon :icon="icons.faUserClock" fixed-width />
        </div>
        <div class="detail-text-wrap">
          <p>{{ age }}歳</p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faBirthdayCake,
  faCalendarStar,
  faUserClock
} from '@fortawesome/pro-solid-svg-icons'

import { format } from 'date-fns'

export default createComponent({
  components: { FontAwesomeIcon },
  props: {
    birthday: { type: String, required: true },
    age: { type: Number, required: true },
    remind: { type: Number, required: true }
  },
  setup(props) {
    return {
      icons: { faBirthdayCake, faCalendarStar, faUserClock },
      formattedBirthday: computed(() =>
        format(new Date(props.birthday), 'yyyy年M月dd日')
      )
    }
  }
})
</script>

<style lang="scss" scoped>
section {
  padding: 24px;
  padding-top: 48px;
}

.details-list {
  display: flex;
  flex-direction: column;
}

.detail {
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
}

.detail-icon-wrap {
  size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: $accent-color;
}

.detail-text-wrap {
  flex-grow: 2;
  margin-left: 4px;
  p {
    font-size: 1rem;
    color: $text-color-whity;
    font-family: var(--sans-serif-ja);
  }
}
</style>
