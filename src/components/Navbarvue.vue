<template >
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link
          to="/login"
          class="mr-5"
          v-if="currentRouteName != 'Sesion'"
        >
          <h3 class="white--text">login <v-icon>login</v-icon></h3>
        </router-link>
        <router-link to="/register" v-if="currentRouteName != 'Sesion'"
          ><h3 class="white--text mr-5">
            register <v-icon>how_to_reg</v-icon>
          </h3></router-link
        >
        <router-link to="/sesion"
          ><h3 class="white--text mr-5">
            session <v-icon>account_circle</v-icon>
          </h3></router-link
        >
        <v-btn
          
          color="pink"
          @click="
            () => {
              signOut();
            }
          "
          v-if="currentRouteName == 'Sesion'"
        >
          Sign Out
        </v-btn>
        <v-label></v-label>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Navbarvue",
  data() {
    return {
      currentUser: null,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    async signOut() {
      try {
        const val = await firebase.auth().signOut();
        console.log(val);
        this.$router.replace({ name: "Home" });
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>