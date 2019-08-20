<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      openHome: false,
      loginCard: true
    };
  },
  methods: {
    loginHome(value) {
      this.openHome = value;
      this.loginCard = !value;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Google Sans;
}

a {
  text-decoration: none;
  color: #fff;
}

.heading {
  text-align: center;
}

.homePageWrapper {
  background: #26d0d91a;
}

main {
  margin-bottom: 180px;
}

button {
  display: block;
  margin: 10px auto;
}
</style>
