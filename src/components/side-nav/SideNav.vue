<template>
  <div class="side-bar-wrapper" :class="{navOpened : $store.state.navOpened == true}">
    <h1>sidebar</h1>
  </div>
</template>

<script>
export default {
  props: {
    navOpen: Boolean
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.side-bar-wrapper {
  width: 100%;
  max-width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-310px);
  background: #fff;
  z-index: 1;
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
}

.navOpened {
  transform: translateX(0) !important;
}
</style>