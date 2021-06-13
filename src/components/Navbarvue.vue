<template >
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/login" class="mr-5">
          <h3 class="white--text">login <v-icon>login</v-icon></h3>
        </router-link>
        <router-link to="/register"
          ><h3 class="white--text mr-5">register <v-icon>how_to_reg</v-icon></h3></router-link
        >
        <router-link to="/sesion"
          ><h3 class="white--text mr-5">session <v-icon>account_circle</v-icon> </h3></router-link
        >
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Navbarvue",
};
</script>