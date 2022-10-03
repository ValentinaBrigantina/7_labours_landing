import Vue from 'vue'
import VueI18n from 'vue-i18n'
import heroHome from './heroHome'
import aboutHome from './aboutHome'
import servicesHome from './servicesHome'
import worksHome from './workHome'
import getStartedHome from './getStartedHome'
import testimonialHome from './testimonialHome'
import sponserHome from './sponserHome'
import footerHome from './footerHome'

Vue.use(VueI18n)

const locale = 'en-US'


export default new VueI18n({
  locale,
  messages: {
    'en-US': {
      message: {
        ...heroHome.en,
        ...aboutHome.en,
        ...servicesHome.en,
        ...worksHome.en,
        ...getStartedHome.en,
        ...testimonialHome.en,
        ...sponserHome.en,
        ...footerHome.en,
      }
    },
    "ru-РУС": {
      message: {
        ...heroHome.ru,
        ...aboutHome.ru,
        ...servicesHome.ru,
        ...worksHome.ru,
        ...getStartedHome.ru,
        ...testimonialHome.ru,
        ...sponserHome.ru,
        ...footerHome.ru,
      }
    }
  }
})