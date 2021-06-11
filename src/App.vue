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
        <Topheader class="mr-7" />

      </div>
     
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-col cols="auto">
      <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    </v-col>
  
  </v-app>
</template>

<script>
import Topheader from './components/Top-header'
import {mapMutations, mapState} from 'vuex'
export default {
  components: {
      Topheader,
  },
  name: 'App',
  data: () => ({
  }),
  computed:{
    ...mapState(['dialog'])
  },
  methods: {
    ...mapMutations(['closeDIalog', 'openDialog'])
  },
  mounted(){
    
  }
};
</script>
