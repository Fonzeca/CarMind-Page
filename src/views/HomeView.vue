<template>
  <div class="home">
    <Barra />
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Barra from '@/components/BarraNav.vue'
import Home from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    Home, 
    Barra
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-family: 'archivo', sans-serif;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  font-family: 'archivo', sans-serif;
  color: #42b983;
}

.seccion_corto{
  /*height: 28vh !important;*/
}

.seccion{
  /*height: 45vh !important;*/
}

.seccion2{
  /*height: 75vh !important;*/
}

.seccion3{
  /*height: 50vh !important;*/
  background-color: #051937;
}

.dark{
  background-color: black;
  color: white;
  /*padding: 5em;
  vertical-align:center;*/
}

.blanco_fondo{
  background-color: whitesmoke;
}


.azul_gradiente{
   background-image: linear-gradient(to right top, #4218D9, #0078FF);
}



</style>

