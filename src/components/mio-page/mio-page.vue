<template>
  <div class="homePageWrapper">
    <Header />
    <main>
      <h1 class="heading">mio page</h1>
    </main>
    <NavBar />
  </div>
</template>

<script>
import Header from "../header";
import NavBar from "../nav-bar/nav";

export default {
  components: {
    Header,
    NavBar
  }
};
</script>

<style>
</style>