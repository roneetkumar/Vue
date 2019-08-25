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
:root {
  --colorDark: #2948ff;
  --colorLight: #396afc;
  --colorbg: linear-gradient(0deg, var(--colorDark), var(--colorLight));
}

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
  background: #fff;
}

main {
  margin: 10px auto;
  padding: 0 10px;
  padding-bottom: 168px;
}

main h1 {
  margin: auto;
  color: var(--colorDark);
}

.menu-active > .item > .icon > svg {
  fill: var(--colorDark);
}

.menu-active > .item > .icon {
  background: #fff;
  border: 3px solid var(--colorDark);
}
</style>
