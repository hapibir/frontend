<template>
  <div class="user-info-box">
    <div class="icon-wrap">
      <img class="icon" :src="account.icon" />
    </div>
    <div class="screen-name-wrap">
      <n-link :to="`/users/${account.screenName}`">
        <p class="screen-name">@{{ account.screenName }}</p>
      </n-link>
    </div>
    <div class="name-wrap">
      <p class="name">{{ account.name }}</p>
    </div>
    <div class="socials-list-wrap">
      <ul class="socials-list">
        <li v-if="account.twitter" class="social twitter">
          <div class="social-icon-wrap">
            <font-awesome-icon :icon="icons.faTwitter" />
          </div>
          <a
            target="_blank"
            :href="`https://twitter.com/${account.twitter.screenName}`"
          ></a>
        </li>
      </ul>
    </div>
    <div class="details-list-wrap">
      <ul class="details-list">
        <li class="detail birthday">
          <div class="detail-icon-wrap">
            <font-awesome-icon :icon="icons.faBirthdayCake" fixed-width />
          </div>
          <div class="detail-text-wrap">
            <p>{{ birthday }}</p>
          </div>
        </li>
        <li class="detail remain">
          <div class="detail-icon-wrap">
            <font-awesome-icon :icon="icons.faCalendarStar" fixed-width />
          </div>
          <div class="detail-text-wrap">
            <p>{{ remind }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, ref, computed } from '@vue/composition-api'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBirthdayCake,
  faCalendarStar
} from '@fortawesome/pro-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { format } from 'date-fns'

export default createComponent({
  components: { FontAwesomeIcon },
  setup(_props, context) {
    const account = ref(context.root.$accessor.account)
    return {
      account,
      icons: { faBirthdayCake, faCalendarStar, faTwitter },
      birthday: computed(() =>
        format(new Date(account.value.birthday), 'yyyy/MM/dd')
      )
    }
  }
})
</script>

<style lang="scss" scoped>
.user-info-box {
  width: 100%;
  height: 180px;
  padding: 16px 16px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto 2fr;
  grid-template-areas:
    'icon    screen-name socials'
    'icon    name        name'
    'details details     details';
  grid-column-gap: 12px;
  background-color: #24292e;
  box-shadow: 0 4px 16px $shadow-color;
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

.socials-list-wrap {
  grid-area: socials;
  align-self: center;
}

.socials-list {
  display: flex;
  align-items: center;
}

.social {
  color: white;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  @each $name, $color in (twitter: map-get($social-colors, 'twitter')) {
    &.#{$name} {
      background-color: $color;
    }
  }
  &:not(:last-of-type) {
    margin-right: 4px;
  }
  a {
    position: absolute 0;
    size: 100%;
    z-index: 9999;
  }
}

.social-icon-wrap {
  size: 24px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: $text-color-whity;
  font-family: var(--sans-serif-jp);
}

.details-list-wrap {
  grid-area: details;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  align-self: center;
}

.detail {
  width: 100%;
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 6px;
  }
}

.detail-icon-wrap {
  color: $accent-color;
  size: 20px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
}

.detail-text-wrap {
  p {
    font-size: 0.95rem;
    line-height: 1em;
    font-family: var(--sans-serif-ja);
    color: $text-color-whity;
  }
}
</style>
