<template>
  <div class="homePageWrapper">
    <div class="overlay" v-show="$store.state.navOpened" @click="$store.state.navOpened = false"></div>
    <SideNav :navOpen="$store.state.navOpened" />
    <Header />
    <SearchBar />

    <router-view />
    <NavBar />
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./nav-bar/Nav";
import SideNav from "./side-nav/SideNav";
import SearchBar from "./nav-bar/SearchBar";

export default {
  components: {
    Header,
    NavBar,
    SearchBar,
    SideNav
  }
};
</script>

<style scoped>
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  transition: background 0.2s ease;
}
</style>;
