<template>
    <b-container class="bv-example-row seccion seccion_corto" fluid>
      <b-row class="desk_s">
        <b-col cols="12">
          <h5>EMPRESAS QUE YA ELIGIERON CARDMIND </h5>
        </b-col>
        <b-col cols="12">
            <b-table-simple hover small caption-top responsive>
                <b-thead head-variant="dark">
                    <b-tr style="border-width: 1px;">
                        <b-th cols="4">
                            <!-- <img src="@/assets/E/15_L.png" class="img_em"> -->
                        </b-th>
                        <b-th cols="4">
                            <img src="@/assets/E/15_L.png" class="img_em">
                        </b-th>
                        <b-th cols="4">
                            <!-- <img src="@/assets/E/15_L.png" class="img_em"> -->
                        </b-th>
                    </b-tr>
                </b-thead>
            </b-table-simple>
        </b-col>
        <b-col cols="12" class="text-center" style="padding-top: 3em;">
            <h2 class="tt_porque">¿Por que deberias <br> elegir CardMind?</h2>
            <h6 class="obtienes_">
                <span class="linea_azul">------------</span>
                 obtienes estas ventajas competitivas
                <span class="linea_azul">------------</span>
            </h6>
        
        </b-col>
        <b-col cols="12">
             <b-row class="stylo_text">
                <b-col cols="12" md="3">
                </b-col>

                <b-col class="fondo_img1" cols="12" md="2">
                    <!-- <img class="img-responsive img_pq" src="@/assets/E/16_L.png"> -->
                    <h4 class="titulo_card">
                        Ahorro de <br>
                        tiempo y dinero 
                    </h4>
                    <p class="contenido_card">
                        Ganas tiempo para concentrate
                        en el trabajo que si importa en
                        lugar de tener que gestionar
                        manualmente los procesos.
                        <br></br>
                        Obtienes mayores ganancias 
                        reduciendo al minimo los costos
                        por los 'dias perdidos 
                    </p>
                </b-col>
                <b-col class="fondo_img2" cols="12" md="2">
                    <!-- <img class="img-responsive img_pq" src="@/assets/E/17_L.png"> -->
                    <h4 class="titulo_card">
                        Reduccion de <br>
                        costos e  <br>
                        imprevistos
                    </h4>
                    <p class="contenido_card">
                        Reducir costos por envios
                        atrasados o dias perdidos debido
                        a problemas de papeleo o
                        mecanicos de alguno de tus 
                        vehiculos.
                        <br></br>
                        En un click accedes a informacion
                        de toda tu flota, y tomaras decisiones 
                        rapidas e inteligentes.
                    </p>
                </b-col>
                <b-col class="fondo_img3" cols="12" md="2">
                    <!-- <img class="img-responsive img_pq" src="@/assets/E/18_L.png"> -->
                    <h4 class="titulo_card">
                        eficiencia en <br>
                        los servicios 
                    </h4>
                    <p class="contenido_card">
                        Aumentas la eficiencia de tus servicios
                        al planificar y ejecutar envios con datos precisos
                        y ganas la confiabilidad de tus clientes
                        mediante gestiones efectivas.
                    </p>
                </b-col>

                <b-col cols="12" md="3">
                </b-col>
            </b-row>
        </b-col>
      </b-row>
    </b-container>  
</template>
<style>
    .desk_s{
        font-family:"Nunito";
        padding-top: 6em;
    }
    .desk_s h5{
        font-weight: 700;
        font-size: 1.45em;
        letter-spacing: -2px;
        color: darkgray;
    }
    .img_em{
        width:15vw;
    }
    .tt_porque{
        font-family: "Archivo";
        font-weight: 900;
        text-transform: uppercase;
        font-size: 30px;
        letter-spacing: -1.5px;
        color: black;
        word-spacing: 3px;
        line-height: 1.2em;
        height: 76px;
    }
    .obtienes_{
        color: blue;
        font-family: "Nunito";
        font-size: 17px;
        font-weight: 600;
        text-align: center;
        padding-bottom: 5vh;
    }
    .linea_azul{
        letter-spacing: -4px;
        padding-right: 5px;
    }
    .img_pq{
        height: 100%;
        width:100%;
    }
    .fondo_img1{
        background-image:url('@/assets/E/16_L.png');
        background-size: 95% 100%;
        background-repeat: no-repeat;
        height:40vh;
        margin-left: -1vw;
        margin-right: 1vw;
    }
    .fondo_img2{
        background-image:url('@/assets/E/17_L.png');
        background-size: 95% 100%;
        background-repeat: no-repeat;
        height:40vh;
        margin-right: 1vw;
    }
    .fondo_img3{
        background-image:url('@/assets/E/18_L.png');
        background-size: 95% 100%;
        background-repeat: no-repeat;
        height:40vh;
        margin-right: 1vw;
    }
    .stylo_text{
        text-align: left;
        position: relative;
        font-family: "Archivo";
        margin-bottom: 8vh;
    }
    .titulo_card{
        padding-top: 5vh;
        font-weight: 800;
        text-transform: uppercase;
        font-size: 1em;
    }
    .contenido_card{
        font-size:0.8em;
    }
</style>
<script>
    export default {
        name: 'F'
    }
</script>