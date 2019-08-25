<template>
  <main>
    <LeaMenu :menuItems="menuItems" />
    <button @click="logOut">Logout</button>
    <router-view />
  </main>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

import LeaMenu from "../chip-menu/ChipMenu";

export default {
  components: { LeaMenu },
  data() {
    return {
      menuItems: [
        "Announcements",
        "Documents",
        "Assignments",
        "Grades",
        "Events",
        "Tearchers",
        "Website",
        "Absence",
        "Forum"
      ]
    };
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    }
  }
};
</script>

<style scoped>
button {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid slategrey;
  outline: 0;
  margin: 20px auto;
  display: block;
}
</style>