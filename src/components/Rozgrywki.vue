<template >
    <div class="container">
        <Header />
        <div class="container-two">
            <H1>Rozgrywki</H1>
            <div class="tabela">
                <table>
                    <tr>
                        <td>Pozycja</td>
                        <td>Drużyna</td>
                        <td>Mecze</td>
                        <td>Punkty</td>
                        <td>Wygrane</td>
                        <td>Remisy</td>
                        <td>Porażki</td>
                        <td>⚽ + </td>
                        <td>⚽ - </td>
                        <td>Bilans</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<!-- Zrobic aby bilans obliczał się autoamtycznie za pomocą admina -->

<script>
import Header from './Header.vue';
export default {
    name: "Rozgrywki",
    components: {
        Header,
    }
}
</script>
<style>
.container-two h1{
    font-size: 50px;
    text-align: left;
}
.container{
    background-color: #f1f1f1;
}
.container-two {
    margin-left: 20%;
    margin-right: 20%;
}
.tabela table{
    border: rgb(8, 8, 17) 3px solid;
    display: block;
}
.tabela td {
    width: 160px;
    height: 40px;
  }
    
</style>