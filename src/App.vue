<template>
  <div>
    <LoginCard v-if="loginCard" @OpenHome="loginHome" />
    <HomePage v-if="openHome" @OpenHome="loginHome" />
  </div>
</template>

<script>
import LoginCard from "./components/login-page/LoginCard";
import HomePage from "./components/home-page/HomePage";

export default {
  name: "app",
  components: { LoginCard, HomePage },
  data() {
    return {
      openHome: false,
      loginCard: true
    };
  },
  methods: {
    loginHome(value) {
      this.openHome = value;
      this.loginCard = !value;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Google Sans;
}

body {
  background: linear-gradient(340deg, #20c4ce 12%, #33e4ef 86%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
