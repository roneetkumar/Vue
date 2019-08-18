<template>
  <div class="login-wrapper">
    <Logo />
    <h1>Vox</h1>
    <Input :placeholder="'Student ID'" @idInput="stuIdInput" />
    <Input :placeholder="'Password'" @passInput="stuPassInput" />
    <button type="submit" @click.prevent="logIn">Submit</button>
    <h2>Forget Password ?</h2>
    <button class="createAccount" type="submit" @click.prevent="logIn">Create Account</button>
    <h2>Fraincais</h2>
  </div>
</template>

<script>
import Logo from "../../assets/logo";
import Input from "./input";

export default {
  components: {
    Logo,
    Input
  },
  data() {
    return {
      students: [
        {
          id: "1111",
          pass: "11",
          name: "Roneet"
        },
        {
          id: "2222",
          pass: "22",
          name: "Roop"
        },
        {
          id: "3333",
          pass: "33",
          name: "Vinay"
        },
        {
          id: "4444",
          pass: "44",
          name: "Davinder"
        }
      ],
      inputStudentID: "",
      inputPassword: "",
      userFound: false
    };
  },
  methods: {
    logIn() {
      this.students.forEach(student => {
        if (student.id === this.inputStudentID) {
          this.userFound = true;
          if (student.pass === this.inputPassword) {
            alert(`Welcome ${student.name}`);
            this.$emit("OpenHome", true);
          } else {
            alert("wrong password");
          }
        }
      });
      if (!this.userFound) {
        alert("User Not Found");
      }
    },
    stuIdInput(value) {
      this.inputStudentID = value;
    },
    stuPassInput(value) {
      this.inputPassword = value;
    }
  }
};
</script>

<style scoped>
.login-wrapper {
  width: 100%;
  max-width: 450px;
  background: #fff;
  padding: 20px 40px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14);
  margin: auto;
}

.logo {
  margin: auto;
  display: block;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #33e4ef;
  font-size: 24px;
}

h2 {
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.24);
  margin-bottom: 40px;
}

h2:hover {
  text-decoration: underline;
}

button {
  font-size: 24px;
  width: 300px;
  height: 60px;
  border-radius: 14px;
  border: 3px solid #33e4ef;
  color: #33e4ef;
  background: #fff;
  margin: 10px auto;
  display: block;
}

button:hover {
  border: 3px solid #20c4ce;
  color: #20c4ce;
}

.createAccount {
  border: 0;
  background: #33e4ef;
  color: #fff;
}

.createAccount:hover {
  background: #20c4ce;
  color: #fff;
}

input {
  display: inline-block;
  font-size: 20px;
  border: 0;
  box-sizing: border-box;
  color: #33e4ef;
  outline: 0;
}

.studentid,
.password {
  width: 300px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.16);
  padding: 14px 0;
  display: flex;
  align-items: center;
  margin: auto;
}

svg {
  display: inline-block;
  margin-right: 10px;
  fill: rgba(0, 0, 0, 0.24);
}

input::placeholder {
  color: rgba(0, 0, 0, 0.24);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>