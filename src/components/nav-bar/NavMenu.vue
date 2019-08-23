<template>
  <div class="nav-menu">
    <router-link active-class="menu-active" v-for="item in menu" :key="item" :to="{name:item}">
      <MenuItem :itemName="item" />
    </router-link>
  </div>
</template>

<script>
import MenuItem from "./MenuItem";
export default {
  components: {
    MenuItem
  },
  data() {
    return {
      menu: ["News", "Mio", "Lea", "Services", "About"]
    };
  },
  methods: {}
};
</script>

<style scoped>
.nav-menu {
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
}

a {
  color: #fff;
}
</style>