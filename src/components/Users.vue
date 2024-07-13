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
        <button v-on:click="changeStatus(klub.id)" class="delete">
          Change Status
        </button>
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
      let result = await axios.get("http://localhost:3000/uzytkownicy");
      this.users = result.data;
    },
    changeStatus() {},
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style></style>
