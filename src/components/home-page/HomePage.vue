<template>
  <div class="homePageWrapper">
    <Header />
    <button @click.prevent="logOut">Logout</button>
    <main>
      <LeaPage v-if="nav=== 'Lea'" />
      <MioPage v-else-if="nav=== 'Mio'" />
    </main>
    <NavBar @menu="navigate" />
  </div>
</template>

<script>
import Header from "./header";
import NavBar from "./nav";
import LeaPage from "../lea-page/leaPage";
import MioPage from "../mio-page/mio-page";
export default {
  components: {
    Header,
    NavBar,
    LeaPage,
    MioPage
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
  margin: 0 auto;
}
</style>