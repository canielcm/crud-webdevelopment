import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/sesion',
    name: 'Sesion',
    meta: {requiresAuth: true} ,
    component: () => import('../views/Sesion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(  (to, from, next)=>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated =  firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
     next('/login');
  }else{
    next()
  }
})

export default router
