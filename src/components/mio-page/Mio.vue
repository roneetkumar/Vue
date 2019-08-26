<template>
  <main>
    <MioMenu :menuItems="menuItems" />
    <h1 class="heading">mio page</h1>
    <ul>
      <li v-for="index in 40" :key="index"></li>
    </ul>
  </main>
</template>

<script>
import MioMenu from "../chip-menu/ChipMenu";

export default {
  components: { MioMenu },
  data() {
    return {
      menuItems: ["Inbox", "Outbox", "Sent", "Saved", "Draft", "Trash"]
    };
  }
};
</script>

<style scoped>
ul {
  max-width: 1000px;
  list-style: none;
  margin: auto;
  text-align: center;
  padding: 10px;
}
ul li {
  width: 100%;
  max-width: 300px;
  height: 70px;
  background: #fff;
  margin: 10px 0;
  border: 1px solid rgb(138, 138, 138);
  border-radius: 4px;
  display: inline-block;
}
</style>