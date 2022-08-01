<template>
    <b-container class="bv-example-row seccion2 " fluid>
    
        <b-row class="implementa_row " aling-v="center">
            <b-col class="imagenes_B">
                <img class="img-responsive B5 SUBE" data-depth="0.2" src="@/assets/B/5_L.png" alt="">
                <!-- <img class="img-responsive B4 animate__animated animate__fadeInDown" src="@/assets/B/4_L.png" alt=""> -->
                
                <img class="img-responsive B4 BAJA" data-depth="0.9" src="@/assets/B/4_L.png" alt=""> -->
            </b-col>
            
            <b-col cols="12" md="6">
                <h2 class="implementa">
                Implementa el mejor <br>
                sistema de gestion <br>
                de transporte que <br>
                se adapte a tus necesidades. <br>
                </h2>
                <h4 class="ecosistema">
                Cambiar a un ecosistema digital es <br>
                mas facil que nunca <br>
                </h4>
                <h6 class="pnl">
                Ponle fin a procesos desafiantes para tu empresa, <br>
                gestiona y preve los riesgos, reduce los costos innecesarios <br>
                de la logistica y obten una mayor visibilidad convirtiendo los  <br>
                datos en informacion relevante e impactando positivamente <br>
                en tu negocio <br>
                </h6>
            </b-col>
        </b-row>
        
        <b-row>
            <b-col aling-v="center" class="text-center" cols="12">
                <h2 class="implementa carmind_azul" >
                CARMIND permite a tu empresa <br>
                tener datos certeros y en un instante sobre:
                </h2>
            </b-col>
        </b-row>
    
    </b-container>  
</template>

<style>

    .implementa_row{
        text-align: left;
        padding: 5vw;
        padding-bottom: 0px;
    }
    .implementa{
        font-family: "Archivo";
        font-weight: 900;
        margin-bottom: 1.5vw;
        color: #1A1A1A;
        letter-spacing: -1px;
        font-size: 2vw;
    }

    .ecosistema{
        font-family: "Archivo";
        font-weight: 900;
        margin-bottom: 2vw;
        font-size: 1.7vw;
        text-transform: uppercase;
        color: #4218D9;
        word-spacing: 5px;
        letter-spacing: 0px;
    }

    .imagenes_B{
        margin-top: 8vw !important;
    }

    .B4, .B5{
        position: absolute;
    }
    .B4:hover{
        /* animation-play-state: running; */
    }
    
    .B4{
        width: 18vw;
        position: relative;
        left: 5vw;
        bottom: 10vw;
    }
    
    .B5{
        width: 40vw;
    }

    .pnl{
        font-size: 1.5vw;
    }
    .carmind_azul{
        color:blue; margin-bottom: 2em;
    }

    /* //Parallax */
    /* .wrapperPar {
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        perspective: 2px;
    }
    .sectionPar { 
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-shadow: 0 0 5px #000;
    }
    .parallax::after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateZ(-1px) scale(1.5);
        background-size: 100%;
        z-index: -1;
    }
     */

    .parallax-bg{
        background-position: center center;
        transform: translateZ(-0.5px) scale(2);
        background-size: cover;
        z-index: -1;
        height: 50vh;
    }
    .parallax-content{
        z-index: -1;
        transform: translateY(-25vh) translateZ(0px) scale(1);
        padding-left:30px;
        padding-right:30px;
        text-align:center;
    }




    /* On screens that are 992px or less, set the background color to blue */
    @media screen and (max-width: 992px) {
        .B4{
            width: 25vw;
        }
        .B5{
            width: 50vw;
        }
        .implementa{
            font-size: 2.3vh;
        }
        .carmind_azul{
            font-size: 1em;
            text-align: left;
            padding: 4vw;
        }
        .ecosistema{
            font-size: 2.5vw;
        }
        .pnl{
            font-size: 4.5vw;
        }
    }

    /* On screens that are 600px or less, set the background color to olive */
    @media screen and (max-width: 600px) {
        .B4{
            width: 40vw;
            
        }
        .B5{
            width: 90vw;
            
        }
        .implementa{
            font-size: 4vh;
            line-height: 4vh;
        }
        .carmind_azul{
            font-size: 1em;
            text-align: left;
            padding: 4vw;
            line-height: 2vh;
        }
        .ecosistema{
            font-size: 3.5vw;
            margin-right: 30%;
        }
        .pnl{
            margin-right: 10vh;
        }
    }

</style>

<script>
    // import Parallax from "vue-parallaxy";
    import simpleParallax from 'simple-parallax-js';
    import Parallax from 'parallax-js'

    export default {
        name: 'B',
        // components: {
        //     Parallax
        // },
        mounted(){
            var BAJA = document.querySelectorAll('.BAJA');
            var SUBE = document.querySelectorAll('.SUBE');
            new simpleParallax(BAJA, {
                delay: 0,
                orientation: 'down',
                scale: 1.1,
                overflow: true,
                delay: .6
            });
            new simpleParallax(SUBE, {
                delay: 0,
                orientation: 'up',
                scale: 1.5,
                overflow: true,
                delay: .6,
                transition: 'cubic-bezier(0,0,0,1)'
            });
            // let scene = document.querySelectorAll('.implementa_row');
            // let parallaxInstance = new Parallax(scene, {
            //   relativeInput: false
            // });
        }
    }
</script>