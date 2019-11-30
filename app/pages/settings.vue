<i18n locale="en" lang="yaml">
  icon_update: "Update icon"
</i18n>

<i18n locale="ja" lang="yml">
  icon_update: "アイコンを更新"
</i18n>

<template>
  <div>
    <section>
      <input type="file" accept=".png,.jpg" @change="iconPathUpdate" />
      <button @click="iconUpdate">{{ $t('icon_update') }}</button>
    </section>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import mime from 'mime'
import normalizeUrl from 'normalize-url'
import gql from 'graphql-tag'

import firebase from '~/plugins/firebase'

export default createComponent({
  layout: 'app',
  middleware: 'authenticated',
  components: {},
  setup(_props, context) {
    let iconFile: File | null = null
    return {
      iconPathUpdate(event: any) {
        iconFile = event.target.files[0] as File
      },
      async iconUpdate() {
        if (!iconFile) {
          return
        }
        const iconRef = firebase
          .storage()
          .ref(
            `icons/${
              context.root.$accessor.account.screenName
            }.${mime.getExtension(iconFile.type)}`
          )
        try {
          const snapshot = await iconRef.put(iconFile)
          const iconUrl = normalizeUrl(await snapshot.ref.getDownloadURL(), {
            removeQueryParameters: ['token']
          })
          await context.root.$apolloProvider.defaultClient.mutate({
            mutation: gql`
              mutation($id: String!, $icon: String!) {
                iconUpdate(id: $id, icon: $icon) {
                  id
                  icon
                }
              }
            `,
            variables: {
              id: context.root.$accessor.account.id,
              icon: iconUrl
            }
          })
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
})
</script>
