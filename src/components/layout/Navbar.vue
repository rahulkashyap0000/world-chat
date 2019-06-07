<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <router-link :to="{name: 'GMap'}" class="brand-logo left">World Post</router-link>
        <ul class="right">
          <li>
            <router-link :to="{name: 'Signup'}" v-if="!user">SignUp</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Login'}" v-if="!user">Login</router-link>
          </li>
          <li>
            <a v-if="user" class="active">{{user.email}}</a>
          </li>
          <li>
            <a @click="logout" v-if="user">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  data() {
    return {
      user: null
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    }
  },
  created() {
    //let user = firebase.auth().currentUser
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style>
</style>

