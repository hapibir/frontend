import { getAccessorType, mutationTree, getterTree } from 'nuxt-typed-vuex'

export const state = () => ({
  isLogin: false,
  isRegister: false,
  email: '',
  account: '',
  username: '',
  providerId: '',
  icon: ''
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {
  login(state, { email, account }: { email: string; account: string }) {
    state.email = email
    state.account = account
    state.isLogin = true
  },
  logout(state) {
    state.email = ''
    state.account = ''
    state.isLogin = false
  },
  preRegister(
    state,
    {
      email,
      account,
      username,
      providerId,
      icon
    }: {
      email: string
      account: string
      username: string
      providerId: string
      icon: string
    }
  ) {
    state.email = email
    state.account = account
    state.username = username
    state.providerId = providerId
    state.icon = icon
    state.isRegister = true
  }
})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations
})
