<template>
  <div>
      <h1>Produit</h1>
     
  </div>
</template>

<script>
import apiService from '../api/api-service';
export default {
    
  name: 'Product',
  data () {
    return {
      msg: 'Page d\'accueil'
    }
  },
  mounted () {
      return apiService.getProducts();

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
