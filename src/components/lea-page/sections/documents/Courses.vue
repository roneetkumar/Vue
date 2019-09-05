<template>
  <div class="courseWrapper">
    <div class="content">
      <h1>{{courseName}}</h1>
    </div>
    <button>Send</button>
  </div>
</template>

<script>
export default {
  props: {
    courseName: String
  }
};
</script>

<style scoped>
h1 {
  font-size: 14px;
}

button {
  width: 60px;
  height: 60px;
  background: var(--colorbg);
  color: #fff;
  border-radius: 50%;
  outline: 0;
  border: 0;
  margin-bottom: 20px;
}
</style>