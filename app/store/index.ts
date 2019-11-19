import { getAccessorType, mutationTree, getterTree } from 'nuxt-typed-vuex'

export const state = () => ({
  isLogin: false,
  email: '',
  uid: ''
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {
  login(state, { email, uid }) {
    state.email = email
    state.uid = uid
  },
  logout(state) {
    state.email = ''
    state.uid = ''
  }
})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations
})
