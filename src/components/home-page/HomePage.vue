<template>
  <div>
    <h1>Home Page</h1>
    <button @click.prevent="logOut">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$emit("OpenHome", false);
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 40px;
  color: darkblue;
}

button {
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>