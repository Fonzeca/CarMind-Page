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
                <h6>
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
                <h2 class="implementa" style="color:blue; margin-bottom: 30px;">
                CARDMIND permite a tu empresa <br>
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
        color: black;
        letter-spacing: -1px;
    }

    .ecosistema{
        font-family: "Archivo";
        font-weight: 900;
        margin-bottom: 2vw;
        font-size: 1.2rem;
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

</style>

<script>
    export default {
        name: 'B'
    }
</script>