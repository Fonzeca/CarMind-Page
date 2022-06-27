<template>

    <b-container class="bv-example-row azul_gradiente seccion_corto" fluid>
      <b-row  class="pad_">
        
        <b-col cols="12" >
          <h4 class="text-center text_celu">
            Quiero gestionar mi flota de vehiculos.
          </h4>
          <img class="img-responsive img_celu" src="@/assets/G/20_l.png">
        </b-col>
        
        <b-col cols="12" >
          <b-button variant="success" to="/demo" class="f_btn">
            SOLICITA TU DEMO GRATUITA AQUI
          </b-button>
        </b-col>
      </b-row>
    </b-container>  


</template>

<style>
    .img_celu{
        position: relative;
        height: 35vh;
        top: -25vh;
        right: -50vh;
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
            top: -15vh;
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
    }

    /* On screens that are 600px or less, set the background color to olive */
    @media screen and (max-width: 600px) {
        .img_celu{
            height: 30vh;
            top: 0vh;
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
    }
</style>

<script>
    export default {
        name: 'H'
    }
</script>