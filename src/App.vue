<template>
  <div>
    <router-view></router-view>
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
}

.heading {
  text-align: center;
}

.homePageWrapper {
  background: #26d0d91a;
}
button {
  display: block;
  margin: 10px auto;
}
</style>
