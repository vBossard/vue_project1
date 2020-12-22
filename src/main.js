// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import vuetify from '@/plugins/vuetify';
import axios from 'axios'
import 'es6-promise/auto'
import store from './store'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
