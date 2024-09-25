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
        id: null, // Dodajemy pole id, które będzie generowane
        nazwa: "",
        miejsce: "",
        rozgrywki: "",
      },
    };
  },
  methods: {
    async addClub() {
      try {
        // Pobierz istniejące kluby, aby uzyskać maksymalne ID
        const response = await axios.get("http://localhost:3000/kluby");
        const kluby = response.data;

        // Generowanie nowego ID na podstawie maksymalnego ID w istniejących klubach
        const newId = kluby.length > 0 ? Math.max(...kluby.map(klub => klub.id)) + 1 : 1;

        // Dodajemy nowy klub z unikalnym ID
        const result = await axios.post("http://localhost:3000/kluby", {
          id: newId, // Przypisujemy nowo wygenerowane ID
          nazwa: this.kluby.nazwa,
          miejsce: this.kluby.miejsce,
          rozgrywki: this.kluby.rozgrywki,
        });

        // Sprawdzamy, czy dodanie klubu się powiodło
        if (result.status === 201) {
          this.$router.push({ name: "admin" }); // Przekierowujemy do panelu admina
        }
      } catch (error) {
        console.error("Błąd podczas dodawania klubu:", error);
      }
    },
    Back() {
      this.$router.push({ name: "admin" }); // Cofnij do panelu admina
    },
  },
  async mounted() {
    try {
      let user = localStorage.getItem("user-info");
      if (user) {
        this.userInfo = JSON.parse(user); // Parsujemy dane użytkownika
      } else {
        this.$router.push({ name: "register" }); // Przekierowanie do rejestracji, jeśli użytkownik nie jest zalogowany
      }
    } catch (error) {
      console.error("Failed to parse user info from localstorage", error);
      this.$router.push({ name: "register" });
    }
  },
};
</script>

<style>
.cofnij {
  margin-top: 20px; 
}
</style>
