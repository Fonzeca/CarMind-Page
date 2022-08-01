<template>
    <b-container class="bv-example-row azul_gradiente seccion" fluid>
        <b-row class="Digitaliza" align-v="center">
        <b-col cols="12" md="6">
            <h2>
                Digitaliza tus procesos <br>
                logisticos para lograr <br>          
                <span style="color: #B6E802;" class="" >
                    <img class="img-responsive ok_img" id="ok_img" src="@/assets/A/3_S.png" alt="">
                    <span id="Marquesina_text">
                        eficiencia
                    </span> 
                </span> 
                <br>          
                En tus servicios <br>          
            </h2>
        </b-col>
        <b-col cols="12" md="6" class="text-center A2">
            <img class="img-responsive A2"  src="@/assets/A/2_L.png" alt="">
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
    #Marquesina_text{
        text-transform: uppercase;
        font-size: 1em;
        --animate-duration: 1s;
    }
    .mark_3 {
        font-size: 0.9em !important;
    }
    .Digitaliza h2{
        font-family: "Archivo";
        font-weight: 900 !important;
        line-height: 1.2em;
        font-size: 2.5em;
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
    .oculto_ar{
        opacity: 0;
    }

    /* .g-container {
      color: rgb(255, 255, 255);
      font-size: 4em;
      filter: contrast(15);
    } */
    .word {
        position: relative;
        transform: translate(0%, -1%);
        animation: slideNN 3s infinite ease-in-out;
        margin: auto;
    }
    /* .word:nth-child(1) {
        animation-delay: -7s;
    }
    .word:nth-child(2) {
        animation-delay: -6s;
    }
    .word:nth-child(3) {
        animation-delay: -5s;
    } */
    /* Sliding entrances */
    @keyframes slideNN {
      0% {
        left: -25px;
        opacity: 0;
        /* filter: blur(0px); */
      }
      50%{
        left: 0px;
        /* filter: blur(180px); */
      }
      60% {
        opacity: 1;
        /* filter: blur(0px); */
        left: 0px;
      }
      90% {
        /* filter: blur(0px); */
        left: 0px;
      }
      100% {
        opacity: 0;
        left: 0px;
      }
    }
    @keyframes switch {
        0%,
        5%,
        100% {
            filter: blur(0px);
            opacity: 1;
        }
        50%,
        80% {
            filter: blur(180px);
            opacity: 0;
        }
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
        mounted(){
            let MARK = document.getElementById('Marquesina_text');            
            let IMGMARK = document.getElementById('ok_img');  
            console.log(IMGMARK)          
            let i = 0;
            let lista = [' ahorro de tiempo', ' reducción de costos', ' eficiencia']
            setInterval(()=>{
                // MARK.classList.remove("animate__fadeInDown");
                MARK.classList.add("word");
                IMGMARK.classList.add("word");
                
                
                setTimeout(()=>{
                    //MARK.innerHTML = "";
                    MARK.innerHTML = lista[i];
                    if(i == 1){
                        MARK.classList.add("mark_3");
                    }else{
                        MARK.classList.remove("mark_3");
                    }
                    // IMGMARK.classList.remove("word");
                    // MARK.classList.add("animate__fadeInDown");
                    i++;
                    if(i == 3){
                        i = 0;
                    }
                }, 3000)

                MARK.addEventListener('transitionend', 
                    event => { 
                        console.log(event); 
                        if (event.target !== event.currentTarget) { 
                          
                            // Ignore it 
                            return; 
                        } 
                        console.log(event.target); 
                });
            }, 3000)
        }
    }
</script>