<template>
  <transition name="slide">
    <div class="side-bar-wrapper" v-if="$store.state.navOpened">
      <div class="header">
        <div class="nav-pic">
          <img src="assets/head_paper.png" alt class="product-logo" />
        </div>
        <div class="nav-heading">
          <h1 class="title"></h1>
          <a href>
            <h1 class="email"></h1>
          </a>
        </div>
      </div>
      <!-- navigation menu -->
      <ul class="nav-menu">
        <li class="menu-item"></li>
        <li class="menu-item"></li>
        <li class="menu-item"></li>
        <li class="menu-item"></li>
        <li class="menu-item" @click="logOut">
          <LogoutIcon />
          <h1>Logout</h1>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

import LogoutIcon from "../icons/Logout";

export default {
  components: {
    LogoutIcon
  },
  data() {
    return {};
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    }
  }
};
</script>

<style scoped>
.side-bar-wrapper {
  max-width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  transform: translateX(0px);
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  width: 85%;
  will-change: transform;
}

.slide-enter,
.slide-leave-active {
  transform: translateX(-310px);
}
.header {
  position: relative;
  width: 100%;
  height: 172px;
  background-size: 302px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
}

ul.nav-menu {
  margin: 12px 0;
  list-style: none;
}

ul li {
  position: relative;
  width: 100%;
  height: 48px;
  -webkit-transition: background 100ms ease-in-out;
  transition: background 100ms ease-in-out;
}

ul li:hover {
  background: rgba(0, 0, 0, 0.1);
}

ul li h1 {
  position: relative;
  display: inline-block;
  left: 72px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  line-height: 48px;
}

ul li svg {
  position: relative;
  display: inline-block;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  position: absolute;
  left: 18px;
  width: 24px;
  height: 24px;
  fill: rgba(0, 0, 0, 0.4);
}
</style>