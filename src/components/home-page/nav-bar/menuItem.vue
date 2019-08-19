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
  margin: auto;
  margin-bottom: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
}

.item span {
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
}

.item:hover .icon {
  transform: scale(1.1);
}

.item:active .icon {
  transform: scale(0.8);
}
</style>