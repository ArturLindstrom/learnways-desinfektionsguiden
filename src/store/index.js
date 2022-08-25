import { createStore } from 'vuex'
import content from '@/assets/json/sv.json'

export default createStore({
  state: {
    modalShown: false,
    modalContent: {},
    done : false,
    checkList: [
      
         false,
         false,
         false,
         false,
         false,
      
    ],
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
      state.checkList[content.thumbnail.roomNumber-1] = true;
    },
    toggleDone(state) {
      state.done = !state.done;
    }
      
  },
  actions: {
  },
  modules: {
  }
})
