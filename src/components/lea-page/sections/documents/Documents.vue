<template>
  <div>
    <h1>Documents</h1>
    <div class="course-grid">
      <Course v-for="card in course" :key="card" :courseName="card" />
    </div>
  </div>
</template>

<script>
import Course from "./Courses";

export default {
  components: {
    Course
  },
  data() {
    return {
      course: [
        "multi-tier application development",
        "iOS mobile application development",
        "web server application development",
        "scripting language",
        "advanced object oriented programming"
      ]
    };
  }
};
</script>

<style >
.course-grid {
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.courseWrapper {
  width: 300px;
  height: 300px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin: 20px;
  display: inline-grid;
  grid-template-rows: 1fr max-content;
  justify-items: center;
}
</style>