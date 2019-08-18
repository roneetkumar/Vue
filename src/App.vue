<template>
  <div>
    <LoginCard @goHome="loginHome" v-if="loginCard" />
    <HomePage @goHome="loginHome" v-else />
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
</style>
