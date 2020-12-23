import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  products: [],
};

/**
 * Products store
 */
export default {
  strict: true,
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
