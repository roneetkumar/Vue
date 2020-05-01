<template>
  <div class="item">
    <MioIcon v-if="itemName === 'Mio'" />
    <NewsIcon v-else-if="itemName === 'News'" />
    <LeaIcon v-else-if="itemName === 'Lea'" />
    <ServiceIcon v-else />

    <span>{{itemName}}</span>
  </div>
</template>

<script>
import MioIcon from "../icons/MioIcon";
import NewsIcon from "../icons/NewsIcon";
import LeaIcon from "../icons/LeaIcon";
import ServiceIcon from "../icons/ServiceIcon";
export default {
  props: {
    itemName: String
  },
  components: {
    MioIcon,
    NewsIcon,
    LeaIcon,
    ServiceIcon
  },
  methods: {}
};
</script>

<style scoped>
.item {
  width: 70px;
}
.icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 6px;
  transition: transform 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--colorbg);
  fill: #fff;
  box-sizing: border-box;
  cursor: default;
}

.item span {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--colorDark);
}

.item:hover .icon {
  transform: scale(1.1);
}

.item:active .icon {
  transform: scale(0.8);
}
</style>
