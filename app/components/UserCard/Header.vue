<template>
  <header>
    <div class="profile">
      <div class="icon-wrap">
        <img :src="icon" />
      </div>
      <div class="screen-name-wrap">
        <p>@{{ screenName }}</p>
      </div>
      <div class="name-wrap">
        <p>{{ name }}</p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  components: {},
  props: {
    icon: {
      type: String,
      required: true
    },
    screenName: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.profile {
  display: grid;
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(50%);
  padding: 0 24px;
  grid-template-areas:
    'icon name'
    'icon screen-name';
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
}

.icon-wrap {
  grid-area: icon;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  pointer-events: none;
  img {
    size: 72px;
  }
}

.screen-name-wrap {
  grid-area: screen-name;
  p {
    color: $text-color-light;
    font-size: 0.85rem;
    font-family: 'Montserrat Alternates', sans-serif;
    line-height: 1em;
  }
}

.name-wrap {
  grid-area: name;

  p {
    color: $text-color;
    font-size: 1.1rem;
    font-family: var(--sans-serif-ja);
  }
}

.screen-name-wrap,
.name-wrap {
  align-self: center;
  padding-left: 16px;
}
</style>
