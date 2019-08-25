<template>
  <li>{{itemName}}</li>
</template>

<script>
export default {
  props: {
    itemName: String
  }
};
</script>

<style scoped>
li {
  margin: 0 6px;
  padding: 8px 14px;
  text-transform: uppercase;
  font-weight: bold;
  background: var(--colorbg);
  float: left;
  color: #fff;
  border-radius: 50px;
  box-sizing: border-box;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.3);
  transition: box-shadow 225ms ease-in-out;
}
</style>