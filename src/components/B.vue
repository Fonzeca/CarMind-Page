<template>
    <b-container class="bv-example-row seccion2" fluid>
    
        <b-row class="implementa_row" aling-v="center">
            <b-col class="imagenes_B">
                <img class="img-responsive B5" src="@/assets/B/5_L.png" alt="">
                <img class="img-responsive B4" src="@/assets/B/4_L.png" alt="">
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
    export default {
        name: 'B'
    }
</script>