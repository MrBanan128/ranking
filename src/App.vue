<script></script>

<template>
  <RouterView />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  width: 400px;
}

.login input,
.update input,
.add input,
.register input {
  border: 2px #27ad93 solid;
  width: 300px;
  height: 60px;
  display: block;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  padding-left: 20px;
  margin-bottom: 30px;
  font-size: 20px;
}
.add button,
.login button,
.register button,
.update button {
  border: none;
  width: 320px;
  height: 60px;
  background-color: #27ad93;
  display: block;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  color: white;
  font-size: 20px;
  text-align: center;
}
a {
  font-size: 15px;
  text-decoration: none;
}
.nav {
  background-color: #27ad93;
  overflow: hidden;
}
.nav a {
  float: left;
  color: white;
  padding: 16px 18px;
  text-align: center;
  font-size: 20px;
  text-decoration: none;
  margin-right: 5px;
}
.nav a:hover {
  background-color: #ddd;
  color: #333;
}
</style>
