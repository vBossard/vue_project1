
export default {
  USERS_UPDATED (state, users) {
    //state.users = users;
    if(state.users.length === 0){
      console.log("Mise à jour des uses")
      state.users = users;
    }
  },
}