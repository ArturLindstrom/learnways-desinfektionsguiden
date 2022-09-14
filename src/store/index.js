import { createStore } from 'vuex'

import data from '@/assets/json/sv.json'
export default createStore({
  state: {
    data: data,
    modalShown: false,
    isDragging: false,
    modalContentShown: false,
    modalContent: {},
    done : false,
    roomsVisited: 
      {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
      },
    situationsCompleted: [],
    viewsCompleted: 
      {
        home: false,
        olikatyper: false,
        situationer: false,
        diplom: false,
      },
    currentBackground: "",
  },
  getters: {
    viewsCompleted(state){
      return Object.values(state.viewsCompleted).filter(value => value === true).length == 3
    },

    // makeArray getter is used to make an array from the data (which is the json filed provided by learnways) file with a specified key name (query) as a parameter/payload
    makeArray: (state) => (query) => {
      const array = Object.entries(state.data).map(([key, value]) => {
        return { key, value }
      })
      const filteredArray = array.filter(item => {
        return item.key.includes(query)
      })
      return filteredArray
 
    } ,
    
  },
 
  mutations: {
    //checks if data from sv.json contains markup and removes it
    removeMarkup(state){
      Object.keys(state.data).forEach(key => {
        state.data[key] = state.data[key].replace(/<[^>]*>?/gm, '')
      })
    },
    modalClose(state) {
      state.modalShown = false;
      // when modal is closed, check if all situations are completed and set the viewsCompleted.situationer to true
      if(state.situationsCompleted.length === 9){
        state.viewsCompleted.situationer = true
      }
      // enables scrolling when modal is closed
      document.body.style.overflow = 'auto';
    },
    modalOpen(state, content) {
      state.modalShown = true;
      state.modalContent = content;
      //removes scrollbar on background when modal is open
      document.body.style.overflow = 'hidden';
      // check if modal contains a room, and sets the corresponding room in roomsVisited to true
      if(content.thumbnail){
        state.roomsVisited[content.thumbnail.roomNumber-1] = true;
      // if every room has been visited, set the viewsCompleted.olikatyper to true
        if(Object.values(state.roomsVisited).every(Boolean)){
          state.viewsCompleted.olikatyper = true
        }
      }
    },
    // modalContentShown is its own variable to enable smooth transitions 
    modalContentClose(state) {
      state.modalContentShown = false;
    },
    modalContentOpen(state) {
      state.modalContentShown = true;
    },
    toggleDone(state) {
      state.done = !state.done;
    },
    addCompletedSituation(state, situation) {
      if(!state.situationsCompleted.includes(situation)){
        state.situationsCompleted.push(situation);
      }
    },
    completedRoute(state, route) {
      state.viewsCompleted[route] = true;
    },

    setDragging(state, dragging) {
      state.isDragging = dragging;
    },
    addRoute(state, route) {
      if(route === 'home'){
        state.currentBackground = "url('/assets/bg-1.svg')"
      } else if (route === 'olikatyper'){
        state.currentBackground = "url('/assets/bg-2.svg')"
      } else if (route === 'situationer'){
        state.currentBackground = "url('/assets/bg-3.svg')"
      } else if (route === 'diplom'){
        state.currentBackground = "url('/assets/bg-4.svg')"
      }
    }

    
    
  },
  actions: {
  },
  modules: {
  }
})
