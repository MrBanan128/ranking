<template>
  <Header />
  <img src="../components/icons/logo.png" />
  <div class="login">
    <input type="text" password placeholder="Enter email" v-model="email" />
    <input type="password" placeholder="Enter password" v-model="password" />
    <button type="button">Login</button>
    <p>
      <a href="/Register">Register</a>
    </p>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  name: "Login",
  data() {
    email: "";
    password: "";
  },
  components: {
    Header,
  },
};
</script>

<style></style>
