import Vue from 'vue'
import VueI18n from 'vue-i18n'

import tr from './lang/tr.js'
import en from './lang/en.js'

Vue.use(VueI18n)

if (localStorage.getItem('locale') === null) {
  localStorage.setItem(
    'locale',
    (navigator.language || navigator.userLanguage).split('-')[0]
  )
}

export default new VueI18n({
  locale: localStorage.getItem('locale'),
  fallbackLocale: 'en',
  messages: {
    tr: tr,
    en: en,
  },
})
