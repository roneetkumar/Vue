<template>
  <main class="lea-grid">
    <h1 class="heading">Lea</h1>
    <LeaCard v-for="card in courseData" :key="card.courseNo" :card="card" />
  </main>
</template>

<script>
import LeaCard from "./LeaCard";
import courseData from "../../data/courses";

export default {
  components: {
    LeaCard
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
  text-align: center;
}

h1 {
  margin: auto;
}
</style>