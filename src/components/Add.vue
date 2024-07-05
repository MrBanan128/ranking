<template>
  <div class="add">
    <h1>Dodaj dane</h1>
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
    <button type="button" v-on:click="addClub()">Dodaj</button>
    <button type="button" class="cofnij" v-on:click="Back()">Cofnij</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Add",
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
    async addClub() {
      const result = await axios.post("http://localhost:3000/kluby", {
        nazwa: this.kluby.nazwa,
        miejsce: this.kluby.miejsce,
        rozgrywki: this.kluby.rozgrywki,
      });
      if (result.status == 201) {
        this.$router.push({ name: "admin" });
      }
    },
    Back() {
      this.$router.push({ name: "admin" });
    },
  },
  // mounted() {
  //   let user = localStorage.getItem("user-info");
  //   if (!user) {
  //     this.$router.push({ name: "register" });
  //   }
  // },
};
</script>
<style>
a {
  /* color: green; */
}
.cofnij {
  margin-top: 20px;
}
</style>
