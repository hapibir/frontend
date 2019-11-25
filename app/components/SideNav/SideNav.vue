<template>
  <nav class="side-nav">
    <UserInfoBlock v-if="isLogin" />
    <div v-else></div>
    <p>A</p>
  </nav>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

import UserInfoBlock from './UserInfoBlock.vue'

export default createComponent({
  components: { UserInfoBlock },
  setup(_props, context) {
    return { isLogin: ref(context.root.$accessor.isLogin) }
  }
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
