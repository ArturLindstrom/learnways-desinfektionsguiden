import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OlikaTyperView from '../views/OlikaTyperView.vue'
import SituationerView from '../views/SituationerView.vue' 
import DiplomView from '../views/DiplomView.vue'
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
          component: HomeView,
          meta: {title: 'Start'}
        },
        {
          path: '/olika-typer',
          name: 'olikatyper',
          component: OlikaTyperView,
          meta: {title: 'Olika typer'}
        },
        {
          path: '/situationer',
          name: 'situationer',
          component: SituationerView,
          meta: {title: 'Situationer'}
        },
        {
          path: '/diplom',
          name: 'diplom',
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
