import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OlikaTyperView from '../views/OlikaTyperView.vue'
import SituationerView from '../views/SituationerView.vue' 
import DiplomView from '../views/DiplomView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/olika-typer',
          name: 'olika-typer',
          component: OlikaTyperView
        },
        {
          path: '/situationer',
          name: 'situationer',
          component: SituationerView
        },
        {
          path: '/diplom',
          name: 'diplom',
          component: DiplomView
        }
    
  ]
})

export default router
