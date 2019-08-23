<template>
  <div>
    <label for>User ID</label>
    <input type="text" v-model="userId" />
    <label for>Password</label>
    <input type="text" v-model="password" />
    <button @click="createAccount">Create Account</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      userId: "",
      password: ""
    };
  },
  methods: {
    createAccount() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.userId, this.password)
        .then(
          function(user) {
            alert("user created" + user);
          },
          function(err) {
            alert("error" + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 1em;
  margin: 40px auto;
  width: max-content;
}
</style>