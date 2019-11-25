<template>
  <div class="card">
    <HeaderPart
      class="header"
      :icon="user.icon"
      :screen-name="user.screenName"
      :name="user.name"
    />
    <SectionPart
      class="section"
      :birthday="user.birthday"
      :age="user.age"
      :remind="user.remind"
    />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faBirthdayCake,
  faCalendarStar
} from '@fortawesome/pro-solid-svg-icons'

import HeaderPart from './Header.vue'
import SectionPart from './Section.vue'

export default createComponent({
  components: { FontAwesomeIcon, HeaderPart, SectionPart },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup() {
    return { icons: { faBirthdayCake, faCalendarStar } }
  }
})
</script>

<style lang="scss" scoped>
.card {
  $width: 360px;

  width: $width;
  height: $width * ((1 + sqrt(pow(1, 2) + 4)) / 2);
  display: grid;
  grid-template-rows: 1fr (1fr * ((2 + sqrt(pow(2, 2) + 4)) / 2));
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 16px 48px $shadow-color;
}

.header {
  grid-row: 1;
  background-color: $accent-color;
  position: relative;
}

.section {
  grid-row: 2;
  background-color: $accent-color-black;
}
</style>
