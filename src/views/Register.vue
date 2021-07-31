<template>
  <div>
    <v-container>
      <v-alert dense outlined type="error" v-if="error">
        I'm sorry
        <strong>{{ error.message }}</strong>  try again
      </v-alert>
      <v-form @submit.prevent="pressed">
        <h1>Register</h1>
        <v-text-field
          type="email"
          v-model="email"
          label="type your email here"
        ></v-text-field>

        <v-text-field
          type="password"
          v-model="password"
          label="type password here"
        ></v-text-field>

        <v-btn type="submit" color="primary">Register</v-btn>
      </v-form>
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
    //   firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    // .then((userCredential) => {
    //   // Signed in 
    //   var user = userCredential.user;
    //   // ...
    //   console.log(user)
    //   this.$router.replace({name: "Sesion"})
    // })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ..
    // });
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)

            console.log(user)
            this.$router.replace({name: "Sesion"})
        } catch (error) {
            console.log('barro pri', error)
            this.error=error
        }
    },
  },
};
</script>