import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OlikaTyperView from '../views/OlikaTyperView.vue'
import SituationerView from '../views/SituationerView.vue' 
import DiplomView from '../views/DiplomView.vue'
import store from '../store/index.js'

const areViewsCompleted = () => {
  if(store.state.viewsCompleted.home && store.state.viewsCompleted.olikatyper && store.state.viewsCompleted.situationer) {
    store.commit('completedRoute', 'diplom')
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
        }
    
  ]
})

export default router
