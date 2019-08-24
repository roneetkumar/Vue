<template>
  <main class="lea-grid">
    <button @click="logOut">Logout</button>
    <LeaCard v-for="card in courseData" :key="card.courseNo" :card="card" />
  </main>
</template>

<script>
import LeaCard from "./LeaCard";
import courseData from "../../data/courses";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  components: {
    LeaCard
  },
  data() {
    return {
      courseData
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
.lea-grid {
  max-width: 1000px;
  text-align: center;
}

button {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid slategrey;
  outline: 0;
  margin: 20px auto;
  display: block;
  /* right: 10px;
  position: fixed; */
}
</style>