import { createStore } from 'vuex'

const lang = localStorage.getItem('lang') || 'en'

export default createStore({
  state: {
    lang
  },
  mutations: {
    changeLang (state, value) {
      state.lang = value
    }
  }
})
