import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const locale = 'en-US'


export default new VueI18n({
  locale,
  messages: {
    'en-US': {
      message: {
        language: 'English',
        heroHomeTitle: 'We’re a design app',
        heroHomeText: 'Text about our application.'
      }
    },
    "ru-РУС": {
      message: {
        language: 'Русский',
        heroHomeTitle: 'Мы — дизайнерское приложение',
        heroHomeText: 'Текст о нашем приложении.'
      }
    }
  }
})