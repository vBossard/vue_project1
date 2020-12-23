<template>
  <div>
    <h1>Social</h1>
    <v-row><v-card
      v-for="user in users"
      :key="user.uuid"
      elevation="2"
      class="mx-auto my-12"
      max-width="374"
    >
      <v-img height="125" :src="user.image"></v-img>
      <v-card-title>{{ user.firstname }} {{ user.lastname }} </v-card-title>
    </v-card></v-row>
    
  </div>
</template>

<script>
import apiService from "@/api/api-service";
import { mapGetters } from 'vuex';
export default {
  name: "Social",
  data() {
    return {
      
    };
  },

  computed : {
    ...mapGetters({
      users : 'users/users'
    })
  },
  mounted() {
    this.$store.dispatch('users/getUsers');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
