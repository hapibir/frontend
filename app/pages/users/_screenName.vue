<template>
  <div class="container">
    <div class="card-wrap">
      <UserCard :user="user" />
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

import { Context } from '@nuxt/types'
import gql from 'graphql-tag'

import UserCard from '~/components/UserCard/UserCard.vue'

export default createComponent({
  layout: 'app',
  components: { UserCard },
  async asyncData({ app, params }: Context) {
    const {
      data: {
        user: {
          screenName,
          name,
          icon,
          twitterId,
          twitterScreenName,
          birthday: { formatted, age, remind },
          friends,
          friendsBy
        }
      }
    } = await app.apolloProvider.clients.defaultClient.query({
      query: gql`
        query($screenName: String!) {
          user(where: { screenName: $screenName }) {
            id
            email
            screenName
            name
            icon
            twitterId
            twitterScreenName
            birthday {
              formatted
              age
              remind
            }
            friends {
              screenName
            }
            friendsBy {
              screenName
            }
          }
        }
      `,
      variables: {
        screenName: params.screenName
      }
    })
    return {
      user: {
        screenName,
        name,
        icon,
        twitter:
          twitterId && twitterScreenName
            ? { id: twitterId, screenName: twitterScreenName }
            : false,
        friends,
        friendsBy,
        birthday: formatted,
        age,
        remind
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.card-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
