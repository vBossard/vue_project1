<template>
  <div>
    <v-container class="grey lighten-4 mb-6">
      <v-banner single-line>
        <h2>Profil de {{ userDetail.login.username }}</h2>
        <template v-slot:actions>
        <v-btn
          text
          color="red darken-1 accent-4"
        >
          Supprimer le compte
        </v-btn>
      </template>
      </v-banner>
      <v-container>
        <v-row>
          <v-col>
            <v-stepper v-model="formStep" vertical>
              <!-- Stepper 1-->
              <v-stepper-step step="1" v-bind:complete="formStep > 1">
                Infos Utilisateur
              </v-stepper-step>
              <v-stepper-content step="1">
                <form>
                  <v-flex xs12>
                    <v-text-field
                      v-model="form.name.last"
                      name="lastname"
                      id="lastname"
                      label="Nom"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="form.name.first"
                      name="firstname"
                      id="firstname"
                      label="Prénom"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12> </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      type="email"
                      v-model="form.email"
                      name="email"
                      id="email"
                      label="Email"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="form.location.city"
                      name="city"
                      id="city"
                      label="Ville"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="form.location.country"
                      name="country"
                      id="country"
                      label="Pays"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-btn color="primary" @click.native="formStep = 2"
                    >Continue</v-btn
                  >
                </form>
              </v-stepper-content>
              <!-- Stepper 2 -->
              <v-stepper-step step="2" v-bind:complete="formStep > 2"
                >Votre compte</v-stepper-step
              >
              <v-stepper-content step="2">
                <form @keydown.enter.prevent="validate">
                  <v-flex xs12>
                    <v-text-field
                      v-model="form.login.username"
                      name="username"
                      id="username"
                      label="Username"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      type="password"
                      v-model="form.login.password"
                      name="password"
                      id="password"
                      label="Mot de passe"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-btn @click.native="formStep = 1">Back</v-btn>
                  <v-btn color="primary" @click.native="formStep = 3"
                    >Continue</v-btn
                  >
                </form>
              </v-stepper-content>
              <v-stepper-step step="3">Validation</v-stepper-step>
              <v-stepper-content step="3">
                <v-flex xs12> </v-flex>
                <v-btn @click.native="formStep = 2">Back</v-btn>
                <v-btn color="primary" @click="submit">Valider</v-btn>
              </v-stepper-content>
            </v-stepper>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import apiService from "@/api/api-service";
import { mapGetters } from "vuex";
import store from "@/store/modules/users";
import _ from 'lodash';
export default {
  name: "Detail",
  data() {
    return {
      form: null,
      formStep: 1,
      valid: true,
    };
  },
  computed: {
    userDetail() {
      return this.$store.getters["users/getUserById"](this.$route.params.id);
    },
  },
  created() {
    // Clone the data from Vuex to avoid mutation on state
    console.log(this.$route.params.id);
    // L'id de l'utilisateur
    if (this.$route.params.id) {
      let user = this.$store.getters["users/getUserById"](
        this.$route.params.id
      );
      // /!\ Using lodash to deep clone the Object.
      this.form = _.cloneDeep(user);
      // this.form = {
      //   ...user,
      // };
      console.log(this.form);
    }
  },

  methods: {
    submit() {
      console.log("Validation", this.form.name.last);
      // Ici appeler l'action pour muter le state
      this.$store.dispatch("users/updateUser", this.form).then((result) => {
        console.log("Donnée mis à jour !!!!");
        this.$router.push({ path: "/users" });
      });
      this.$nextTick(() => this.reset());
    },
    reset() {
      // Reset all value
      this.booking = 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
