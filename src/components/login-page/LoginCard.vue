<template>
  <div class="loginWrapper">
    <form>
      <Logo />
      <div class="inputBox">
        <UserIcon />
        <input type="email" placeholder="Email" v-model="student.id" />
      </div>
      <div class="inputBox">
        <KeyIcon />
        <input type="password" placeholder="Password" v-model="student.pass" />
      </div>
      <button @click.prevent="logIn" class="login">Submit</button>
      <h2>Forget Password ?</h2>
      <button @click.prevent="createAccount">Create Account</button>
      <h2>Fraincais</h2>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

import Logo from "../../assets/Logo";
import UserIcon from "../../assets/UserIcon";
import KeyIcon from "../../assets/KeyIcon";

export default {
  props: {
    fill: String
  },
  components: {
    Logo,
    KeyIcon,
    UserIcon
  },
  data() {
    return {
      student: {
        id: "",
        pass: ""
      }
    };
  },
  methods: {
    logIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.student.id, this.student.pass)
        .then(
          () => {
            this.$router.replace("home");
            this.student.id = "";
            this.student.pass = "";
          },
          err => alert(err.message)
        );
    },
    createAccount() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.student.id, this.student.pass)
        .then(
          () => {
            this.$router.replace("home");
            this.student.id = "";
            this.student.pass = "";
          },
          err => alert(err.message)
        );
    }
  }
};
</script>

<style scoped>
.loginWrapper {
  position: relative;
  background: var(--colorbg);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
}

.inputBox {
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.16);
  height: 48px;
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 35px;
  max-width: 300px;
}

.inputBox:hover {
  border-bottom: 2px solid var(--colorDark);
}

input {
  display: inline-block;
  font-size: 20px;
  border: 0;
  box-sizing: border-box;
  color: var(--colorLight);
  outline: 0;
  height: 100%;
  width: 100%;
}

input::placeholder {
  color: rgba(0, 0, 0, 0.24);
}

.inputBox svg {
  margin-right: 10px;
  fill: rgba(0, 0, 0, 0.24);
}

.inputBox:hover svg {
  fill: var(--colorDark);
}

form {
  position: relative;
  width: 100%;
  max-width: 420px;
  background: #fff;
  padding: 30px 40px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14);
  margin: auto;
  transition: transform 0.2s ease;
}

h2 {
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.24);
  margin-bottom: 35px;
}

h1 {
  text-align: center;
  margin-bottom: 35px;
  color: var(--colorLight);
  font-size: 24px;
}

h2:hover {
  text-decoration: underline;
}

button {
  font-size: 24px;
  width: 100%;
  max-width: 300px;
  height: 60px;
  border-radius: 14px;
  border: 3px solid var(--colorLight);
  color: var(--colorLight);
  background: #fff;
  margin: 10px auto;
  display: block;
  outline: 0;
}

button:hover {
  border: 3px solid var(--colorDark);
  color: var(--colorDark);
}

.login {
  border: 0;
  background: var(--colorLight);
  color: #fff;
  margin-top: 40px;
}

.login:hover {
  background: var(--colorDark);
  color: #fff;
}

input {
  display: inline-block;
  font-size: 20px;
  border: 0;
  box-sizing: border-box;
  color: var(--colorLight);
  outline: 0;
}

input::placeholder {
  color: rgba(0, 0, 0, 0.24);
}
</style>