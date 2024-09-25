<template>
    <div class="footer">
      <div class="sections">
        <!-- Dodaj sekcje dla użytkowników -->
        <h4>8 Liga Mistrzów</h4>
        <a href="#">Sekcja 1</a>
        <a href="#">Sekcja 2</a>
        <a href="#">Sekcja 3</a>
        <a href="#">Sekcja 4</a>
      </div>
      <div class="contact">
        <h4>Kontakt</h4>
        <p><strong>Telefon:</strong> +48 777 777 777</p>
        <p><strong>Adres:</strong> Warszawa Słodka 14/2</p>
        <p><strong>E-mail:</strong> 8_liga_mistrzow_contact@gmail.com</p>
        <!-- LINKI DO SOCIALI -->
        <h4>Śledź nas w mediach społecznościowych</h4>
        <div class="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
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
.sections, .contact {
  flex: 1; /* Daje równe miejsce dla sekcji */
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

h4{
  margin-bottom: 40px;
}
.social-links {
  display: flex; /* Używamy flexboxa do wyświetlania linków */
  gap: 15px;
}
.social-links a {
  text-decoration: none; /* Usuwa podkreślenie z linków */
  color: #007bff; /* Kolor linków (niebieski) */
}
  
  .social-links a:hover {
    text-decoration: underline; /* Podkreślenie podczas najechania myszką */
  }
  </style>
  