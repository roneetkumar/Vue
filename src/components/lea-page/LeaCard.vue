<template>
  <div class="card">
    <h3>{{card.courseNo}}</h3>
    <h2>{{card.courseName}}</h2>
    <br />
    <h4>Courses:-</h4>
    <br />
    <ul>
      <li>Documents</li>
      <li>Assignments</li>
      <li>Class Forums</li>
      <li>Announcements</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 300px;
  /* min-height: 300px; */
  background: #fff;
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); */
  border-radius: 14px;
  border: 1px solid lightgray;
  margin: 10px;
  display: inline-block;
  box-sizing: border-box;
  padding: 10px 15px;
  text-align: left;
}

h3 {
  text-align: center;
  margin: 10px 0;
}

ul {
  list-style: none;
  text-align: left;
}
</style>