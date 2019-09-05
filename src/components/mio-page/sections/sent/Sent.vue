<template>
  <div class="mioWrapper">
    <h1>sent</h1>
    <ul>
      <li v-for="mail in MioData.sent" :key="mail.id">
        <div class="mail">
          <h4>To : {{mail.from}}</h4>
          <h5>{{mail.subject}}</h5>
        </div>
        <UserIcon />
      </li>
    </ul>
  </div>
</template>

<script>
import MioData from "@/data/mio.json";
import UserIcon from "@/components/icons/UserIcon";

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