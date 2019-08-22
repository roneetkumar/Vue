<template>
  <header>
    <Logo :fill="'#fff'" />
    <h1>Vox</h1>
    <br />
    <router-link to="/">
      <button>Logout</button>
    </router-link>
  </header>
</template>

<script>
import Logo from "../assets/logo";

export default {
  components: {
    Logo
  }
};
</script>

<style scoped>
header {
  top: 0;
  position: sticky;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: white;
  background: linear-gradient(320deg, #20c4ce 15%, #33e4ef 85%);
}

h1 {
  text-align: center;
  font-size: 24px;
}

button {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid slategrey;
  outline: 0;
}
</style>