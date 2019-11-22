<template>
  <div class="root">
    <SideNav />
    <nuxt class="nuxt" />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import SideNav from '~/components/SideNav/SideNav.vue'

export default createComponent({
  components: { SideNav },
  setup() {}
})
</script>

<style lang="scss">
:root {
  --sans-serif: 'Roboto', sans-serif;
  --sans-serif-ja: '游ゴシック Medium', YuGothic, YuGothicM,
    'Hiragino Kaku Gothic ProN', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo,
    sans-serif;

  font-family: var(--sans-serif);
}
</style>

<style lang="scss" scoped>
.root {
  width: 100%;
  min-height: 100vh;
  background-color: $bg-whity;
  overflow: hidden;
  display: flex;
}

.nuxt {
  flex-grow: 2;
  height: 100vh;
  overflow-y: scroll;
}
</style>
