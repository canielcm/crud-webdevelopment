<template>
  <v-app>
    <Navbarvue/>
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
import Navbarvue from './components/Navbarvue.vue'
import {mapMutations, mapState} from 'vuex'
export default {
  components: {
      Topheader,
      Navbarvue,
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
