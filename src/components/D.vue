<template>
    <b-container class="bv-example-row azul_gradiente seccion_corto" fluid>
      <b-row>
        <b-col cols="12" class="pad_vis">
          <h4 class="vis_">
            La <strong>visibilidad en tiempo real </strong> es necesaria para tomar tomar decisiones rápidas <br>
            e inteligentes que te permitan superar las expectativas de tus clientes.
          </h4>
          <br>
          <div>
            <b-button  variant="success" v-on:click="toDemo" href="#" class="btn_haciendo">
              <span> Haciendo clic aquí obtienes una </span> demo gratuita
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
    font-size: 1vw !important;
    font-weight: 620 !important;
    height: 40px;
    line-height: 1.2px !important;
    padding-top: 20px !important;
  }
  /* On screens that are 992px or less, set the background color to blue */
  @media screen and (max-width: 992px) {
  }

  /* On screens that are 600px or less, set the background color to olive */
  @media screen and (max-width: 600px) {
    .btn_haciendo{
      font-size: 4vw !important;
      padding-top: 16px !important;
    }
    .btn_haciendo span{
      display: none;
    }
  }
</style>
<script>
    export default {
        name: 'D',
        methods:{
          toDemo() {
                this.$gtag.event('click-demo', { method: 'Google' })
                window.location.href = '/demo';
            },
        }
    }
</script>