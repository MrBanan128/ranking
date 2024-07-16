<template>
  <div class="update">
    <h1>Aktualizuj dane</h1>
    <input
      type="text"
      name="nazwa"
      placeholder="Wpisz nazwę"
      v-model="users.nazwa"
    />
    <input
      type="text"
      name="miejsce"
      placeholder="Wpisz email"
      v-model="users.email"
    />
    <input
      type="text"
      name="rozgrywki"
      placeholder="Wpisz status"
      v-model="users.status"
    />
    <button type="button" v-on:click="updateUser()">Update</button>
    <button type="button" class="cofnij" v-on:click="Back()">Cofnij</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "updateUsers",
  data() {
    return {
      users: {
        nazwa: "",
        email: "",
        status: "",
      },
    };
  },
  methods: {
    Back() {
      this.$router.push({ name: "users" });
    },
    async updateUser() {
      const result = await axios.put(
        "http://localhost:3000/uzytkownicy/" + this.$route.params.id,
        {
          nazwa: this.users.nazwa,
          email: this.users.email,
          status: this.users.status,
        }
      );
      console.log(this.users.nazwa, this.users.email, this.users.status);
      if (result.status == 200) {
        this.$router.push({ name: "users" });
      }
    },
  },
  async mounted() {
    try {
      let user = localStorage.getItem("user-info");
      if (user) {
        this.userInfo = JSON.parse(user);
      } else {
        this.$router.push({ name: "register" });
      }
    } catch (error) {
      console.error("Failed to parse user info from localstorage", error);
      this.$router.push({ name: "register" });
    }
  },
};
</script>
<style></style>
