import Service from '@/api/api-service'

export default {

  /**
   * Get users from API
   * @param {*} context 
   */
  async getUsers (context) {
    try{
      Service.get('users',{_quantity : 50}, (response) => {
        context.commit('USERS_UPDATED', response.data);
      })
    }catch(e){
      console.error(e)
    }
  },
};
