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
  font-family: 'Nunito', sans-serif;
  /* padding: 10px !important; */
  height: 2.5rem;
  margin-top: 1px !important;
  font-size: 1em !important;
  font-weight: 900 !important;
  border-radius: 0.70rem !important;
}

.navbar-light .navbar-nav .nav-link{
  color: #1A1A1A !important;
  font-size: 1vw !important;
  font-weight: 400 !important;
}



.dark{
  background-color: #1A1A1A;
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
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-left: 3rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}

.navbar-brand img{
  height: 2em !important;
}

.derechaNav{
  right: 4vw;
  text-align: right;
  position: absolute;
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
  color: #1A1A1A;
  font-family: "Nunito";
  font-weight: 300;
}


/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 992px) {

}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  .navbar-brand{
    margin-left: 0rem;
   }
  .derechaNav{
    right: 0vw;
    text-align: center;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .derechaNav li{
    padding: 8px;
    color: #1A1A1A;
    font-family: "Nunito";
    font-weight: 300;
  }

  .btn-success, .btn-primary{
    font-family: 'Nunito', sans-serif;
    /* padding: 10px !important; */
    height: 2.5rem;
    margin-top: 1px !important;
    font-size: 2vh !important;
    font-weight: 900 !important;
    border-radius: 0.70rem !important;
  }

  .navbar-light .navbar-nav .nav-link{
    color: #1A1A1A !important;
    font-size: 5vw !important;
    font-weight: 389 !important;
  }
  .navbar-collapse{
    position: fixed;
    top: 14vh;
    left: 0px;
    width: 100%;
    height: 100vh;
  }
}

</style>
