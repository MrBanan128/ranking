<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link v-if="!czyZalogowany" to="/login">Login</router-link>
    <router-link v-if="czyAdmin" to="/admin">Admin</router-link>
    <router-link v-if="czyZalogowany" to="/users">Uzytkownicy</router-link>
    <a v-if="czyZalogowany" href="#" v-on:click="logout()">Logout</a>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      czyZalogowany: false,
      czyAdmin: false,
    };
  },
  methods: {
    checkLoginStatus() {
      let user = localStorage.getItem("user-info");
      if (user) {
        user = JSON.parse(user);
        this.czyZalogowany = true;
        this.czyAdmin = user.status === "admin";
      } else {
        this.czyZalogowany = false;
        this.czyAdmin = false;
      }
    },
    logout() {
      localStorage.clear();
      this.isLoggedIn = false;
      this.isAdmin = false;
      this.$router.push("login");
    },
  },
  mounted() {
    this.checkLoginStatus();
  },
  watch: {
    $route() {
      this.checkLoginStatus();
    },
  },
};
</script>
<style scoped>
.nav {
  display: flex;
  gap: 10px;
}
</style>
