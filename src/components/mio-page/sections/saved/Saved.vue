<template>
  <div class="mioWrapper">
    <h1>saved</h1>
    <ul>
      <li v-for="mail in MioData.saved" :key="mail.id">
        <div class="mail">
          <h4>From : {{mail.from}}</h4>
          <h5>{{mail.subject}}</h5>
        </div>
        <UserIcon />
      </li>
    </ul>
  </div>
</template>

<script>
import UserIcon from "@/components/icons/UserIcon";
import MioData from "@/data/mio.json";

export default {
  components: {
    UserIcon
  },
  data() {
    return {
      MioData
    };
  }
};
</script>

<style>
</style>