<template>
  <div class="menu-wrapper">
    <ul class="menu-list">
      <router-link v-for="item in menuItems" :key="item" :to="{name:item}">
        <LeaMenuItem :itemName="item" />
      </router-link>
    </ul>
  </div>
</template>

<script>
import LeaMenuItem from "../chip-menu/ChipMenuItem";

export default {
  components: { LeaMenuItem },
  props: {
    menuItems: Array
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.menu-wrapper {
  text-align: center;
  overflow-x: scroll;
  background: #fff;
  position: sticky;
  top: 72px;
  width: 100%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}
.menu-wrapper::-webkit-scrollbar {
  display: none;
}

ul.menu-list {
  list-style: none;
  margin: 16px 5px;
  margin-top: 8px;
  display: inline-block;
  width: max-content;
}

.router-link-exact-active li {
  background: #fff;
  color: var(--colorDark);
  box-shadow: inset 0 0 0 3px;
}

a {
  margin: 0 6px;
}
</style>