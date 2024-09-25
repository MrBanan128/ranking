<template>
  <Header></Header>
  <table>
    <tr>
      <td>ID</td>
      <td>NAZWA</td>
      <td>EMAIL</td>
      <td>STATUS</td>
      <td>HASŁO</td>
      <td>EDYTUJ UPRAWNIENIA</td>
      <td>USUŃ</td>
    </tr>
    <tr v-for="user in users" :key="users.id">
      <td>{{ user.id }}</td>
      <td>{{ user.nazwa }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.status }}</td>
      <td>{{ user.haslo }}</td>
      <td>
        <router-link :to="'/user/updateUsers/' + user.id" class="update"
          >Update</router-link
        >
      </td>
      <td>
        <button v-on:click="deleteClub(user.id)" class="delete">Delete</button>
      </td>
    </tr>
  </table>
</template>
<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Users",
  data() {
    return {
      users: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async loadData() {
      let result = await axios.get("http://localhost:3000/uzytkownicy/");
      this.users = result.data;
    },
    async UpdateUser() {
      this.$router.push({ name: "updateUsers" });
    },
    async deleteClub(id) {
      let result = await axios.delete(
        "http://localhost:3000/uzytkownicy/" + id
      );
      console.log(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
  },
  async mounted() {
    this.loadData();
    try {
      let user = localStorage.getItem("user-info");
      if (user) {
        let parsedUser = JSON.parse(user);
        this.userInfo = parsedUser;
        if (parsedUser.status === "admin") {
          this.isAdmin = true;
        } else {
          // Przekierowanie, jeśli użytkownik nie jest adminem
          this.$router.push({name: "home"});
        }
      }
      else {
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
