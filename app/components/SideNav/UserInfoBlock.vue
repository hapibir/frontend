<template>
  <div class="user-info-box">
    <div class="icon-wrap">
      <img class="icon" :src="account.icon" />
    </div>
    <div class="screen-name-wrap">
      <p class="screen-name">@{{ account.screenName }}</p>
    </div>
    <div class="name-wrap">
      <p class="name">{{ account.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'

export default createComponent({
  components: {},
  setup(_props, context) {
    return { account: ref(context.root.$accessor.account) }
  }
})
</script>

<style lang="scss" scoped>
.user-info-box {
  width: 100%;
  height: 160px;
  padding: 24px 16px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 2fr;
  grid-template-areas:
    'icon screen-name'
    'icon name'
    '.... .';
  grid-column-gap: 8px;
}

.icon-wrap {
  grid-area: icon;
  size: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 25%;
  box-shadow: 0 4px 16px $shadow-color;
}

.icon {
  size: 100%;
}

.screen-name-wrap {
  grid-area: screen-name;
  align-self: center;
}

.screen-name {
  color: $text-color-light;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 0.9rem;
  line-height: 1em;
}

.name-wrap {
  grid-area: name;
  align-self: center;
}

.name {
  color: $text-color;
  font-family: var(--sans-serif-jp);
}
</style>
