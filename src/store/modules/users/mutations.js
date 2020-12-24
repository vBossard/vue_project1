
export default {
  USERS_UPDATED (state, users) {
    //state.users = users;
    if(state.users.length === 0){
      state.users = users;
    }
  },

  // A faire
  UPDATE_USER(state,user) {
    const updatedState = state.users.map(u => u.id.value === user.id.value ? {...user} : u)
    state.users = updatedState;
  }

}