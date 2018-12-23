import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'
import VeeValidate, { Validator } from 'vee-validate'
import fr from 'vee-validate/dist/locale/fr'
import CommentForm from './components/CommentForm'
import VueLazyload from 'vue-lazyload'

Vue.use(TurbolinksAdapter)
Vue.use(VueLazyload, {
  observer: true
})

Validator.localize('fr', fr)
Vue.use(VeeValidate)

/* eslint-disable no-new */
document.addEventListener('turbolinks:load', () => {
  if (document.querySelector('#app')) {
    new Vue({
      el: '#app',
      components: {
        CommentForm
      }
    })
  }
})
