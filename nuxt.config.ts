import { Configuration } from '@nuxt/types'
import dotenv from 'dotenv'

dotenv.config()

const NuxtConfig: Configuration = {
  mode: 'universal',
  srcDir: 'app/',
  plugins: ['~/plugins/compositionApi.ts', '~/plugins/firebase.ts'],
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY!,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN!,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL!,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID!,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET!,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID!,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID!
  },
  buildModules: ['@nuxt/typescript-build', 'nuxt-typed-vuex'],
  modules: ['@nuxtjs/style-resources'],
  css: ['minireset.css'],
  styleResources: {
    scss: ['mathsass', '~/assets/const.scss']
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.HAPIBIR_API_ENDPOINT!
      }
    }
  },
  build: {
    cache: true,
    transpile: [/nuxt-typed-vuex/],
    postcss: {
      plugins: {
        'postcss-short': {}
      }
    }
  }
}

export default NuxtConfig
