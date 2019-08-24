<template>
  <div>
    <div class="logoWrapper">
      <div class="logo"></div>
    </div>
    <div class="title">
      <h1>VOX</h1>
      <span>For Students</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  display: inline-block;
  margin-left: 10px;
}

.title span {
  font-size: 14px;
  font-weight: bold;
  color: #2948ff;
}

.logoWrapper {
  padding: 5px 10px;
  border-right: 1px solid #2948ff;
  display: inline-block;
}

.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 6px solid #2948ff;
  box-sizing: border-box;
}
h1 {
  font-size: 28px;
  letter-spacing: 1px;
  color: #2948ff;
}
</style>