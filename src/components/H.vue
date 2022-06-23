<template>

    <b-container class="bv-example-row azul_gradiente seccion_corto" fluid>
      <b-row  style="padding:10vh  ;">
        
        <b-col cols="12" >
          <h4 class="text-center text_celu">
            Quiero gestionar mi flota de vehiculos.
          </h4>
          <img class="img-responsive img_celu" src="@/assets/G/20_l.png">
        </b-col>
        
        <b-col cols="12" >
          <b-button variant="success" class="f_btn">
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
</style>

<script>
    export default {
        name: 'H'
    }
</script>