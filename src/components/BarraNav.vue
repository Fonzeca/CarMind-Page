 <template>
   <b-navbar 
    id="BarraNav" 
    toggleable="lg" 
    variant="faded" 
    sticky 
    class="barraNav blanco_fondo">
    <!-- type="light"  -->
        <b-navbar-brand to="/">
        <img 
          src="@/assets/logoCard.png" 
          alt="Logo">
        CarMind
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        
        <b-navbar-nav class="ml-auto blanco_fondo derechaNav" right>
            <b-navbar-nav  right>
            <b-nav-item style="margin-top: 10px;" to="/clientes">CLIENTES</b-nav-item>
            <b-nav-item style="margin-top: 10px;" to="/precios">PRECIOS</b-nav-item>
            <b-nav-item style="margin-top: 10px;" to="/nosotros">NOSOTROS</b-nav-item>
            <b-nav-item style="margin-top: 10px;" to="/contactos">CONTACTOS</b-nav-item>
            <b-nav-item href="https://carmind-app.com">
                <b-button variant="success" >INGRESO</b-button>
            </b-nav-item>
            <b-nav-item href="/demo">
                <b-button variant="primary" class="azul_gradiente">DEMO GRATUITA</b-button>
            </b-nav-item>
            </b-navbar-nav>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar> 
    
</template>


<script>
  export default {
    name: 'BarraNav',
    data () {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
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
  color: #B6E802;
}

.btn-success{
  background-color: #B6E802 !important;
  border-color: #B6E802 !important;
  color: #051937 !important;
} 

.btn-primary{
  background-color: #0078FF !important;
  border-color: #0078FF !important;
  color: #fff !important;
}

.btn-success, .btn-primary{
  padding: 10px !important;
  height: 2.5rem;
  margin-top: 1px !important;
  font-size: 1em !important;
  font-weight: 900 !important;
  border-radius: 0.70rem !important;
}

.navbar-light .navbar-nav .nav-link{
  color: black !important;
  font-size: 1em !important;
  font-weight: 900 !important;
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


.barraNav{
  height: 14vh;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}
.navbar-brand{
  font-weight: 400;
  font-size: 2.25rem !important;
  font-family: 'archivo', sans-serif;
  font-weight: 600;
}

.navbar-brand img{
  height: 2em !important;
}

.derechaNav{
  margin-right: 0px;
  text-align: right;
  margin-left: 10vw;
}
/* 
derechaNav en celular
.derechaNav{
  position: absolute;
  height: 100vh !important;
  width: 100vw !important;
  left: -112px;
} 
*/

.derechaNav li{
  padding: 8px;
  font-size: 12px;
  color: black;
}

</style>
