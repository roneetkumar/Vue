<template>
  <div class="nav-menu">
    <router-link v-for="item in menu" :key="item" :to="{name:item}">
      <MenuItem :itemName="item" @click.native="selectItem(item)" />
    </router-link>
  </div>
</template>

<script>
import MenuItem from "./menuItem";
export default {
  components: {
    MenuItem
  },
  data() {
    return {
      menu: ["News", "Mio", "Lea", "Services", "About"]
    };
  },
  methods: {
    selectItem(item) {
      this.$emit("menu", item);
    }
  }
};
</script>

<style scoped>
.nav-menu {
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
}
</style>