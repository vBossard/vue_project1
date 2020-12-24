import Service from '@/api/api-service'

export default {

  /**
   * Get users from API
   * @param {*} context 
   */
  async getUsers (context) {
    try{
      Service.get('',{results : 150}, (response) => {
        console.log(response.results)
        context.commit('USERS_UPDATED', response.results.filter(user => user.id.value));
      })
    }catch(e){
      console.error(e)
    }
  },

  async updateUser(context, user){
    await context.commit('UPDATE_USER',user);
  }
};
