<template>
  <Header />
  <img src="../components/icons/logo.png" />
  <div class="register">
    <input type="text" placeholder="Enter name" v-model="name" />
    <input type="text" placeholder="Enter email" v-model="email" />
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
.navbar {
  background-color: #27ad93;
  overflow: hidden;
}
.navbar a {
  float: left;
  color: white;
  padding: 16px 18px;
  text-align: center;
  font-size: 20px;
  text-decoration: none;
  margin-right: 5px;
}
.navbar a:hover {
  background-color: #ddd;
  color: #333;
}
</style>
