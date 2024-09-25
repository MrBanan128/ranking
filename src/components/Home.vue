<template>
<<<<<<< HEAD
  <div class="container">
    <Header />
    <img src="../components/icons/B_klasa.png" />
    <Footer />
  </div>
=======
  <Header />
  <img src="../components/icons/B_klasa.png" />
>>>>>>> b0ae4a7a3035519d5edd541d0dfc7aa3cdaf0114
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "HomePage",
  components: {
    Header,
<<<<<<< HEAD
    Footer,
=======
  },
  mounted() {
    
>>>>>>> b0ae4a7a3035519d5edd541d0dfc7aa3cdaf0114
  },
};
</script>

<style>
html, body {
  height: 100%; /* Ustalamy wysokość dla html i body */
  margin: 0; /* Usuwamy domyślne marginesy */
}

.container {
  display: flex; /* Używamy flexbox */
  flex-direction: column; /* Ustawiamy kierunek kolumnowy */
  justify-content: space-between; /* Ustawiamy przestrzeń między elementami */
  min-height: 100vh; /* Ustalamy minimalną wysokość na 100% wysokości okna */
}
</style>
