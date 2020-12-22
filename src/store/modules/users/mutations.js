




export default {
  USERS_UPDATED (state, users = [
    { id : 13, firstName : "Alphonse", lastName: "Dupont" },
    { id : 1, firstName : "Pierre", lastName: "Damien" },
    { id : 2, firstName : "Emile", lastName: "Mac Douglas" },
    { id : 3, firstName : "Kim", lastName: "Charlos" },
    { id : 4, firstName : "Marie Anne", lastName: "Johnn" },
    { id : 5, firstName : "Bouli", lastName: "Boulga" },
    { id : 6, firstName : "Al", lastName: "Mac Monique" },
    { id : 7, firstName : "Pierre", lastName: "Kiroule" },
    { id : 8, firstName : "Armand", lastName: "Tori" }
  ]) {
    state.users = users;
  },
}