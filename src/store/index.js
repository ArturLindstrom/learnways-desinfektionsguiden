import { createStore } from 'vuex'
import content from '@/assets/json/sv.json'

export default createStore({
  state: {
    modalShown: false,
    modalContent: {},
    done : false,
    roomsVisited: [
      
         false,
         false,
         false,
         false,
         false,
      
    ],
    situationsCompleted: [],
    // viewsCompleted: 
    //   [
    //     {
    //       home: false,
    //     },
    //     {
    //       olikaTyper: false,
    //     },
    //     {
    //       situationer: false,
    //     },
    //     {
    //       diplom: false,
    //     }
    //   ],
    viewsCompleted: 
      {
          home: false,
          olikatyper: false,
          situationer: false,
          diplom: false,
        }
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
      if(content.thumbnail){
        state.roomsVisited[content.thumbnail.roomNumber-1] = true;
      }
    },
    toggleDone(state) {
      state.done = !state.done;
    },
    addCompleted(state, situation) {
      if(!state.situationsCompleted.includes(situation)){
        state.situationsCompleted.push(situation);
      }
    },
    completedRoute(state, route) {
      state.viewsCompleted[route] = true;
    }
    
  },
  actions: {
  },
  modules: {
  }
})
