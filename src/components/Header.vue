<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/add">Add</router-link>
    <router-link to="/admin">Admin</router-link>
    <a href="#" v-on:click="logout()">Logout</a>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("login");
    },
  },
};
</script>
<style scoped></style>
