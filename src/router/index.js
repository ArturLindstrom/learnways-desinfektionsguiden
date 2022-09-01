import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OlikaTyperView from '../views/OlikaTyperView.vue'
import SituationerView from '../views/SituationerView.vue' 
import DiplomView from '../views/DiplomView.vue'
import TestView from '../views/TestView.vue'
import SituationContent2 from '../components/situations/SituationContent2.vue'
import store from '../store/index.js'

const areViewsCompleted = () => {
  if(store.getters.viewsCompleted) {
    store.commit('completedRoute', 'diplom')
    store.commit('toggleDone')
  }
  return true
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
          path: '/',
          name: 'home',
          fullName: 'Start',
          component: HomeView,
        },
        {
          path: '/olika-typer',
          name: 'olikatyper',
          fullName: 'Olika typer',
          component: OlikaTyperView
        },
        {
          path: '/situationer',
          name: 'situationer',
          fullName: 'Situationer',
          component: SituationerView
        },
        {
          path: '/diplom',
          name: 'diplom',
          fullName: 'Diplom',
          component: DiplomView,
          beforeEnter: areViewsCompleted
        },
        {
          path: '/test',
          name: 'test',
          fullName: 'Test',
          component: TestView
        },
        {
          path: '/situations2',
          name: 'situations2',
          fullName: 'Situations2',
          component: SituationContent2
        }
    
  ]
})

export default router
