// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import config from '@/config/index.js'
import store from './store'
import './assets/css/style.css'
import './assets/css/app.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMeta from 'vue-meta'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueAnalytics from 'vue-analytics';
import 'vue-select/dist/vue-select.css';
import VueGtag from "vue-gtag";


Vue.use(VueMeta)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: config.GMAP_API,
    libraries: 'places', 
    region: 'ID',
    language: 'id',
  },
})

Vue.use(VueAnalytics, {
    id: config.ANALITICS,
    router
})

Vue.use(VueGtag, {
  config: { id: config.ANALITICS }
})