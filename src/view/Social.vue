<template>
  <div>
    <h1>Social</h1>
    <v-row
      ><v-card
        v-for="user in users"
        :key="user.uuid"
        elevation="2"
        class="mx-auto my-12"
        max-width="374"
        :to="{name: 'detail', params : {id : user.uuid}}"
      >
        <v-icon large>mdi-account-circle</v-icon>
        <v-card-title>{{ user.firstname }} {{ user.lastname }} </v-card-title>
      </v-card></v-row
    >
  </div>
</template>

<script>
import apiService from "@/api/api-service";
import { mapGetters } from "vuex";
import store from '@/store/modules/users'
export default {
  name: "Social",
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      users : 'users/getUsersList'
    })
  },
  // mounted() {
  //   //console.log(this.$router)
  //   this.$store.dispatch('users/getUsers');
  // },

  // Calling the update action before route enter
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.dispatch('users/getUsers');
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
