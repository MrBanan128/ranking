<template>
  <div class="container">
    <Header />
    <div class="container-two">
    <div class="logo">
      <img src="../components/icons/B_klasa.png" class="center-image" />
    </div>
    <div class="slider">
      <img src="/src/components/icons/men-play-socer-park-tournament-mini-footbal-guy-black-sportsuits.jpg" alt="">
    </div>
    <div class="aktualnosci">
      <h1>Aktualności</h1>
      <div class="artykuly">
        <div class="artykul-pierwszy">
          <div class="tekst">
            <h2>Tytuł Artykułu</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iusto nemo dolorum vel impedit architecto obcaecati placeat eaque quisquam eos laudantium possimus libero, rerum eveniet nesciunt hic veniam? Explicabo voluptatem est minima sit libero iure. Velit unde nemo odit aliquid, et iure fuga id reprehenderit excepturi voluptas vitae aperiam libero.</p>
          </div>
          <img src="/src/components/icons/medium-shot-kids-laying-grass.jpg" alt="">
        </div>
        <div class="sklep">
          <h2>Sklep kibica</h2>
          <img src="/src/components/icons/medium-shot-kids-laying-grass.jpg" alt="">
        </div>
        <div class="rozgrywki">
          <h2>Rozgrywki</h2>
          <img src="/src/components/icons/medium-shot-kids-laying-grass.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Ustawienia dla całej strony */
html, body {
  height: 100%; /* Ustawia 100% wysokości dla przeglądarki */
  width: 100%; /* Zajmuje całą szerokość */
  margin: 0;
  padding: 0;
}

/* Główny kontener, który rozciąga się na całą wysokość strony */
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh; /* Zajmuje minimum 100% wysokości strony */
}
.container-two{
  margin-left: 20%;
  margin-right: 20%;
  background-color: #f1f1f1;
}

/* Logo na środku */
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; /* Logo zajmuje dostępne miejsce między Headerem a Footerem */
}

/* Obrazek w logo */
.center-image {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Ustawienia dla stopki */
footer {
  margin-top: auto; /* Sprawia, że Footer będzie na dole */
  width: 100%; /* Footer zajmuje pełną szerokość */
  background-color: #f1f1f1; /* Przykładowy kolor tła dla stopki */
  padding: 20px;
  text-align: center;
}
.artykul-pierwszy{
  display: flex;
  align-items: flex-start;
  margin-left: 20%;
  margin-right: 20%;
  gap: 20px;
  text-align: left;
}
.artykul-pierwszy img{
  width: 40%;
  height: auto;
}
.artykul-pierwszy p{
  flex: 1;
  line-height: 1.6;
}
.tekst h2{
  text-align: center;
  color: #27ad93;
}

</style>
