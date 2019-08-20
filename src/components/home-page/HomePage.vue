<template>
  <div class="homePageWrapper">
    <Header />
    <main>
      <button @click.prevent="logOut">Logout</button>
      <router-view></router-view>
    </main>
    <NavBar @menu="navigate" />
  </div>
</template>

<script>
import Header from "./header";
import NavBar from "./nav-bar/nav";

export default {
  components: {
    Header,
    NavBar
    // LeaPage,
    // MioPage
    // NewsPage,
    // ServicePage,
    // AboutPage
  },
  data() {
    return {
      nav: "Lea"
    };
  },
  methods: {
    logOut() {
      this.$emit("goHome", false);
      sessionStorage.clear();
    },
    navigate(value) {
      this.nav = value;
    }
  }
};
</script>

<style scoped>
.homePageWrapper {
  background: #26d0d91a;
}
button {
  display: block;
  margin: 10px auto;
}
</style>