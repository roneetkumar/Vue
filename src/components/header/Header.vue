<template>
  <header>
    <Logo />
  </header>
</template>

<script>
import Logo from "../icons/Logo";

export default {
  components: {
    Logo
  },
  methods: {}
};
</script>

<style scoped>
header {
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: var(--colorDark);
  background: #fff;
}
</style>