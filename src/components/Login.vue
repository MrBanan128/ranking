<template>
  <Header />
  <img src="../components/icons/logo.png" />
  <div class="login">
    <input type="text" placeholder="Enter email" v-model="email" />
    <p></p>
    <input type="password" placeholder="Enter password" v-model="password" />
    <p></p>
    <button type="button" v-on:click="login()">Login</button>
    <p>
      <a href="/Register">Register</a>
    </p>
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Login",
  data() {
    email: "";
    password: "";
  },
  components: {
    Header,
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/uzytkownicy?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));

        console.log(result.data[0].status);
        if (result.data[0].status == "admin") {
          this.$router.push({ name: "admin" });
        } else {
          this.$router.push({ name: "home" });
        }
      } else {
      }
      console.log(result);
    },
    mounted() {
      let user = localStorage.setItem("user-info");
      if (user) {
        this.$router.push({ name: "home" });
      } else {
        this.$router.push({ name: "register" });
      }
    },
  },
};
</script>

<style></style>
