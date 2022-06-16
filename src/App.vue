<template>
  <div id="app" class="container-full">
    <b-navbar toggleable="lg" variant="faded" type="light" sticky="true" class="barraNav blanco_fondo">
      <b-navbar-brand href="#">
        <img src="https://placekitten.com/g/30/30" alt="Kitten">
        CarMind
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto blanco_fondo">
          <b-navbar-nav right >
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
    <b-container class="bv-example-row azul_gradiente seccion" fluid>
      <b-row class="Digitaliza" align-v="stretch">
        <b-col>
          <h2>
            Digitaliza tus procesos <br>
            logisticos para lograr <br>          
            Eficiencia <br>          
            En tus servicios <br>          
          </h2>
        </b-col>
        <b-col>2 of 2</b-col>
      </b-row>
    </b-container>    


    <b-container class="bv-example-row seccion2" fluid>
      <b-row class="implementa" aling-v="stretch">
        <b-col>1 of 2</b-col>
        <b-col>
          <h2>
            Implementa el mejor <br>
            sistema de gestion <br>
            de transporte que <br>
            se adapte a tus necesidades <br>
          </h2>
          <h4>
            Cambiar a un ecosistema digital es <br>
            mas facil que nunca <br>
          </h4>
          <h6>
            Ponle fin a procesos desafiantes para tu empresa, <br>
            gestiona y preve los riesgos, reduce los costos innecesarios <br>
            de la logistica y obten una mayor visibilidad convirtiendo los  <br>
            datos en informacion relevante e impactando positivamente <br>
            en tu negocio <br>
          </h6>
        </b-col>
      </b-row>
      <b-row>
        <b-col aling-v="center" class="text-center">
          <h2 style="color:blue">
            CARDMIND permite a tu empresa <br>
            tener datos certeros y en un instante sobre:
          </h2>
        </b-col>
      </b-row>
    </b-container>  

    <b-container class="bv-example-row seccion3 dark" fluid>
      <b-row>
        <b-col>1 of 2</b-col>
        <b-col>2 of 2</b-col>
      </b-row>
    </b-container>  


    <b-container class="bv-example-row azul_gradiente seccion_corto" fluid>
      <b-row>
        <b-col>1 of 2</b-col>
        <b-col>2 of 2</b-col>
      </b-row>
    </b-container>  

    <b-container class="bv-example-row seccion2" fluid>
      <b-row>
        <b-col>1 of 2</b-col>
        <b-col>2 of 2</b-col>
      </b-row>
    </b-container>  

    <b-container class="bv-example-row seccion seccion_corto" fluid>
      <b-row>
        <b-col>1 of 2</b-col>
        <b-col>2 of 2</b-col>
      </b-row>
    </b-container>  

    <b-container class="bv-example-row seccion" fluid>
      <b-row>
        <b-col>1 of 2</b-col>
        <b-col>2 of 2</b-col>
      </b-row>
    </b-container>  

    <b-container class="bv-example-row seccion fondo_imagen" fluid>
      <b-row>
        <b-col>1 of 2</b-col>
        <b-col>2 of 2</b-col>
      </b-row>
    </b-container>  

    <b-container class="bv-example-row azul_gradiente seccion_corto" fluid>
      <b-row>
        <b-col>1 of 2</b-col>
        <b-col>2 of 2</b-col>
      </b-row>
    </b-container>  

    <b-container class="bv-example-row seccion dark" fluid>
      <b-row>
        <b-col>1 of 2</b-col>
        <b-col>2 of 2</b-col>
      </b-row>
    </b-container>  


  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
  font-weight: normal;
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
  color: #42b983;
}

.seccion_corto{
  height: 28vh !important;
}

.seccion{
  height: 45vh !important;
}

.seccion2{
  height: 75vh !important;
}

.seccion3{
  height: 50vh !important;
  background-color: #051937;
}

.dark{
  background-color: #051937;
}

.blanco_fondo{
  background-color: whitesmoke;
}

.azul_gradiente{
  background-color: blue;
   background-image: linear-gradient(to right top, #051937, #0d315f, #144b8b, #1767ba, #1284eb);
}

.barraNav{
  height: 14vh;
}

.navbar-brand{
  font-size: 2.25rem;
}

.navbar-brand img{
  height: 60px;
}

.Digitaliza{
  text-align: left;
  color: white;
  font-weight: 900;   
  padding: 5vw;
}

.implementa{
  text-align: left;
  color: black;
  font-weight: 900;   
  padding: 5vw;
}

</style>
