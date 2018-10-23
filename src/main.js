import Vue from 'vue'
import App from './App.vue'
import './firebase'
import VueFire from 'vuefire'
import {store} from './store/store'

Vue.use(VueFire);

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
