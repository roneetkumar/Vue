<template>
  <div class="searchWrapper">
    <div class="searchBar">
      <MenuIcon @click.native="$store.state.navOpened = true" />
      <input type="text" placeholder="Search" />
      <SearchIcon />
    </div>
  </div>
</template>

<script>
import SearchIcon from "../../assets/SearchIcon";
import MenuIcon from "../../assets/MenuIcon";

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
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  margin: auto;
  padding: 2px;
}

.searchWrapper {
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  top: 0;
  position: sticky;
}

input {
  font-size: 18px;
  justify-self: baseline;
  width: 100%;
  height: 100%;
  color: var(--colorLight);
  border: 0;
  outline: 0;
  display: inline-block;
  box-sizing: border-box;
}

input::placeholder {
  color: rgba(0, 0, 0, 0.2);
}

svg {
  fill: var(--colorDark);
}
</style>