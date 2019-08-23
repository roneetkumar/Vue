<template>
  <header>
    <Logo :fill="'#fff'" />
    <h1>Vox</h1>
    <br />
    <button @click="logOut">Logout</button>
  </header>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

import Logo from "../assets/logo";

export default {
  components: {
    Logo
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    }
  }
};
</script>

<style scoped>
header {
  top: 0;
  position: sticky;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: white;
  background: linear-gradient(320deg, #20c4ce 15%, #33e4ef 85%);
}

h1 {
  text-align: center;
  font-size: 24px;
}

button {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid slategrey;
  outline: 0;
}
</style>