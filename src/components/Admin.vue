<template>
  <Header />
  <div class="admin">

    <table>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Location</td>
        <td>League</td>
        <td>Update</td>
        <td>Delete</td>
      </tr>
      <tr v-for="klub in kluby" :key="klub.id">
        <td>{{ klub.id }}</td>
        <td>{{ klub.nazwa }}</td>
        <td>{{ klub.miejsce }}</td>
        <td>{{ klub.rozgrywki }}</td>
        <td>
          <router-link :to="'update/' + klub.id" class="update"
          >Update</router-link
          >
        </td>
        <td>
          <button v-on:click="deleteClub(klub.id)" class="delete">Delete</button>
        </td>
      </tr>
    </table>
  </div>
  <button class="add-button" v-on:click="GoAdd()">Add</button>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "admin",
  components: {
    Header,
  },
  data() {
    return {
      kluby: [],
    };
  },
  methods: {
    GoAdd() {
      this.$router.push("add");
    },
    logout() {
      localStorage.clear();
      this.$router.push("login");
    },
    async loadData() {
      let result = await axios.get("http://localhost:3000/kluby/");
      this.kluby = result.data;
    },
    async deleteClub(id) {
      let result = await axios.delete("http://localhost:3000/kluby/" + id);
      console.log(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
  },
  /** TODO
   * dodać druzyny
   * zmienić w headerze z admin na druzyny
   * wymyśleć co admin mógłby mieć
   * segregacja rozgrywek
   * newsletter
   * sponsorzy
   */


  async mounted() {
    this.loadData();
    try {
      let user = localStorage.getItem("user-info");
      if (user) {
        this.userInfo = JSON.parse(user);
        if (this.userInfo.status !== "admin") {
          this.$router.push({ name: "home" });
        }
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
.admin td {
  width: 160px;
  height: 40px;
}
.add-button,
.update button {
  background-color: #27ad93;
  border: none;
  cursor: pointer;
  width: 320px;
  height: 60px;
  font-size: 20px;
  margin-top: 20px;
  color: white;
}
.admin table {
  border: rgb(4, 4, 63) 3px solid;
  display: block;
  background-color: #27ad93;
  color: white;
}
.update {
  font-size: 16px;
}
.delete {
  width: 100px;
  background-color: rgb(4, 4, 63);
  color: white;
}
</style>
