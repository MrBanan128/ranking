<template>
  <Header />
  <img src="../components/icons/logo.png" />
  <div class="register">
    <input type="text" placeholder="Wpisz nazwę" v-model="nazwa" />
    <p v-if="nazwaError">{{ nazwaError }}</p>
    <input type="text" placeholder="Wpisz email" v-model="email" />
    <p v-if="emailError">{{ emailError }}</p>
    <input type="password" placeholder="Wpisz hasło" v-model="haslo" />
    <p v-if="hasloError">{{ hasloError }}</p>
    <button type="button" v-on:click="register()">Zarejestruj</button>
    <p><router-link to="/login">Zaloguj się</router-link></p>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      nazwa: "",
      email: "",
      haslo: "",
      nazwaError: "",
      emailError: "",
      hasloError: "",
      errorInfo: "",
    };
  },
  components: {
    Header,
  },
  methods: {
    // Funkcja do walidacji formatu emaila
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(email);
    },

    // Funkcja do walidacji danych w formularzu
    validate() {
      this.nazwaError = "";
      this.emailError = "";
      this.hasloError = "";
      this.errorInfo = "";

      let valid = true;

      // Sprawdzenie, czy nazwa jest podana
      if (!this.nazwa) {
        this.nazwaError = "Nazwa jest wymagana.";
        valid = false;
      }

      // Sprawdzenie, czy email jest podany oraz czy ma odpowiedni format
      if (!this.email) {
        this.emailError = "Email jest wymagany.";
        valid = false;
      } else if (!this.validateEmail(this.email)) {
        this.emailError = "Zły format emaila";
        valid = false;
      }

      // Sprawdzenie, czy hasło jest podane
      if (!this.haslo) {
        this.hasloError = "Hasło jest wymagane.";
        valid = false;
      }

      return valid; // Zwracamy wynik walidacji
    },

    // Funkcja do rejestracji użytkownika
    async register() {
      // Sprawdzenie walidacji przed rejestracją
      if (!this.validate()) {
        return; // Jeśli walidacja nie powiodła się, kończymy funkcję
      }
      try {
        // Sprawdzamy, czy email jest już zarejestrowany
        let checkResult = await axios.get(
          `http://localhost:3000/uzytkownicy?email=${this.email}`
        );
        if (checkResult.data.length > 0) {
          this.emailError = "Ten email jest już zarejestrowany.";
          return; // Kończymy, jeśli email już istnieje
        }

        // Pobieramy wszystkich użytkowników, aby znaleźć ostatnie ID
        let usersResult = await axios.get("http://localhost:3000/uzytkownicy");
        let uzytkownicy = usersResult.data;
        
        // Znajdujemy najwyższe ID i zwiększamy je o 1
        let newId = uzytkownicy.length > 0 ? Math.max(...uzytkownicy.map(user => user.id)) + 1 : 1;

        // Tworzymy nowego użytkownika z nowym ID
        let result = await axios.post("http://localhost:3000/uzytkownicy", {
          id: newId,  // Używamy nowego ID
          nazwa: this.nazwa,
          email: this.email,
          haslo: this.haslo,
          status: "uzytkownik" // Domyślny status dla nowego użytkownika
        });

        // Sprawdzamy, czy rejestracja zakończyła się sukcesem
        if (result.status == 201) {
          // Zapisujemy dane użytkownika w localStorage
          localStorage.setItem("user-info", JSON.stringify(result.data));
          // Przekierowujemy do strony głównej
          this.$router.push({ name: "home" });
        } else {
          this.errorInfo = "Rejestracja nie udała się. Spróbuj ponownie.";
        }
      } catch (error) {
        // Obsługa błędów podczas rejestracji
        this.errorInfo = "Podczas rejestracji wystąpił błąd. Spróbuj ponownie.";
      }
    },

    // Funkcja uruchamiana po zamontowaniu komponentu
    mounted() {
      let user = localStorage.getItem("user-info");
      // Sprawdzamy, czy użytkownik jest już zalogowany
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
  display: block;
  margin: 0 auto;
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
p {
  color: red; 
  font-size: 18px; 
}
</style>
