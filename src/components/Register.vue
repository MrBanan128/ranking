<template>
  <Header />
  <img src="../components/icons/logo.png" />
  <div class="register">
    <input type="text" placeholder="Enter name" v-model="nazwa" />
    <p v-if="nameError">{{ nameError }}</p>
    <input type="text" placeholder="Enter email" v-model="email" />
    <p v-if="emailError">{{ emailError }}</p>
    <input type="password" placeholder="Enter password" v-model="haslo" />
    <p v-if="passwordError">{{ passwordError }}</p>
    <button type="button" v-on:click="register()">Register</button>
    <p><router-link to="/login">Login</router-link></p>
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
      nameError: "",
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
    validate() {
      this.nameError = "";
      this.emailError = "";
      this.passwordError = "";
      this.errorMessage = "";

      let valid = true;

      if (!this.nazwa) {
        this.nameError = "Nazwa jest wymagana.";
        valid = false;
      }

      if (!this.email) {
        this.emailError = "Email jest wymagany.";
        valid = false;
      } else if (!this.validateEmail(this.email)) {
        this.emailError = "Zły format emaila";
        valid = false;
      }

      if (!this.haslo) {
        this.passwordError = "Hasło jest wymagane.";
        valid = false;
      }

      return valid;
    },

    async register() {
      if (!this.validate()) {
        return;
      }
      try {
        let checkResult = await axios.get(
          `http://localhost:3000/uzytkownicy?email=${this.email}`
        );
        if (checkResult.data.length > 0) {
          this.emailError = "Ten email jest już zarejestrowany.";
          return;
        }
        let result = await axios.post("http://localhost:3000/uzytkownicy", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        if (result.status == 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "home" });
        } else {
          this.errorMessage = "Rejestracja nie udała się. Spróbuj ponownie.";
        }
      } catch (error) {
        this.errorMessage =
          "Podczas rejestracji wystąpił błąd. Spróbuj ponownie.";
      }
    },
    mounted() {
      let user = localStorage.getItem("user-info");
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
