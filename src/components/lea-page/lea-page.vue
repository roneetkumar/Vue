<template>
  <div class="homePageWrapper">
    <Header />
    <main>
      <div class="lea-grid">
        <h1 class="heading">Lea</h1>
        <LeaCard v-for="card in courseData" :key="card.courseNo" :card="card" />
      </div>
    </main>
    <NavBar />
  </div>
</template>

<script>
import LeaCard from "./lea-card";
import courseData from "../user-data/courses.json";

import Header from "../header";
import NavBar from "../nav-bar/nav";

export default {
  components: {
    LeaCard,
    Header,
    NavBar
  },
  data() {
    return {
      courseData
    };
  }
};
</script>

<style scoped>
.lea-grid {
  max-width: 1000px;
  margin: auto;
  padding: 0 10px;
  text-align: center;
}

h1 {
  margin: 30px auto;
}
</style>