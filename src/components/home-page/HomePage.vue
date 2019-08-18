<template>
  <div class="homePageWrapper">
    <Header />
    <main>
      <button @click.prevent="logOut">Logout</button>
    </main>
    <NavBar />
  </div>
</template>

<script>
import Header from "./header";
import NavBar from "./nav";

export default {
  components: {
    Header,
    NavBar
  },
  methods: {
    logOut() {
      this.$emit("goHome", false);
      sessionStorage.clear();
    }
  }
};
</script>

<style scoped>
button {
  margin: 0 auto;
}
</style>