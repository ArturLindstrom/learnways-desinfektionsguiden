import { createStore } from 'vuex'
import content from '@/assets/json/sv.json'

export default createStore({
  state: {
    modalShown: false,
    modalContent: {},
  },
  getters: {
  },
  mutations: {
    modalClose(state) {
      state.modalShown = false;
    },
    modalOpen(state, content) {
      state.modalShown = true;
      state.modalContent = content;
    }
      
  },
  actions: {
  },
  modules: {
  }
})
