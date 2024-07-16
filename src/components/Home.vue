<template>
  <Header />
  <img src="../components/icons/logo.png" />
</template>
<script>
import Header from "./Header.vue";

export default {
  name: "HomePage",
  data() {},
  components: {
    Header,
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

<style></style>
