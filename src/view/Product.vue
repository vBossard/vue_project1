<template>
  <div>
      <h1>Produit</h1>
     
  </div>
</template>

<script>
import apiService from '../api/api-service';
export default {
    
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  mounted () {
     this.products = apiService.getProducts(to.path);
    console.log(this.products)   

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
