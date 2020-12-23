import Vuex from 'vuex'
import Vue from 'vue';
import productsModule from './modules/products/index';
import usersModules from './modules/users/index';

Vue.use(Vuex);


export default new Vuex.Store({
  strict: true,
  modules: {
    products: productsModule,
    users: usersModules
  }
})