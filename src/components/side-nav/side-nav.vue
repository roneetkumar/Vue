<template>
  <div class="side-bar-wrapper">
    <h1>sidebar</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.side-bar-wrapper {
  width: 100%;
  max-width: 300px;
  height: 100vh;
  position: fixed;
  left: 0;
  transform: translateX(-310px);
  background: #fff;
  z-index: 1;
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.2);
}
</style>