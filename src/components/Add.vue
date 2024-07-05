<template>
  <div>Hello on Add page</div>
  <div class="add">
    <h1>Aktualizuj dane</h1>
    <input
      type="text"
      name="nazwa"
      placeholder="Wpisz nazwę"
      v-model="kluby.nazwa"
    />
    <input
      type="text"
      name="miejsce"
      placeholder="Wpisz miejsce"
      v-model="kluby.miejsce"
    />
    <input
      type="text"
      name="rozgrywki"
      placeholder="Wpisz rozgrywki"
      v-model="kluby.rozgrywki"
    />
    <button type="button" v-on:click="updateClub()">Update</button>
  </div>
</template>
<script>
export default {
  name: "Add",
  data() {
    return {
      nazwa: "",
      miejsce: "",
      rozgrywki: "",
    };
  },
};
</script>
<style></style>
