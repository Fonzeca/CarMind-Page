<template>
  <b-container id="EE" class="bv-example-row seccion2" fluid>
      <b-row>
        <b-col cols="12" md="6">
          <b-row>
            <b-col cols="12 mg auto_alto">
                <img class="d-block d-sm-block d-md-none img-responsive img_cc c99_L" src="@/assets/D/99.png">
            </b-col>
            <b-col cols="12 mg d-none d-sm-none d-md-block auto_alto"  >
                <img class="img-responsive c9_L " src="@/assets/D/9_L.png">
                <img class="img-responsive c9_R " src="@/assets/D/9_R.png">
                <!-- <img class="img-responsive c9_L animate__animated" src="@/assets/D/9_L.png">
                <img class="img-responsive c9_R animate__animated animate__fadeInLeft animate__slow" src="@/assets/D/9_R.png"> -->
                <!-- <img class="img-responsive img_cc c11_L" src="@/assets/D/11_L.png">
                <img class="img-responsive img_cc c12_L" src="@/assets/D/12_L.png">
                <img class="img-responsive img_cc c13_L" src="@/assets/D/13_L.png"> -->
            </b-col>
            <b-col cols="12">
                <h3 class="text-center obten">
                    Obtén el total control de tu flota con CarMind: <br>
                    el sistema intuitivo y fácil de usar. 
                </h3>
                <b-button variant="success btn-h" @click="toDemo">
                    <span> <span class="sobrante_cel">Solicitá tu </span> demo gratuita aquí</span>
                </b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" md="6">
          <h2 class="control_a">
            <span class="azul_control">Control total </span>en <br>
            una sola herramienta <br>
            completamente <br>
            unificada 
          </h2>
          <b-list-group class="linksGrupo">
            <b-list-group-item>
                <img src="@/assets/A/3_S.png" class="img-responsive img_ok">
                Controlar los costos del Transporte.
            </b-list-group-item>
            <br>
            <b-list-group-item>
                <img src="@/assets/A/3_S.png" class="img-responsive img_ok">
                Rastrear el desempeño del conductor con visibilidad en tiempo real.
            </b-list-group-item>
            <br>
            <b-list-group-item>
               <img src="@/assets/A/3_S.png" class="img-responsive img_ok"> 
               Obtener la información necesaria sobre el estado de cada vehiculo.
            </b-list-group-item>
            <br>
            <b-list-group-item>
                <img src="@/assets/A/3_S.png" class="img-responsive img_ok">
                Digitalizar tus procesos para agilizar los mismos.
            </b-list-group-item>
            <br>
            <b-list-group-item>
                <img src="@/assets/A/3_S.png" class="img-responsive img_ok">
                Optimizar los flujos de trabajo y la comunicación entre las partes involucradas.
            </b-list-group-item>
            <br>
            <b-list-group-item>
                <img src="@/assets/A/3_S.png" class="img-responsive img_ok">
                Recopilar datos para mejorar la toma de decisiones.
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>  
</template>
<style>
    .auto_alto{
        height: auto !important;
    }
    .mg{
        margin-top: 8.5vh !important;
    }
    .linksGrupo{
        text-align: left;
        font-family: 'Nunito';
    }
    .linksGrupo .list-group-item{
        border-color:transparent;
    }
    .control_a{
        padding-top: 15vh;
        text-align: left;
        font-family: "Archivo";
        font-weight: 900;
        text-transform: uppercase;
        margin-left: 20px;
    }
    .azul_control{
        color:blue;
    }
    .img_cc{
        position:absolute;
    }
    .c9_L{
        margin-bottom: 10em;
        position: relative;
        left: 5em;
        width: 25em;
        top: 2em;
    }
    .c9_L:hover{
    }
    .c9_R{
        position: absolute;
        left: -3em;
        width: 45em;
        margin-top: -75px;
    }
    .c9_R:hover{
    }
    .c99_L{
        width: 40vw;
        left: 2vw;
        top: -5vh;
        position: relative;
    }
    .c10_L{
        width: 20vw;
        left: 8vw;  
    }
    .c11_L{
        position: relative;
        width: 18vw;
        left: 4vw;
        top: -27vh;
    }
    .c12_L{
        position: relative;
        width: 16vw;
        left: -5vw;
        top: -80vh;
    }
    .c13_L{
        position: relative;
        width: 19vw;
        left: -9.1vw;
        top: -35em;
        height: 25em;
    }
    .obten{
        font-family: "Archivo";
        font-weight: 900;
        font-size: 1.3rem;
        margin-top:-35px;
        color: blue;
    }
    .btn-h{
        text-transform: uppercase;
        width: 30vw;
    }
    .img_ok{
        width: 25px;
    }
    /* On screens that are 992px or less, set the background color to blue */
    @media screen and (max-width: 992px) {
        .control_a{
            margin-left: 3vw;;
        }
        .sobrante_cel{
            display: none;
        }
    }

    /* On screens that are 600px or less, set the background color to olive */
    @media screen and (max-width: 600px) {
        .control_a{
            text-align: left;
            font-family: "Archivo";
            font-weight: 900;
            text-transform: uppercase;
            margin-left: 5px;
        }
        .btn-h{
            width: 75vw;
        }
        .c99_L {
            width: 90vw;
        }
        .sobrante_cel{
            display: none;
        }
    }
</style>
<script>
    import simpleParallax from 'simple-parallax-js';

    export default {
        name: 'E',  
        mounted(){
            let R = document.querySelectorAll('.c9_R');
            let L = document.querySelectorAll('.c9_L');
            new simpleParallax(L, {
                delay: 0,
                orientation: 'right',
                scale: 1.2,
                overflow: true,
                delay: .6
            });
            new simpleParallax(R, {
                delay: 0,
                orientation: 'left',
                scale: 1.2,
                overflow: true,
                delay: .6
            });
        },
        methods:{
            toDemo() {
                this.$gtag.event('click-demo', { method: 'Google' })
                window.location.href = '/demo';
            },
        }
    }
</script>