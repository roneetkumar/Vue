<template>
  <main>
    <MioMenu :menuItems="menuItems" />
    <router-view />
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

<style>
.mioWrapper ul {
  max-width: 1000px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
  justify-items: center;
  margin: auto;
  padding: 10px;
}

.mioWrapper ul li {
  width: 100%;
  max-width: 300px;
  height: 70px;
  background: #fff;
  margin: auto;
  border: 1px solid rgb(138, 138, 138);
  border-radius: 4px;
  display: inline-block;
}
</style>