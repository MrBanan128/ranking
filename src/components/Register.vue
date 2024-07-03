<template>
  <img src="../components/icons/logo.png" />
  <div class="login">
    <input type="text" password placeholder="Enter name" v-model="name" />
    <input type="text" password placeholder="Enter email" v-model="email" />
    <input type="password" placeholder="Enter password" v-model="password" />
    <button type="button" v-on:click="register()">Register</button>
    <p><router-link to="/login">Login</router-link></p>
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Register",
  data() {
    name: "";
    email: "";
    password: "";
  },
  components: {
    Header,
  },
  methods: {
    async register() {
      let result = await axios.post("http://localhost:3000/uzytkownicy", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        localStorage.setItem("auth-token", result.data.token);
        this.$router.push({ name: "home" });
      } else {
        console.log("Result status is other");
      }
    },
    mounted() {
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: "Register" });
      } else {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style>
img {
  width: 400px;
  float: center;
}
</style>
