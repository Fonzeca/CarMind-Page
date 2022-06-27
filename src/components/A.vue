<template>
    <b-container class="bv-example-row azul_gradiente seccion" fluid>
        <b-row class="Digitaliza" align-v="center">
        <b-col cols="12" md="6">
            <h2>
                Digitaliza tus procesos <br>
                logisticos para lograr <br>          
                <span style="color: #B6E802;">
                    <img class="img-responsive ok_img" src="@/assets/A/3_S.png" alt="">
                    EFICIENCIA 
                </span> 
                <br>          
                En tus servicios <br>          
            </h2>
        </b-col>
        <b-col cols="12" md="6" class="text-center A2">
            <img class="img-responsive A2" src="@/assets/A/2_L.png" alt="">
        </b-col>
        </b-row>
    </b-container> 
</template>
<style>

  .Digitaliza{
        text-align: left;
        color: white;
        font-weight: 900;   
        padding: 5vw;
    }

    .Digitaliza h2{
        font-family: "Archivo";
        font-weight: 900 !important;
        line-height: 1.2em;
        font-size: 3em;
        position: relative;
        left: 5vw;
    }
    .A2{
        height: 22vw;
    }
    .ok_img{
        top: -0.1em;
        position: relative;
        /* right: 0.2em; */
    }
    /* On screens that are 992px or less, set the background color to blue */
    @media screen and (max-width: 992px) {
        .Digitaliza{
            text-align: left;
            color: white;
            font-weight: 900;   
            padding: 5vw;
            
            
        }

        .Digitaliza h2{
            font-family: "Archivo";
            font-weight: 900 !important;
            line-height: 1.2em;
            font-size: 2.5em;
        }
        .A2{
            height: 30vw;
        }
    }

    /* On screens that are 600px or less, set the background color to olive */
    @media screen and (max-width: 600px) {
        .Digitaliza{
            text-align: center;
            color: white;
            font-weight: 900;   
            padding: 5vw;
        }

        .Digitaliza h2{
            font-family: "Archivo";
            font-weight: 900 !important;
            line-height: 1em;
            font-size: 2em;
        }
         
         .A2{
            height: 80vw;
        }
    }
</style>
<script>
    export default {
        name: 'A',
    }
</script>