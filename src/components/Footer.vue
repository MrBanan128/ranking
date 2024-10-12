<template>
    <div class="footer">
      <div class="sections">
        <!-- Dodaj sekcje dla użytkowników -->
        <h4>8 Liga Mistrzów</h4>
        <a href="#">Sekcja 1sadawda </a>
        <a href="#">Sekcja 2</a>
        <a href="#">Sekcja 3ddddddddddddddddddddddddddddddddd</a>
        <a href="#">Sekcja 4</a>
      </div>
      <div class="sections">
        <h4>Kontakt</h4>
        <p><strong>Telefon:</strong> +48 777 777 777</p>
        <p><strong>Adres:</strong> Warszawa Słodka 14/2</p>
        <p><strong>E-mail:</strong> 8_liga_mistrzow_contact@gmail.com</p>
        <!-- LINKI DO SOCIALI -->
        <h4>Śledź nas w mediach społecznościowych</h4>
        <div class="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./icons/facebook_2504903.png" alt="facebook" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';">
            <span style="display:none;"> Facebook</span>
          </a>
        
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./icons/instagram_2111463.png" alt="instagram" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';">
            <span style="display:none;"> Instagram</span>
          </a>
        
          <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
            <img src="./icons/twitter-alt-square_12107611.png" alt="x" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block';">
            <span style="display:none;"> X</span>
          </a>
        </div>
        
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "footer",
  };
  </script>
  
<style>

.footer{
  display: flex;
  background-color: #f8f9fa;
  gap: 10px;
  padding: 20px; /* Odstępy wewnętrzne */
  justify-content: space-between;
  border-top: 1px solid #dee2e6;
}
.sections {
  flex: 1; /* Daje równe miejsce dla sekcji */
  justify-content: flex-start;
  margin-left: 5%;
}
.sections h4 {
  margin-bottom: 10px; /* Odstęp pod nagłówkiem */
}
.sections a {
  display: block; /* Każdy link w nowej linii */
  margin: 5px 0; /* Odstępy między linkami */
  text-decoration: none; /* Usuń podkreślenie */
  color: #007bff; /* Ustaw kolor linków */
}
.sections p,a,h4 {
  margin:4px 0;
  text-align: left;
}
.sections a:hover {
  text-decoration: underline; /* Podkreślenie linku na hover */

  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left; /* Ustawia wyrównanie tekstu do lewej */
  margin: 20px; /* Opcjonalnie możesz dodać margines, aby dodać przestrzeni wokół sekcji */
  padding-left: 50px;
}
.sections h4 {
  margin-bottom: 10px; /* Odstęp pod nagłówkiem */
}
.sections a {
  display: block; /* Każdy link w nowej linii */
  margin: 5px 0; /* Odstępy między linkami */
  text-decoration: none; /* Usuń podkreślenie */
  color: #007bff; /* Ustaw kolor linków */
}
.sections a:hover {
  text-decoration: underline; /* Podkreślenie linku na hover */
}
.contact h4 {
  margin-bottom: 10px; /* Dodaj odstęp pod nagłówkiem */
}
.contact p {
  margin: 5px 0; /* Ustaw odstępy nad i pod paragrafami */
}
.social-links {
  display: flex; /* Używamy flexboxa do wyświetlania linków */
  gap: 15px;
  flex-direction: row;
}
.social-links a {
  text-decoration: none; /* Usuwa podkreślenie z linków */
  color: #007bff; /* Kolor linków (niebieski) */
}
  
.social-links a:hover {
  text-decoration: underline; /* Podkreślenie podczas najechania myszką */
}
.social-links i {
  margin-right: 5px; /* Dodaj odstęp między ikoną a tekstem */
}
.social-links img{
  width: 30px;
}
  </style>
  