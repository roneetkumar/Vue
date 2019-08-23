<template>
  <div class="loginWrapper">
    <form>
      <Logo :fill="'#33e4ef'" />
      <h1>Vox</h1>
      <div class="inputLogin">
        <UserIcon />
        <input type="text" placeholder="Student ID" v-model="student.id" />
      </div>
      <div class="inputLogin">
        <KeyIcon />
        <input type="password" placeholder="Password" v-model="student.pass" />
      </div>
      <button @click.prevent="logIn" class="createAccount">Submit</button>

      <h2>Forget Password ?</h2>
      <router-link to="/CreateAccount">
        <button>Create Account</button>
      </router-link>

      <h2>Fraincais</h2>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

import Logo from "../../assets/logo";
import UserIcon from "../../assets/userIcon";
import KeyIcon from "../../assets/keyIcon";

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
      userFound: false,
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
        .then(() => this.$router.replace("home"), err => alert(err.message));
    }
  }
};
</script>

<style scoped>
input {
  display: inline-block;
  font-size: 20px;
  border: 0;
  box-sizing: border-box;
  color: #33e4ef;
  outline: 0;
  height: 100%;
  width: 100%;
}

.inputLogin {
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.16);
  height: 55px;
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 30px;
  max-width: 300px;
}

input::placeholder {
  color: rgba(0, 0, 0, 0.24);
}

.inputLogin svg {
  margin-right: 10px;
  fill: rgba(0, 0, 0, 0.24);
}

.loginWrapper {
  position: relative;
  background: linear-gradient(340deg, #20c4ce 12%, #33e4ef 86%);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
  box-sizing: border-box;
}

form {
  position: relative;
  width: 100%;
  max-width: 450px;
  background: #fff;
  padding: 20px 40px;
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
  margin-bottom: 40px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #33e4ef;
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
  border: 3px solid #33e4ef;
  color: #33e4ef;
  background: #fff;
  margin: 10px auto;
  display: block;
  outline: 0;
}

button:hover {
  border: 3px solid #20c4ce;
  color: #20c4ce;
}

.createAccount {
  border: 0;
  background: #33e4ef;
  color: #fff;
}

.createAccount:hover {
  background: #20c4ce;
  color: #fff;
}

input {
  display: inline-block;
  font-size: 20px;
  border: 0;
  box-sizing: border-box;
  color: #33e4ef;
  outline: 0;
}

.studentid,
.password {
  width: 300px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.16);
  padding: 14px 0;
  display: flex;
  align-items: center;
  margin: auto;
}

input::placeholder {
  color: rgba(0, 0, 0, 0.24);
}
</style>