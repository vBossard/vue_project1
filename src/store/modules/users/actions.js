import apiService from "@/api/api-service";

export default {
  /**
   * Get users from API
   * @param {*} context 
   */
  getUsers (context) {
      apiService.get('users?_quantity=10').then((response, error) => {
        context.commit('USERS_UPDATED', response.data.data);
      })

  }
};
