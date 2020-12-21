<template>
  <div>
    <h1>Social</h1>
    <v-card
      v-for="user in users"
      :key="user.uuid"
      elevation="2"
      class="mx-auto my-12"
      max-width="374"
    >
      <v-img height="125" :src="user.image"></v-img>
      <v-card-title>{{ user.firstname }}</v-card-title>
    </v-card>
  </div>
</template>

<script>
import apiService from "@/api/api-service";
export default {
  name: "Social",
  data() {
    return {
      users: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    apiService
      .get(to.path, { params: { quantity: 5 } })
      .then((res) => {
        next((vm) => vm.setData(res.data.data));
      })
      .catch((error) => {
        console.error("L'erreur :", error);
      });
  },
  methods: {
    setData(users) {
      this.users = users;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
