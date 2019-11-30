import { getAccessorType, mutationTree, getterTree } from 'nuxt-typed-vuex'

type State = {
  isLogin: boolean
  account: {
    id: string
    email: string
    screenName: string
    name?: string
    icon: string
    birthday: string
    twitter?: { id: string; screenName: string }
  }
}
export const state: () => State = () => ({
  isLogin: false,
  isRegister: false,
  account: {
    id: '',
    email: '',
    screenName: '',
    name: '',
    icon: '',
    birthday: ''
  }
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {
  login(
    state,
    account: {
      id: string
      email: string
      screenName: string
      name?: string
      icon: string
      birthday: string
      twitter?: { id: string; screenName: string }
    }
  ) {
    state.isLogin = true
    state.account = { ...account }
  },
  logout(state) {
    state.isLogin = false
  }
  /*
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
    state.isRegister = true
  }
  */
})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations
})
