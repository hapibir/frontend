<template>
  <div>
    <div>HOME</div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  layout: 'app',
  middleware: 'authenticated',
  components: {},
  setup() {}
})
</script>
