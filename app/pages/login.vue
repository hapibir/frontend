<template>
  <div>
    <div class="buttons">
      <LoginButton provider="twitter" />
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import LoginButton from '~/components/Auth/LoginButton.vue'

export default createComponent({
  components: { LoginButton },
  middleware: 'login',
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.buttons {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button {
  margin-bottom: 16px;
}
</style>
