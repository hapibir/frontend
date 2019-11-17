<template>
  <div>
    <div @click="login">Login</div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import firebase from '~/firebase'

export default createComponent({
  name: 'PageIndex',
  components: {},
  setup() {
    return {
      login: () => {
        firebase
          .auth()
          .signInWithRedirect(new firebase.auth.TwitterAuthProvider())
      }
    }
  }
})
</script>

<style lang="scss" scoped></style>
