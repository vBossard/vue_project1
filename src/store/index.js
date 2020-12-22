import Vuex from 'vuex'
import Vue from 'vue';
import productsModule from './modules/products/index';
import usersModules from './modules/users/index';

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    products: productsModule,
    users: usersModules
  }
})
// Ancienne Version => 
// Vue.use(Vuex);
// export default new Vuex.Store({
//   state: {
//     count :0,
//     products : [
//       {id: 1,stock : true,name: "Iure nihil error et sequi.", description: "Aliquam natus qui sed dolorum hic. Dolorum expedit…ore. Quia eveniet velit necessitatibus harum qui.", ean: "4349666657736", upc: "292219961040", image: "http://placeimg.com/640/480/tech"},
//       {id: 2,stock : true,name: "Ut et a beatae.", description: "Reiciendis quia ipsam atque est tenetur. Occaecati…os iure iure ullam. Eum et tempora soluta maxime.", ean: "0875550368432", upc: "914437890416", image: "http://placeimg.com/640/480/tech"},
//       {id: 3,stock : false,name: "Reiciendis optio dolorem sit.", description: "Quasi reiciendis fugiat possimus sed illum. Eaque …qui dolorem sequi. Porro dolor in eos aut labore.", ean: "2028385589000", upc: "602109127723", image: "http://placeimg.com/640/480/tech"},
//     ]
//   },
//   mutations: {
//     increment (state) {
//       state.count++;
//     },

//     [CHANGE_NAME] (state, payload){
//       state.products.map(p => {
//         p.name = payload.newName;
//       })
//     }
//   },

//   actions: {
//     changeName ({commit},payload) {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           commit('CHANGE_NAME', payload);
//           resolve("Test")
//         },2000)
//       })
//     },

//     increment ({dispatch, commit}) {
//       return dispatch('changeName').then((res) => {
//         console.log(res)
//         commit('increment')
//       });
//     }
    
//   },


//   getters : {
//     stockOkProducts : state => {
//       return state.products.filter(p => p.stock);
//     },

//     getProductById: (state) => (id) => {
//       console.log('id', id)
//       return state.products.filter(p => p.id === id);
//     },

//     count : state => {
//       return state.count
//   },
  
//   }

// })