<template>
  <b-container class="bv-example-row seccion2" fluid>
      <b-row>
        <b-col cols="12" md="6">
          <b-row>
            <b-col cols="12" style="margin-top: 8.5vw;">
                <img class="img-responsive img_cc c99_L" src="@/assets/D/99.png">
                <!-- <img class="img-responsive img_cc c9_L" src="@/assets/D/9_L.png">
                <img class="img-responsive img_cc c10_L" src="@/assets/D/10_L.png">
                <img class="img-responsive img_cc c11_L" src="@/assets/D/11_L.png">
                <img class="img-responsive img_cc c12_L" src="@/assets/D/12_L.png">
                <img class="img-responsive img_cc c13_L" src="@/assets/D/13_L.png"> -->
            </b-col>
            <b-col cols="12">
                <h3 class="text-center obten">
                    Obten el total control de tu flota con CarMind: <br>
                    El sistema intuitivo y facil de usar.
                </h3>
                <b-button variant="success btn-h">
                    Solicita tu demo gratuita aqui
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
            <b-list-group-item>
                <img src="@/assets/A/3_S.png" class="img-responsive img_ok">
                Rastrear el desempeño del conductor con visibilidad en tiempo real.
            </b-list-group-item>
            <b-list-group-item>
               <img src="@/assets/A/3_S.png" class="img-responsive img_ok"> 
               Obtener la informacion necesaria sobre el estado de cada vehiculo.
            </b-list-group-item>
            <b-list-group-item>
                <img src="@/assets/A/3_S.png" class="img-responsive img_ok">
                Digitalizar tus procesos para agilizar los mismos.
            </b-list-group-item>
            <b-list-group-item>
                <img src="@/assets/A/3_S.png" class="img-responsive img_ok">
                Optimizar los flujos de trabajo y la comunicacion entre las partes involucradas.
            </b-list-group-item>
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
    .linksGrupo{
        text-align: left;
        font-family: 'Nunito';
    }
    .linksGrupo .list-group-item{
        border-color:transparent;
    }
    .control_a{
        padding-top: 2em;
        text-align: left;
        font-family: "Archivo";
        font-weight: 900;
        text-transform: uppercase;
    }
    .azul_control{
        color:blue;
    }
    .img_cc{
        position:absolute;
    }
    .c9_L{
        width: 39vw;
        left: 6vw;
        top: 2vh;
        position: relative;
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
        margin-top:-40px;
        color: blue;
    }
    .btn-h{
        text-transform: uppercase;
        width: 30vw;
    }
    .img_ok{
        width: 25px;
    }
</style>
<script>
    export default {
        name: 'E'
    }
</script>