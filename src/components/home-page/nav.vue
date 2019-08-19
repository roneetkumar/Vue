<template>
  <nav>
    <SearchBar />
    <NavMenu @menu="sendData" />
  </nav>
</template>

<script>
import SearchBar from "./searchbar";
import NavMenu from "./nav-menu/nav-menu";

export default {
  components: {
    SearchBar,
    NavMenu
  },
  methods: {
    sendData(val) {
      // alert(val);
      this.$emit("menu", val);
    }
  }
};
</script>

<style scoped>
nav {
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: white;
  background: linear-gradient(320deg, #20c4ce 15%, #33e4ef 85%);
  position: fixed;
  bottom: 0;
}
</style>