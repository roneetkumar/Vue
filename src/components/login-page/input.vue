<template>
  <div class="inputLogin">
    <template v-if="placeholder === 'Student ID' "></template>
    <template v-else>
      <KeyIcon />
      <input
        type="password"
        :placeholder="placeholder"
        v-model="stuPass"
        @keyup="$emit('passInput',stuPass)"
      />
    </template>
  </div>
</template>

<script>
import UserIcon from "../../assets/userIcon";
import KeyIcon from "../../assets/keyIcon";

export default {
  props: {
    placeholder: String
  },
  components: {
    KeyIcon,
    UserIcon
  },

  data() {
    return {
      stuId: "",
      stuPass: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
input {
  display: inline-block;
  font-size: 20px;
  border: 0;
  box-sizing: border-box;
  color: #33e4ef;
  outline: 0;
  height: 100%;
  width: 100%;
}

.inputLogin {
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.16);
  height: 55px;
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 30px;
  max-width: 300px;
}

input::placeholder {
  color: rgba(0, 0, 0, 0.24);
}

svg {
  margin-right: 10px;
  fill: rgba(0, 0, 0, 0.24);
}
</style>