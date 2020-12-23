// // const usersList = state => state.users;
// const getUsersList = (state) => 
// state.users;

// const getUserById = ({state,id}) => {
//   console.log(state)
//   state.users.filter(u => u.uuid === id);
// }

// export default {
//   getUsersList,
//   getUserById
// };

export default  {
//   // getUsersList(state) {
//   //   return state.users;
//   // },

   getUsersList : (state) => state.users,



   getUserById : (state) => (id) => {
      return state.users.find(u => u.uuid === id)
   }
   

}
