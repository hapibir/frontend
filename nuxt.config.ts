import { Configuration } from '@nuxt/types'

import dotenv from 'dotenv'
dotenv.config()

const NuxtConfig: Configuration = {
  mode: 'universal',
  srcDir: 'app/',
  plugins: ['@/plugins/compositionApi.ts'],
  buildModules: ['@nuxt/typescript-build'],
  css: ['minireset.css']
}

export default NuxtConfig
