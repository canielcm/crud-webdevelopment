<template>
  <div>
    <v-card class="mx-auto">
      <v-container>
        <v-layout>
          <v-row 	class="hidden-sm-and-down">
            <v-img  src="../resources/imghome.png"></v-img>
        </v-row>
        <v-row dense>
          <v-col cols="12">
            <router-link
              to="/login"
              style="text-decoration: none; color: inherit"
            >
              <v-card color="pink" dark>
                <v-card-title class="text-h5"> Sign in </v-card-title>

                <v-card-subtitle
                  >Do you have an account? sigh in now!</v-card-subtitle
                >

                <v-card-actions>
                  <v-btn class="ml-2 mt-5" outlined rounded text>
                    Go to login
                  </v-btn>
                </v-card-actions>
              </v-card>
            </router-link>
          </v-col>

          <v-col cols="12">
            <router-link
              to="/register"
              style="text-decoration: none; color: inherit"
            >
              <v-card color="blue" dark>
                <v-card-title class="text-h5"> Register </v-card-title>

                <v-card-subtitle
                  >Don't you have an account? what are you waiting
                  for?</v-card-subtitle
                >

                <v-card-actions>
                  <v-btn class="ml-2 mt-5" outlined rounded text>
                    Go to Register
                  </v-btn>
                </v-card-actions>
              </v-card>
            </router-link>
          </v-col>

          <v-col cols="12">
            <router-link
              to="/sesion"
              style="text-decoration: none; color: inherit"
            >
              <v-card color="green" dark>
                <v-card-title class="text-h5"> Task List </v-card-title>

                <v-card-subtitle
                  >If your session is active, just log in
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn class="ml-2 mt-5" outlined rounded text>
                    Go to your Task List
                  </v-btn>
                </v-card-actions>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
        </v-layout>
        <Footervue />
      </v-container>
    </v-card>
  </div>
</template>

<script>
import Footervue from "./Footervue.vue";
export default {
  components: {
    Footervue,
  },
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
};
</script>