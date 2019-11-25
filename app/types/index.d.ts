import { accessorType } from '~/store'

type ApolloProvider = {
  defaultClient: any
  clients: { defaultClient: any }
}

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
    $apolloProvider: ApolloProvider
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
    apolloProvider: ApolloProvider
  }
}
