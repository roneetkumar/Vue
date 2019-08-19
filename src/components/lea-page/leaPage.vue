<template>
  <div class="lea-grid">
    <LeaCard v-for="card in leaCards" :key="card.courseNo" :card="card" />
  </div>
</template>

<script>
import LeaCard from "./leaCard";

export default {
  components: {
    LeaCard
  },
  data() {
    return {
      leaCards: [
        {
          courseNo: "1",
          courseName: "Object Oriented"
        },
        {
          courseNo: "2",
          courseName: "Database - II"
        },
        {
          courseNo: "3",
          courseName: "Python"
        },
        {
          courseNo: "4",
          courseName: "EcmaScript"
        },
        {
          courseNo: "5",
          courseName: "Web Development"
        }
      ]
    };
  }
};
</script>

<style scoped>
.lea-grid {
  max-width: 1000px;
  /* background: pink; */
  margin: auto;
  padding: 10px;
  padding-bottom: 180px;
  text-align: center;
}
</style>