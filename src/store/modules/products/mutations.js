
export default {
  PRODUCTS_UPDATED (state, products) {
    if(state.products.length === 0){
      state.products = products;
    }
    
  },
}