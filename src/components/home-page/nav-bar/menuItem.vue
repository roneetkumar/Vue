<template>
  <div class="item">
    <MioIcon v-if="itemName === 'Mio'" />
    <NewsIcon v-else-if="itemName === 'News'" />
    <AboutIcon v-else-if="itemName === 'About'" />
    <LeaIcon v-else-if="itemName === 'Lea'" />
    <ServiceIcon v-else />

    <span>{{itemName}}</span>
  </div>
</template>

<script>
import MioIcon from "../../../assets/mioIcon";
import NewsIcon from "../../../assets/newsIcon";
import AboutIcon from "../../../assets/aboutIcon";
import LeaIcon from "../../../assets/leaIcon";
import ServiceIcon from "../../../assets/serviceIcon";
export default {
  props: {
    itemName: String
  },
  components: {
    MioIcon,
    NewsIcon,
    AboutIcon,
    LeaIcon,
    ServiceIcon
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
  display: flex;
  align-items: center;
  justify-content: center;
  fill: #20c4ce;
}

.item span {
  font-size: 14px;
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