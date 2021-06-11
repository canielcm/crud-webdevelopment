<template>
    <div>
        <v-container>
            <v-btn color="primary" @click="signOut">Sign Out</v-btn>
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
