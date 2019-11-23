<template>
  <nav class="side-nav">
    <UserInfoBlock />
    <p>A</p>
  </nav>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import UserInfoBlock from './UserInfoBlock.vue'

export default createComponent({
  components: { UserInfoBlock },
  setup() {}
})
</script>

<style lang="scss" scoped>
.side-nav {
  width: 320px;
  height: 100vh;
  background-color: $bg-whity;
  box-shadow: 0 0 48px $shadow-color;
  overflow: hidden;
}
</style>
