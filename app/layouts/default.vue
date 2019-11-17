<template>
  <div class="root">
    <nuxt class="nuxt" />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  setup() {}
})
</script>

<style lang="scss">
:root {
  --sans-serif: 'Roboto', sans-serif;
}
</style>

<style lang="scss" scoped>
.root {
  width: 100%;
  min-height: 100vh;
  background-color: $bg-whity;
}

.nuxt {
  width: 100%;
  height: 100vh;
}
</style>
