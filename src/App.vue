<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  methods: {}
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

.menu-active > .item > .icon > svg {
  fill: #fff;
}

.menu-active > .item > .icon {
  background: #20c4ce;
  border: 2px solid #fff;
}
</style>
