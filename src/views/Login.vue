<template>
  <div>
    
    <v-form @submit.prevent="pressed">
      <v-container>
        <h1>Login</h1>
        <v-text-field type="email" label="Login" v-model="email"> </v-text-field>
        <v-text-field type="password" label="Password" v-model="password"> </v-text-field>
        <v-btn type="submit">Login</v-btn>
      </v-container>
    </v-form>
    <v-container>
      <v-alert dense outlined type="error" v-if="error">
      I'm sorry
        <strong>{{ error.message }}</strong>  try again
    </v-alert>
    </v-container>
  </div>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      try {
        const val =await firebase.auth().signInWithEmailAndPassword(this.email,this.password)
      console.log(val)
      this.$router.replace({name: 'Sesion'})
      } catch (error) {
        this.error=error
      }
    },
  },
};
</script>