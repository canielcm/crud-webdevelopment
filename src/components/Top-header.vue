<template>
    <div>
        <v-container>
            <v-btn @click="signOut" v-if="loggedIn">Sign Out: yes</v-btn>

            <v-btn @click="signOut" v-else>Sign Out: no</v-btn>
            
        </v-container>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
    export default {
        name:'Top-header',
        data(){
            return {
                user:firebase.auth().currentUser,
                loggedIn: null
            }
        },
        mounted(){
        },
        methods: {
            async signOut(){
                try {
                    const data = await firebase.auth().signOut();
                    this.$router.replace({name: 'Login'});
                    
                } catch (error) {
                    
                }
            },
        },
    }
</script>
