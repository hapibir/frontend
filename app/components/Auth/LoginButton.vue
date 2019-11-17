<template>
  <div class="button" :class="provider" @click="login">
    <div class="button-move">
      <div class="icon-wrapper">
        <FontAwesomeIcon class="icon" :icon="icon" fa-fw />
      </div>
      <p class="text">
        Sign in with <strong>{{ displayName }}</strong>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import firebase, { providers } from '~/firebase'

type Props = { provider: 'twitter' | 'github' }

export default createComponent({
  components: { FontAwesomeIcon },
  props: {
    provider: {
      type: String,
      required: true,
      validator(value) {
        return ['twitter', 'github'].includes(value)
      }
    }
  },
  setup(props: Props) {
    const { icon, displayName, ProviderFactory } = {
      twitter: {
        icon: faTwitter,
        displayName: 'Twitter',
        ProviderFactory: providers.twitter
      },
      github: {
        icon: faGithub,
        displayName: 'GitHub',
        ProviderFactory: providers.github
      }
    }[props.provider]
    return {
      login: () => {
        firebase.auth().signInWithRedirect(new ProviderFactory())
      },
      displayName,
      icon
    }
  }
})
</script>

<style lang="scss" scoped>
.button {
  width: 240px;

  cursor: pointer;

  @each $name,
    $color
      in (
        twitter: map-get($social-colors, 'twitter'),
        github: map-get($social-colors, 'github')
      )
  {
    &.#{$name} {
      .button-move {
        background-color: saturate(lighten($color, 8%), 15%);
      }
      .icon-wrapper {
        background-color: $color;
      }
    }
  }
  &:hover {
    .button-move {
      transform: translateX(4px) translateY(4px);
    }
  }
}

.button-move {
  display: flex;
  align-items: center;
  box-shadow: 0 0 36px $shadow-color;
  transition: 0.05s transform ease;
}

.icon-wrapper {
  size: 46px;
  font-size: 18px;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.text {
  font-size: 1rem;
  font-family: var(--sans-serif);
  line-height: 1em;
  color: white;
  strong {
    font-weight: 500;
  }
}
</style>
