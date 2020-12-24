<template>
  <v-container class="grey lighten-4">
    <v-subheader><h1>Utilisateurs</h1></v-subheader>
    <v-container>
      <v-row>
        <v-col
          v-for="user in users"
          :key="user.uuid"
          class="d-flex justify-center mb-12"
        >
          <v-card
            elevation="2"
            min-width="374"
            :to="{ name: 'detail', params: { id: user.id.value } }"
          >
            <v-card-title>
              <v-avatar style="margin-right:20px">
                <img
                  :src="user.picture.thumbnail"
                  alt="John"
                />
              </v-avatar>
              {{ user.name.first }} {{ user.name.last }}
            </v-card-title>
            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text> Voir </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import apiService from "@/api/api-service";
import { mapGetters } from "vuex";
import store from "@/store/modules/users";
export default {
  name: "Social",
  data() {
    return {
      page: 1,
    };
  },

  computed: {
    ...mapGetters({
      users: "users/getUsersList",
    }),
  },
  // mounted() {
  //   //console.log(this.$router)
  //   this.$store.dispatch('users/getUsers');
  // },

  // Calling the update action before route enter
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch("users/getUsers");
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
