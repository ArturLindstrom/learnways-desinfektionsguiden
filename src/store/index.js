import { createStore } from 'vuex'

import data from '@/assets/json/sv.json'
export default createStore({
  state: {
    data: data,
    modalShown: false,
    modalContentShown: false,
    // modalContent: {},
    modalContent: {
      "heading": "Du är på väg in till en patient för att utföra ett vårdmoment.",
      "id": 1,
      "end": "Du är klar med situationen. Stäng och gå vidare till nästa.",
        "questions":
          [
            {
              "question": "När ska du desinfektera händerna?",
              "id": 1,
              "answered": false,
              "description": "",
              "alternatives": 
                [
                  {
                    "alternative": "Du behöver inte desinfektera händerna eftersom du tänker använda handskar",
                    "feedback": "Tyvärr inte rätt. Handdesinfektion ska ske direkt före och efter varje vård- och omsorgsmoment, samt före och efter handskanvändning och efter handtvätt.",
                    "correct": false
                  },
                  {
                    "alternative": "Det räcker att desinfektera händerna efter att du har utfört vårdmomentet hos patienten",
                    "feedback": "Tyvärr inte rätt. Handdesinfektion ska ske direkt före och efter varje vård- och omsorgsmoment, samt före och efter handskanvändning och efter handtvätt.",
                    "correct": false
                  },
                  {
                    "alternative": "Direkt före det vårdnära arbetsmomentet",
                    "feedback": "Rätt svar! Handdesinfektion ska ske före och efter varje vård- och omsorgsmoment, samt före och efter handskanvändning och efter handtvätt.",
                    "correct": true
                  }
                ]
            },
            {
              "question": "Vad tror du är den främsta orsaken till att handdesinfektionen inte får full effekt?",
              "id": 2,
              "answered": false,
              "description": "Du desinfekterar nu händerna precis före ditt vårdnära arbetsmoment.",
              "alternatives": 
                [
                  {
                    "alternative": "Att man tar för lite desinfektionsmedel",
                    "feedback": "Rätt svar! Alla dessa alternativ kan göra att handdesinfektionen inte får full effekt, och är lika viktiga för att inte överföra smittämnen till patienten.",
                    "correct": true
                  },
                  {
                    "alternative": "Att det inte fördelas överallt på händerna",
                    "feedback": "Rätt svar! Alla dessa alternativ kan göra att handdesinfektionen inte får full effekt, och är lika viktiga för att inte överföra smittämnen till patienten.",
                    "correct": true
                  },
                  {
                    "alternative": "Missar att gnida tills det dunstat och huden känns torr",
                    "feedback": "Rätt svar! Alla dessa alternativ kan göra att handdesinfektionen inte får full effekt, och är lika viktiga för att inte överföra smittämnen till patienten.",
                    "correct": true
                  }
                ]
            },
          ]
      },
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
    makeArray: (state) => (query) => {
      const array2 = Object.entries(state.data).map(([key, value]) => {
        return { key, value }
      })
      const filteredArray2 = array2.filter(item => {
        return item.key.includes(query)
      })
      return filteredArray2
      // return Object.values(state.data)
      // return Object.fromEntries(Object.entries(state.data).filter((([key]) => key.startsWith(query))))
      // return Object.keys(state.data).map(key => state.data[key]).filter(key => key[key].startsWith(query));
    } ,
    
  },
 
  mutations: {
    removeMarkup(state){
      Object.keys(state.data).forEach(key => {
        state.data[key] = state.data[key].replace(/<[^>]*>?/gm, '')
      })
    },

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
