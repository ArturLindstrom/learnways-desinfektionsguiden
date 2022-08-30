import { createStore } from 'vuex'

export default createStore({
  state: {
    modalShown: false,
    modalContentShown: false,
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
    viewsCompleted: 
        {
          home: false,
          olikatyper: false,
          situationer: false,
          diplom: false,
        }
  },
  getters: {
    viewsCompleted(state){
      return Object.values(state.viewsCompleted).filter(value => value === true).length == 3
    },

    


  },
  mutations: {
    modalClose(state) {
    
      state.modalShown = false;
      
      if(state.situationsCompleted.length === 2){
        state.viewsCompleted.situationer = true
      }
      document.body.style.overflow = 'auto';
    },
    modalOpen(state, content) {
      state.modalShown = true;
      state.modalContent = content;
      document.body.style.overflow = 'hidden';
      if(content.thumbnail){
        state.roomsVisited[content.thumbnail.roomNumber-1] = true;

        if(state.roomsVisited.filter(Boolean).length === 5){
          state.viewsCompleted.olikatyper = true
        }
      }
    },
    modalContentClose(state) {
      state.modalContentShown = false;
    },
    modalContentOpen(state) {
      state.modalContentShown = true;
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
