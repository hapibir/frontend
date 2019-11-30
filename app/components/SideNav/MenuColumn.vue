<i18n locale="en" lang="yaml">
  home: "Home"
  settings: "Settings"
</i18n>

<i18n locale="ja" lang="yml">
  home: "ホームに戻る"
  settings: "設定"
</i18n>

<template>
  <li class="column">
    <div class="icon-wrap">
      <FontAwesomeIcon :icon="icon" />
    </div>
    <div class="text-wrap">
      <p v-t="message" />
    </div>
    <nuxt-link :to="link" class="link" />
  </li>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faCog } from '@fortawesome/pro-solid-svg-icons'

export default createComponent({
  components: { FontAwesomeIcon },
  props: {
    message: { type: String, required: true },
    link: { type: String, required: true }
  },
  setup(props) {
    const icons = {
      home: faHome,
      settings: faCog
    }
    return {
      icon: icons[props.message as keyof typeof icons]
    }
  }
})
</script>

<style lang="scss" scoped>
.column {
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0 16px;
  background: $bg-whity;
  box-shadow: 0 2px 16px $shadow-color;
  position: relative;
  border-left: solid $accent-color;
  border-width: 0;
  transition: 0.05s border-width ease;
  &:hover {
    border-width: 12px;
  }
}

.icon-wrap {
  size: 48px;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: $text-color;
}

.text-wrap {
  p {
    color: $text-color;
    font-family: var(--sans-serif-ja);
  }
}

.link {
  position: absolute 0;
  size: 100%;
  z-index: 1;
}
</style>
