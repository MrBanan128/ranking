<template>
  <div class="nav">
    <!-- Wyświetla się zawsze -->
    <router-link to="/">Home</router-link>

    <!-- Wyświetla się tylko gdy użytkownik NIE jest zalogowany -->
    <router-link v-if="!czyZalogowany" to="/login">Login</router-link>
    
    <!-- Wyświetla się tylko gdy użytkownik jest zalogowany i jest adminem -->
    <router-link v-if="czyZalogowany && czyAdmin" to="/admin">Admin</router-link>

    <!-- Wyświetla się tylko gdy użytkownik jest zalogowany i jest adminem -->
    <router-link v-if="czyZalogowany && czyAdmin" to="/users">Użytkownicy</router-link>

    <!-- Wyświetla się tylko gdy użytkownik jest zalogowany (admin lub zwykły użytkownik) -->
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
      // Sprawdza czy użytkownik jest zalogowany
      let user = localStorage.getItem("user-info");
      if (user) {
        user = JSON.parse(user);
        this.czyZalogowany = true;

        // Sprawdza, czy użytkownik jest adminem
        this.czyAdmin = user.status === "admin"; 
      } else {
        this.czyZalogowany = false;
        this.czyAdmin = false;
      }
    },
    logout() {
      localStorage.clear();
      this.czyZalogowany = false;
      this.czyAdmin = false;
      this.$router.push("/login");
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
