<template>
    <b-container class="bv-example-row seccion seccion_corto Clientes_clase" fluid>
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
            <h2 class="tt_porque">¿Por qué deberías<br> elegir CardMind?</h2>
            <h6 class="obtienes_">
                <span class="linea_azul">------------</span>
                 Obtienes estas ventajas competitivas
                <span class="linea_azul">------------</span>
            </h6>
        
        </b-col>
        <b-col cols="12">
             <b-row class="stylo_text">
                <b-col cols="12" lg="3" md="12">
                </b-col>
                <b-col class="sobrante__" cols="1" ></b-col>
                <b-col class="fondo_img1 auto_alto" cols="10" lg="2" md="3">
                    <!-- <img class="img-responsive img_pq" src="@/assets/E/16_L.png"> -->
                    <h4 class="titulo_card">
                        Ahorro de <br>
                        tiempo y dinero 
                    </h4>
                    <p class="contenido_card">
                        Ganas tiempo para concentrarte 
                        en el trabajo que si importa en
                        lugar de tener que gestionar
                        manualmente los procesos.
                        <br>
                        Obtienes mayores ganancias 
                        reduciendo al mínimo los costos
                        por los días perdidos 
                    </p>
                </b-col>
                <b-col class="sobrante__ md_s" cols="1" md="0"></b-col>
                    <b-col class="fondo_img2 auto_alto" cols="10" lg="2" md="3">
                    <h4 class="titulo_card">
                        Reducción de <br>
                        costos e  <br>
                        imprevistos
                    </h4>
                    <p class="contenido_card">
                        Reducir costos por envíos
                        atrasados o días perdidos debido
                        a problemas de papeleo o
                        mecánicos de alguno de tus 
                        vehículos.
                        <br>
                        En un click accedes a información
                        de toda tu flota, y tomarás decisiones 
                        rápidas e inteligentes.
                    </p>
                </b-col>
                <b-col class="sobrante__ md_s" cols="1" md="0"></b-col>
                <b-col class="fondo_img3 auto_alto" cols="10" lg="2" md="3">
                    <!-- <img class="img-responsive img_pq" src="@/assets/E/18_L.png"> -->
                    <h4 class="titulo_card">
                        Eficiencia en <br>
                        los servicios 
                    </h4>
                    <p class="contenido_card">
                        Aumentas la eficiencia de tus servicios
                        al planificar y ejecutar envíos con datos precisos
                        y ganas la confiabilidad de tus clientes
                        mediante gestiones efectivas.
                    </p>
                </b-col>

                <b-col cols="12" md="3" lg="3">
                </b-col>
            </b-row>
        </b-col>
      </b-row>
    </b-container>  
</template>
<style>
    .sobrante__{
        display: none;
    }

    .auto_alto{
        height: auto !important;
    }
    .desk_s{
        /* font-family:"Nunito"; */
        font-family: "Archivo";
        padding-top: 4em;
    }
    .desk_s h5{
        font-weight: 800;
        font-size: 1em;
        letter-spacing: -2px;
        color: darkgray;
    }
    .img_em{
        width: 13vw;
        margin: 1em;
    }
    .tt_porque{
        font-family: "Archivo";
        font-weight: 900;
        text-transform: uppercase;
        font-size: 30px;
        letter-spacing: -1.5px;
        color: #1A1A1A;
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
        height:25vw;
        margin-left: -1vw;
        margin-right: 1vw;
    }
    .fondo_img2{
        background-image:url('@/assets/E/17_L.png');
        background-size: 95% 100%;
        background-repeat: no-repeat;
        height:25vw;
        margin-right: 1vw;
    }
    .fondo_img3{
        background-image:url('@/assets/E/18_L.png');
        background-size: 95% 100%;
        background-repeat: no-repeat;
        height:25vw;
        margin-right: 1vw;
    }
    .stylo_text{
        text-align: left;
        position: relative;
        font-family: "Archivo";
        margin-bottom: 8vh;
    }
    .titulo_card{
        margin-left: 15px;
        padding-top: 5vh;
        font-weight: 800;
        text-transform: uppercase;
        font-size: 1em;
    }
    .contenido_card{
        padding: 5%;
        font-size: 0.9em;
        margin-right: 10%
    }
    /* On screens that are 992px or less, set the background color to blue */
    @media screen and (max-width: 992px) {
        .md_s{
            display: none !important;
        }
        .img_em{
            width:60vw;
        }
        .obtienes_{
            font-size: 15px;
        }
        .fondo_img1{
            /* height: 55vh;
            background-size: 80% 100%;
            margin-left: 10vw; */
            height: auto;
            background-size: 100% 120%;
            margin-left: 0vw;
            /* background-size: 100% 100%; */
        }
        .fondo_img2{
            /* height: auto;
            background-size: 80% 100%;
            margin-left: 10vw; */
            height: auto;
            background-size: 100% 120%;
            margin-left: 0vw;
            margin-top: -1vh !important;
            /* background-size: 100% 100%; */
        }
        .fondo_img3{
            /* height: auto;
            background-size: 80% 100%;
            margin-left: 10vw; */
            height: auto;
            background-size: 100% 120%;
            margin-left: 0vw;
            margin-top: -1vh !important;
            /* background-size: 100% 100%; */
        }
        .contenido_card{
            padding-right: 15%;
        }
        .vueperslides__bullets{
            position:relative;
            top:5vh;
        }
    }

    /* On screens that are 600px or less, set the background color to olive */
    @media screen and (max-width: 600px) {
        .sobrante__{
            display: inherit;
        }
        .md_s{
            display: inherit !important;
        }
        .img_em{
            width:60vw;
        }
        .obtienes_{
            font-size: 15px;
        }
        .fondo_img1{
            /* height: 55vh;
            background-size: 80% 100%;
            margin-left: 10vw; */
            height: auto;
            background-size: 100% 120%;
            margin-left: 0vw;
            /* background-size: 100% 100%; */
        }
        .fondo_img2{
            /* height: auto;
            background-size: 80% 100%;
            margin-left: 10vw; */
            height: auto;
            background-size: 100% 120%;
            margin-left: 0vw;
            margin-top: -1vh !important;
            /* background-size: 100% 100%; */
        }
        .fondo_img3{
            /* height: auto;
            background-size: 80% 100%;
            margin-left: 10vw; */
            height: auto;
            background-size: 100% 120%;
            margin-left: 0vw;
            margin-top: -1vh !important;
            /* background-size: 100% 100%; */
        }
        .contenido_card{
            padding-right: 15%;
        }
        .vueperslides__bullets{
            position:relative;
            top:5vh;
        }
    }
</style>
<script>
import simpleParallax from 'simple-parallax-js';
    export default {
        name: 'F',
        mounted(){
            let f = document.querySelectorAll('.auto_alto');
            new simpleParallax(f, {
                delay: 0,
                orientation: 'up',
                scale: 1.5,
                overflow: true,
                delay: .6,
                transition: 'cubic-bezier(0,0,0,1)'
            });
        }
    }
</script>