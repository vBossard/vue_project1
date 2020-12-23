<template>
  <div>
    <h1>Produits</h1>
    <v-row>
      <v-card
      v-for="product in products"
      :key="product.ean"
      elevation="2"
      class="mx-auto my-3"
      max-width="374"
    >
      <v-img height="125" :src="product.image"></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
    </v-card>
    </v-row>
  </div>
</template>

<script>
import apiService from "@/api/api-service";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Products",
  data() {
    return {
      //products: null,
      newName : "Hello"
    };
  },
  computed: {
    // localComputed () {
    //   return "infos";
    // },
    // Récupérer l'état
    // // rajouter cet objet dans l'objet `computed` avec l'opérateur de décomposition
    // ...mapState(['count','products'])
    // Pour les getters
    // stockOkProducts () {
    //   return this.$store.getters.getProductById(1);
    // }
    // Pour les getter avec mapGetters avec tableau
    // ...mapGetters([
    //   'stockOkProducts'
    // ])
    // pour les getters avc mapGetters avec objet nom custom
    ...mapGetters({
      products : 'products/products'
    }),
  },
  // computed : mapState([
  //   'count'
  // ]),


  mounted() {
    this.$store.dispatch('products/getProducts');
  },
  // Recupère les données avec le router OK
  // beforeRouteEnter(to, from, next) {
  //   console.log(to);
  //   apiService.get(to.path).then((res) => {
  //     next((vm) => vm.setData(res.data.data));
  //   });
  // },

  methods: {
   
    setData(products) {
      this.products = products;
      console.log("Les produits : ", this.products);
    },
    ...mapActions([
      'changeName',
    ]),
    changeTest : function () {
      //this.$store.dispatch('changeName',{newName : "Changement"})
      this.changeName({newName : "Changement"}).then((res) => {
        // console.log("La reponse:", res)
        
      })
      //this.$store.commit('CHANGE_NAME',{newName : "Changement"});
    },
  },
   
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
