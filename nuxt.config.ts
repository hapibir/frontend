import { Configuration } from '@nuxt/types'
import dotenv from 'dotenv'

dotenv.config()

const NuxtConfig: Configuration = {
  mode: 'universal',
  srcDir: 'app/',
  plugins: ['@/plugins/compositionApi.ts'],
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/style-resources'],
  css: ['minireset.css'],
  styleResources: {
    scss: ['mathsass', '~/assets/const.scss']
  },
  build: {
    cache: true,
    postcss: {
      plugins: {
        'postcss-short': {}
      }
    }
  }
}

export default NuxtConfig
