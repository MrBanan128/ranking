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
};
</script>

<style>
img {
  width: 400px;
  overflow: hidden;
  float: center;
}
</style>
