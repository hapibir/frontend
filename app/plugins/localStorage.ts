import { Plugin } from '@nuxt/types'

import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

const plugin: Plugin = ({ store, req }) => {
  createPersistedState({
    key: 'hapibir',
    storage: {
      getItem: key =>
        process.client
          ? Cookies.getJSON(key)
          : cookie.parse(req.headers.cookie || '')[key],
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 365, secure: true }),
      removeItem: key => Cookies.remove(key)
    }
  })(store)
}

export default plugin
