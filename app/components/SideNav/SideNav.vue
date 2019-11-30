<template>
  <nav class="side-nav">
    <UserInfoBlock v-if="isLogin" />
    <div v-else></div>
    <ul class="menu">
      <MenuColumn message="home" link="/home" />
      <MenuColumn message="settings" link="/settings" />
    </ul>
  </nav>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

import UserInfoBlock from './UserInfoBlock.vue'
import MenuColumn from './MenuColumn.vue'

export default createComponent({
  components: { UserInfoBlock, MenuColumn },
  setup(_props, context) {
    return { isLogin: ref(context.root.$accessor.isLogin) }
  }
})
</script>

<style lang="scss" scoped>
.side-nav {
  width: 320px;
  height: 100vh;
  background-color: white;
  box-shadow: 0 0 48px $shadow-color;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.menu {
  flex-grow: 2;
  user-select: none;
}
</style>
