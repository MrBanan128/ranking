<template>
  <div class="update">
    <h1>Aktualizuj dane</h1>
    <input
      type="text"
      name="nazwa"
      placeholder="Wpisz nazwę"
      v-model="kluby.nazwa"
    />
    <input
      type="text"
      name="miejsce"
      placeholder="Wpisz miejsce"
      v-model="kluby.miejsce"
    />
    <input
      type="text"
      name="rozgrywki"
      placeholder="Wpisz rozgrywki"
      v-model="kluby.rozgrywki"
    />
    <button type="button" v-on:click="updateClub()">Update</button>
    <button type="button" class="cofnij" v-on:click="Back()">Cofnij</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "update",
  data() {
    return {
      kluby: {
        nazwa: "",
        miejsce: "",
        rozgrywki: "",
      },
    };
  },
  methods: {
    async updateClub() {
      const result = await axios.put(
        "http://localhost:3000/kluby/" + this.$route.params.id,
        {
          nazwa: this.kluby.nazwa,
          miejsce: this.kluby.miejsce,
          rozgrywki: this.kluby.rozgrywki,
        }
      );

      if (result.status == 200) {
        this.$router.push({ name: "admin" });
      }
    },
    Back() {
      this.$router.push({ name: "admin" });
    },
  },
  mounted() {
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
<style>
h1 {
  color: #27ad93;
}
</style>
