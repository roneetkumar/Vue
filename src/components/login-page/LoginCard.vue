<template>
  <div class="loginWrapper">
    <form>
      <Logo :fill="'#33e4ef'" />
      <h1>Vox</h1>
      <Input :placeholder="'Student ID'" @idInput="stuIdInput" />
      <Input :placeholder="'Password'" @passInput="stuPassInput" />
      <button type="submit" @click.prevent="logIn">Submit</button>
      <h2>Forget Password ?</h2>
      <button class="createAccount" @click.prevent="logIn">Create Account</button>
      <h2>Fraincais</h2>
    </form>
  </div>
</template>

<script>
import Logo from "../../assets/logo";
import Input from "./input";

export default {
  props: {
    fill: String
  },
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
      // inputStudentID: "",
      // inputPassword: "",
      userFound: false
    };
  },
  methods: {
    logIn() {
      this.students.forEach(student => {
        if (student.id === sessionStorage.inputStudentID) {
          this.userFound = true;
          if (student.pass === sessionStorage.inputStudentPass) {
            // alert(`Welcome ${student.name}`);
            this.$emit("goHome", true);
          } else {
            alert("Wrong Password");
          }
        }
      });
      if (!this.userFound) {
        // alert("User Not Found");
      }
    },
    stuIdInput(value) {
      // this.inputStudentID = value;
      sessionStorage.inputStudentID = value;
    },
    stuPassInput(value) {
      // this.inputPassword = value;
      sessionStorage.inputStudentPass = value;
    }
  },
  beforeMount() {
    this.logIn();
  }
};
</script>

<style scoped>
.loginWrapper {
  position: relative;
  background: linear-gradient(340deg, #20c4ce 12%, #33e4ef 86%);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
  box-sizing: border-box;
}

form {
  position: relative;
  width: 100%;
  max-width: 450px;
  background: #fff;
  padding: 20px 40px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14);
  margin: auto;
  transition: transform 0.2s ease;
  /* top: 0;
  transform: translateY(0); */
  /* align-self: flex-end; */
}

@media (max-width: 500px) {
  form {
    /* top: 100%; */
    /* bottom: 0; */
    /* transform: translateY(-100px); */
  }
}

h2 {
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.24);
  margin-bottom: 40px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #33e4ef;
  font-size: 24px;
}

h2:hover {
  text-decoration: underline;
}

button {
  font-size: 24px;
  width: 100%;
  max-width: 300px;
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

input::placeholder {
  color: rgba(0, 0, 0, 0.24);
}
</style>