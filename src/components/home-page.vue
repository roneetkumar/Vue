<template>
  <div class="homePageWrapper" @menuClicked="passToSideBar">
    <SideNav />
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
    return {
      navOpened: false
    };
  },
  methods: {
    passToSideBar(value) {
      alert(value);
      this.navOpened = value;
    }
  }
};
</script>

<style scoped>
</style>;
