
export default {
  USERS_UPDATED (state, users) {
    if(state.users.length === 0){
      state.users = users;
    }
  },
}