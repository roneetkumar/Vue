<template>
  <div class="item">
    <div class="icon"></div>
    <span>{{itemName}}</span>
  </div>
</template>

<script>
export default {
  props: {
    itemName: String
  },
  methods: {}
};
</script>

<style scoped>
.icon {
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  margin-bottom: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
}

.item span {
  font-size: 14px;
}
</style>