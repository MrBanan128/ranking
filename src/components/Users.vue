<template>
  <Header></Header>
  <table>
    <tr>
      <td>ID</td>
      <td>NAZWA</td>
      <td>EMAIL</td>
      <td>STATUS</td>
      <td>EDYTUJ UPRAWNIENIA</td>
    </tr>
    <tr v-for="user in users" :key="users.id">
      <td>{{ user.id }}</td>
      <td>{{ user.nazwa }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.status }}</td>
      <td>
        <router-link :to="'/user/updateUsers/' + user.id" class="update"
          >Update</router-link
        >
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
  },
  async mounted() {
    this.loadData();
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
