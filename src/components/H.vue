<template>

    <b-container class="bv-example-row azul_gradiente seccion_corto" fluid>
      <b-row  class="pad_">
        
        <b-col cols="12" >
          <h4 class="text-center text_celu">
            Quiero gestionar mi flota de vehiculos.
          </h4>
          <img class="img-responsive img_celu" src="@/assets/G/20_l.png">
          <!-- <img class="img-responsive img_celu animate__animated animate__tada animate__infinite" src="@/assets/G/20_l.png"> -->
        </b-col>
        
        <b-col cols="12" >
          <b-button variant="success" to="/demo" class="f_btn">
            <span class="sobrante_">SOLICITA TU </span>DEMO GRATUITA <span class="sobrante_">AQUI</span>
          </b-button>
        </b-col>
      </b-row>
    </b-container>  


</template>

<style>
    .img_celu:hover{
        animation-play-state: running;
    }
    .img_celu{
        animation-play-state: paused;
        position: relative;
        height: 35vh;
        top: -25vh;
        right: -60vh;
        margin-bottom: -35vh;

    }
    .text_celu{
        color:whitesmoke;
        font-family: "Archivo";
        font-weight: 900;
        font-size: 1.8em;
    }
    .f_btn{
        font-family:"Nunito";
        width: 35vw !important;
    }
    .pad_{
        padding:10vh  ;
    }
    /* On screens that are 992px or less, set the background color to blue */
    @media screen and (max-width: 992px) {
        .img_celu{
            height: 25vh;
            top: 2vh;
            right: -25vh;
            margin-bottom: -15vh;
        }
        .text_celu{
            font-size: 1.5em;
        }
        .f_btn{
            width: 25vw !important;
        }
        .pad_{
            padding:5vh  ;
        }
        .sobrante_{
            display:none;
        }
    }

    /* On screens that are 600px or less, set the background color to olive */
    @media screen and (max-width: 600px) {
        .img_celu{
            height: 30vh;
            top: -0.2vh;
            right: 0vh;
            margin-bottom: -5vh;
        }
        .text_celu{
            font-size: 1.5em;
        }
        .f_btn{
            position: relative;
            top: 7vh;
            width: 75vw !important;
            margin-bottom: 10vh;
        }
        .pad_{
            padding:5vh  ;
        }
        .sobrante_{
            display:none;
        }
    }
</style>

<script>
    import simpleParallax from 'simple-parallax-js';

    export default {
        name: 'H',
        mounted(){
            let f = document.querySelectorAll('.pad_');
            new simpleParallax(f, {
                delay: 0,
                orientation: 'down',
                scale: 1.2,
                overflow: true,
                delay: .6,
                transition: 'cubic-bezier(0,0,0,1)'
            });
            let cel = document.querySelectorAll('.img_celu');
            new simpleParallax(cel, {
                delay: 0,
                orientation: 'up',
                scale: 1.8,
                overflow: true,
                delay: .6,
                transition: 'cubic-bezier(0,0,0,1)'
            });
        }
    }
</script>