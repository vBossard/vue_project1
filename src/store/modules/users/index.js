
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  users: [],
};
/**
 * Users store
 */
export default {
  strict: true,
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};