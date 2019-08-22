<template>
  <div class="homePageWrapper">
    <div class="overlay" v-if="$store.state.navOpened" @click="$store.state.navOpened = false"></div>
    <SideNav :navOpen="$store.state.navOpened" />
    <Header />
    <router-view />
    <NavBar />
  </div>
</template>

<script>
import Header from "./header";
import NavBar from "./nav-bar/nav";
import SideNav from "./side-nav/side-nav";

export default {
  components: {
    Header,
    NavBar,
    SideNav
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
  transition: background 0.2s ease;
}
</style>;
