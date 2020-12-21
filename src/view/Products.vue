<template>
  <div>
    <h1>Produit</h1>
   
    <v-card v-for="product in products" :key="product.ean" elevation="2" class="mx-auto my-12"
    max-width="374">
       <v-img
       height="125"
      :src="product.image"
    ></v-img>
    <v-card-title>{{product.name}}</v-card-title>

    </v-card>
  </div>
</template>

<script>
import apiService from "@/api/api-service";
export default {
  name: "Products",
  data() {
    return {
      products: null,
    };
  },
  // mounted(){
  //   //console.log(apiService.getProducts('/products'));
  //   apiService.getProducts('/products').then((res) => {
  //     console.log(res.data);
  //   })
  // },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    apiService.get(to.path).then((res) => {
      next((vm) => vm.setData(res.data.data));
    });
  },
  // beforeRouteUpdate (to, from, next) {
  //   apiService.getProducts(to.path, (err, post) => {

  //     this.setData(err, post)
  //     next()
  //   })
  // },
  methods: {
    setData(products) {
      
        this.products = products;
        console.log("Les produits : ",this.products);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
