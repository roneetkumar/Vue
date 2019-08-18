<template>
  <div class="inputLogin">
    <template v-if="placeholder === 'Student ID' ">
      <UserIcon />
      <input type="text" :placeholder="placeholder" v-model="stuId" @keyup="sendData" />
    </template>
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
  methods: {
    sendData() {
      this.$emit("idInput", this.stuId);
    }
  }
};
</script>

<style>
input {
  display: inline-block;
  font-size: 20px;
  border: 0;
  box-sizing: border-box;
  color: #33e4ef;
  outline: 0;
}

.inputLogin {
  width: 300px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.16);
  padding: 14px 0;
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 30px;
}

svg {
  display: inline-block;
  margin-right: 10px;
  fill: rgba(0, 0, 0, 0.24);
}

input::placeholder {
  color: rgba(0, 0, 0, 0.24);
}
</style>