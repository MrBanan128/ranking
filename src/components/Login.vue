<template>
  <Header />
  <img src="../components/icons/logo.png" />
  <div class="login">
    <input type="text" placeholder="Podaj email" v-model="email" />
    <p v-if="emailError">{{ emailError }}</p>
    <input type="password" placeholder="Podaj haslo" v-model="haslo" />
    <p v-if="passwordError">{{ passwordError }}</p>
    <button type="button" v-on:click="login()">Zaloguj się</button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p>
      <a href="/Register">Zarejestruj</a>
    </p>
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      haslo: "",
      emailError: "",
      passwordError: "",
      errorMessage: "",
    };
  },
  components: {
    Header,
  },
  methods: {
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(email);
    },
    async login() {
      this.emailError = "";
      this.passwordError = "";
      this.errorMessage = "";

      console.log("Proba logowania " + this.email, this.haslo);

      if (!this.email) {
        this.emailError = "Email jest wymagany.";
      } else if (!this.validateEmail(this.email)) {
        this.emailError = "Niepoprawny format email.";
      }

      if (!this.haslo) {
        this.passwordError = "Hasło jest wymagane.";
      }

      if (this.emailError || this.passwordError) {
        console.log("Validation errors:", this.emailError, this.passwordError);
        return;
      }

      try {
        let result = await axios.get(
          `http://localhost:3000/uzytkownicy?email=${this.email}&haslo=${this.haslo}`
        );

        console.log(result);
        if (result.status == 200 && result.data.length > 0) {
          const user = result.data[0];
          console.log(
            "Użytkownik znaleziony: " + user.nazwa,
            user.haslo,
            user.email,
            user.status
          );

          if (user.haslo == this.haslo) {
            localStorage.setItem("user-info", JSON.stringify(user));

            if (user.status == "admin") {
              // console.log("Zalogowano jako admin");
              this.$router.push({ name: "admin" });
            } else if (user.status == "uzytkownik") {
              // console.log("Zalogowano jako uzytkownik");
              this.$router.push({ name: "home" });
            } else {
              this.errorMessage =
                "Niepoprawne dane logowania. Spróbuj ponownie.";
            }
          } else {
            this.errorMessage = "Niepoprawne dane logowania. Spróbuj ponownie.";
          }
        } else {
          this.errorMessage = "Niepoprawne dane logowania. Spróbuj ponownie.";
        }
      } catch {
        this.errorMessage =
          "Wystąpił błąd podczas logowania. Spróbuj ponownie.";
      }
    },
    mounted() {
      let user = localStorage.setItem("user-info");
      if (user) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style>
p {
  color: red;
  font-size: 12px;
}
</style>
