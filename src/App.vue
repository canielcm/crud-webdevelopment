<template>
  <v-app>
    
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div  class=" d-flex align-center">
        <router-link to="/login"><h3 class="white--text"> login |</h3></router-link>
        <router-link to="/register"><h3 class="white--text">| register |</h3></router-link>
        <router-link to="/sesion"><h3 class="white--text">| sesion </h3></router-link>
        <Topheader/>
      </div>
     
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    
  </v-app>
</template>

<script>
import Topheader from './components/Top-header'
export default {
  components: {
      Topheader,
  },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
