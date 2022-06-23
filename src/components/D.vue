<template>
    <b-container class="bv-example-row azul_gradiente seccion_corto" fluid>
      <b-row>
        <b-col cols="12" class="pad_vis">
          <h4 class="vis_">
            La <strong>visibilidad en tiempo real </strong> es necesaria para tomar descisiones rapidas <br>
            e inteligentes que te permitan superar las expectativas de tus clientes.
          </h4>
          <br>
          <div>
            <b-button  variant="success" class="btn_haciendo">
              Haciendo click aqui obtienes una demo gratuita
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>   
</template>
<style>
 .vis_{
    font-family: "Archivo";
    color: white;
 }
  .pad_vis{
     padding: 5rem;
  }
  .btn_haciendo{
    font-family: "Archivo";
    text-transform: uppercase;
    font-size: 16px !important;
    font-weight: 620 !important;
    height: 40px;
    line-height: 1.2px !important;
  }
</style>
<script>
    export default {
        name: 'D'
    }
</script>