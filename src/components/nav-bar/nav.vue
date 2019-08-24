<template>
  <nav>
    <NavMenu />
  </nav>
</template>

<script>
import NavMenu from "./NavMenu";

export default {
  components: {
    NavMenu
  },
  methods: {}
};
</script>

<style scoped>
nav {
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;
  color: var(--colorDark);
  background: #fff;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.1);
}
</style>