import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeOne from '../views/HomeOne.vue'
// import HomeTwo from '../views/HomeTwo.vue'
// import HomeThree from '../views/HomeThree.vue'
// import HomeFour from '../views/HomeFour.vue'
// import HomeFive from '../views/HomeFive.vue'
// import HomeSix from '../views/HomeSix.vue'
// import HomeSeven from '../views/HomeSeven.vue'
import HomeEight from '../views/HomeEight.vue'
import News from '../views/News.vue'
import SingleNews from '../views/SingleNews.vue'
import Contact from '../views/Contact.vue'
import ServiceDetails from '../views/ServiceDetails'
import Error from '../views/Error.vue'
import AboutUs from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'HomeOne',
  //   component: HomeOne
  // },
  // {
  //   path: '/home-two',
  //   name: 'HomeTwo',
  //   component: HomeTwo
  // },
  // {
  //   path: '/home-three',
  //   name: 'HomeThree',
  //   component: HomeThree
  // },
  // {
  //   path: '/home-four',
  //   name: 'HomeFour',
  //   component: HomeFour
  // },
  // {
  //   path: '/home-five',
  //   name: 'HomeFive',
  //   component: HomeFive
  // },
  // {
  //   path: '/home-six',
  //   name: 'HomeSix',
  //   component: HomeSix
  // },
  // {
  //   path: '/home-seven',
  //   name: 'HomeSeven',
  //   component: HomeSeven
  // },
  {
    path: '/home-eight',
    name: 'HomeEight',
    component: HomeEight
  },
  {
    path: '/service-details',
    name: 'ServiceDetails',
    component: ServiceDetails
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/single-news',
    name: 'SingleNews',
    component: SingleNews
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/error',
    name: 'Error',
    component: Error
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // stop stop cache
  scrollBehavior() {
      document.getElementById('app').scrollIntoView();
  }
})

export default router
