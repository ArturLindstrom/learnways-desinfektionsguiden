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
          meta: {title: 'Start'}
        },
        {
          path: '/olika-typer',
          name: 'olikatyper',
          fullName: 'Olika typer',
          component: OlikaTyperView,
          meta: {title: 'Olika typer'}
        },
        {
          path: '/situationer',
          name: 'situationer',
          fullName: 'Situationer',
          component: SituationerView,
          meta: {title: 'Situationer'}
        },
        {
          path: '/diplom',
          name: 'diplom',
          fullName: 'Diplom',
          component: DiplomView,
          meta: {title: 'Diplom'},
          beforeEnter: areViewsCompleted
        }
    
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title + ' | Desinfektionsguiden';
});


export default router
