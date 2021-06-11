import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQ14cpmDLCcNijOZoxPDEEZ3XWc4pIRGM",
  authDomain: "crudusers-7f24f.firebaseapp.com",
  projectId: "crudusers-7f24f",
  storageBucket: "crudusers-7f24f.appspot.com",
  messagingSenderId: "320984723121",
  appId: "1:320984723121:web:97c9c3794c83525393bc90",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged((user) => {
  console.log(user)
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App),
    }).$mount("#app");
  }
});
