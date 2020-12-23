import Service from '@/api/api-service'

export default {

  /**
   * Get users from API
   * @param {*} context 
   */
  async getProducts (context) {
    try{
      Service.get('products',{_quantity : 550}, (response) => {
        
        context.commit('PRODUCTS_UPDATED', response.data);
      })
    }catch(e){
      console.error(e)
    }
  }

};
