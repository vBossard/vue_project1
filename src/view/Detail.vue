<template>
  <div>
    <v-banner
      single-line
    >
      <h2>Profil de l'utilisateur {{userDetail.firstname}}</h2>

      <template v-slot:actions>
      </template>
    </v-banner>

    <v-card elevation="0" style="margin-top:50px;" class="d-flex justify-space-around mb-6">
          <v-card class="d-flex align-center mb-6" width="500">
            <v-img src="https://picsum.photos/600">
            </v-img>
          </v-card>
          
            <v-stepper v-model="booking" vertical>
              <!-- Stepper 2 -->
              <v-stepper-step step="1" v-bind:complete="booking > 1">
                Infos Utilisateur
              </v-stepper-step>
              <v-stepper-content step="1">
                <form>
                  <v-flex xs12>
                    <v-text-field
                      v-model="form.lastname"
                      name="lastname"
                      id="lastname"
                      label="Nom"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      v-model="form.firstname"
                      name="code"
                      id="code"
                      label="Prénom"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-btn color="primary" @click.native="booking = 2"
                    >Continue</v-btn
                  >
                </form>
              </v-stepper-content>
              <!-- Stepper 2 -->
              <v-stepper-step step="2" v-bind:complete="booking > 2"
                >Votre compte</v-stepper-step
              >
              <v-stepper-content step="2">
                <form @keydown.enter.prevent="validate">
                  <v-flex xs12>
                    <v-text-field
                      v-model="form.username"
                      name="code"
                      id="code"
                      label="Username"
                      :counter="12"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                      type="password"
                      v-model="form.password"
                      name="code"
                      id="code"
                      label="Mot de passe"
                      :counter="12"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-btn @click.native="booking = 1">Back</v-btn>
                  <v-btn
                    color="primary"
                    @click.native="booking = 3"
                    >Continue</v-btn
                  >
                </form>
              </v-stepper-content>
              <v-stepper-step step="3">Validation</v-stepper-step>
              <v-stepper-content step="3">
                <v-flex xs12>
                </v-flex>
                <v-btn @click.native="booking = 2">Back</v-btn>
                <v-btn color="primary" @click="submit"
                  >Valider</v-btn
                >
              </v-stepper-content>
            </v-stepper>
    </v-card>
  </div>
</template>

<script>
import apiService from "@/api/api-service";
import { mapGetters } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      form:null,
      booking: 1,
      valid: true,
      code: "",
      date: null,
      time: null,
      experience: null,
      experiences: [
        {
          id: 1,
          name: "Example A",
        },
        {
          id: 2,
          name: "Example B",
        },
      ],
    };
  },
  computed: {
    userDetail () {
        return this.$store.getters["users/getUserById"](this.$route.params.id);
    },
  },
  mounted() {
    this.form = Object.assign({},this.userDetail)
    console.log(this.form)
  },

  methods: {
    submit() {
      console.log("Validation", this.form)
      // Ici appeler l'action pour muter le state
      this.$nextTick(() => this.reset());
    },
    reset() {
      // Reset all value
      this.code = "";
      this.date = null;
      this.time = null;
      this.experience = "";
      this.experiences = [];

      // Reset error message
      this.$validator.reset();
      this.booking = 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
