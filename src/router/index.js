import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import HomeEight from '../views/HomeEight.vue'

Vue.use(VueI18n)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeEight',
    component: HomeEight
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
      document.getElementById('app').scrollIntoView();
  }
})

export default router
