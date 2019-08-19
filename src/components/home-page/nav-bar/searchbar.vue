<template>
  <div class="searchBar">
    <MenuIcon />
    <input type="text" placeholder="Search" />
    <SearchIcon />
  </div>
</template>

<script>
import SearchIcon from "../../../assets/searchIcon";
import MenuIcon from "../../../assets/menuIcon";

export default {
  components: {
    SearchIcon,
    MenuIcon
  }
};
</script>

<style scoped>
.searchBar {
  max-width: 344px;
  height: 48px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;
  /* box-sizing: border-box; */
  padding: 2px;
}

input {
  font-size: 18px;
  justify-self: baseline;
  width: 100%;
  height: 100%;
  color: #33e4ef;
  border: 0;
  outline: 0;
  display: inline-block;
  box-sizing: border-box;
}

input::placeholder {
  color: rgba(0, 0, 0, 0.24);
}

svg {
  fill: #20c4ce;
}
</style>