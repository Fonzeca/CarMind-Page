<template>
    <b-container class="bv-example-row seccion3 dark" fluid>
      <b-row style="padding: 5em;">
        <b-col cols="12" md="4" aling-v="center" >

                <b-col cols="10" md="11">
                    <b-list-group class="someLink">
                        <b-list-group-item class="tit" href="#">
                            <span class="circulo_tt">
                                <img src="@/assets/C/circulo.svg">
                            </span>
                            <span class="tt_lista">
                                Gestion de <br>Conductores
                            </span>
                        </b-list-group-item>
                        <b-list-group-item href="#" >
                            <span class="circulo_">
                                <img src="@/assets/C/circulo.svg">
                            </span>
                            <span class="tt_lista">
                                Podras visualizar quien <br>
                                esta utilizando tus <br>
                                vehiculos en tiempo real. 
                            </span>
                        </b-list-group-item>
                        <b-list-group-item href="#">
                            <span class="circulo_">
                                <img src="@/assets/C/circulo.svg">
                            </span>
                            <span class="tt_lista">
                                Esto permitira tener un <br>
                                mayor control sobre tu <br>
                                flota.
                            </span>
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
        </b-col>
        <b-col cols="12" md="4" aling-v="center" >
            <b-row>
                <b-col cols="12" md="11">
                    <b-list-group class="someLink">
                        <b-list-group-item class="tit" href="#">
                            <span class="circulo_tt">
                                <img src="@/assets/C/circulo.svg">
                            </span>
                            <span class="tt_lista">
                                Creacion de <br>checklist
                            </span>
                        </b-list-group-item>
                        <b-list-group-item href="#" >
                            <span class="circulo_">
                                <img src="@/assets/C/circulo.svg">
                            </span>
                            <span class="tt_lista">
                            Creacion de formularios <br>
                            que permiten tener <br>
                            actualizados los datos de <br>
                            los vehiculos, control de <br>
                            revisiones y trackeo de <br>
                            kilometraje para mantener <br>
                            saludable tu flota. 
                            </span>
                        </b-list-group-item>
                        <b-list-group-item href="#">
                            <span class="circulo_">
                                <img src="@/assets/C/circulo.svg">
                            </span>
                            <span class="tt_lista">
                                Te ayudara a evitar <br>
                                desperfectos mecanicos <br>
                                que demoren tus servicios.
                            </span>
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="12" md="4" aling-v="center" >
            <b-row>
                
                <b-col cols="12" md="11">
                    <b-list-group class="someLink">
                    <b-list-group-item class="tit" href="#">
                        <span class="circulo_tt">
                            <img src="@/assets/C/circulo.svg">
                        </span>
                        <span class="tt_lista">
                            Control <br>Documentario
                        </span>
                    </b-list-group-item>
                    <b-list-group-item href="#" >
                        <span class="circulo_">
                            <img src="@/assets/C/circulo.svg">
                        </span>
                        <span class="tt_lista">
                            Subi la documentacion de <br>
                            tus vehiculos y nosotros nos <br>
                            encargamos de recordarte <br>
                            los vencimientos.
                        </span>
                    </b-list-group-item>
                    <b-list-group-item href="#">
                        <span class="circulo_">
                            <img src="@/assets/C/circulo.svg">
                        </span>
                        <span class="tt_lista">
                            Evitaras multas y minimizas <br>
                            el riesgo de servicios <br>
                            inconclusos o retrazados <br>
                            por falta de papeleo.
                        </span>
                    </b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
        </b-col>
      </b-row>
    </b-container>  
</template>
<style>
@keyframes tada {
  0% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  100% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
    .tt_lista{
        display: inline-flex;
    }
    .circulo_tt{
        margin: 10px;
        top: 10px;
        position: relative;
        left: -10px;
    }
    .circulo_tt img{
        width: 1em;
        /* -webkit-animation-name: tada infinite ease-in-out; */
        /* animation-name: tada infinite ease-in-out; */
        animation: tada infinite ease-in-out;
    }
    .circulo_{
        position: relative;
        margin: 10px;
        top: 10px;
        left: -10px;
    }
    .circulo_ img{
        width: 0.7em;
        /* -webkit-animation-name: tada infinite ease-in-out; */
        animation-name: tada infinite ease-in-out;
        animation: tada infinite ease-in-out;
    }

    .list-group-item{
        list-style-type: square;
        list-style-image: url('@/assets/C/7_L.png');
        list-style-position: inside;
    }

    .someLink .list-group-item{
        font-family: "Nunito";
        margin: 10px;
        background-color: transparent;
        color: white !important;
        text-align: left; 
        font-weight: 400;
    }
    .someLink .list-group-item:hover{
        background-color: transparent !important;
    }
    .tit{
        font-family: "Archivo";
        font-size: 1.1em;
        font-weight: 900 !important;
        text-transform: uppercase;
        
    }
    .punteros_img{
        position: relative;
        top:3vw;
    }
    .I6L{
        height: 30vh;
    }
    .I7L{
        height: 40vh;
    }
    .I8L{
        height: 32vh;
    }
    .punter_linea{
        background-repeat: no-repeat;
        background-size: 80%;
    }
    .pl1{
        background-image: url('@/assets/C/6_L.png');
        background-position-y: 55%;
        top: -2vh !important;
        top: -2vh !important;
        position: relative;
        left: 1vw;

        
    }
    .pl2{
        background-image: url('@/assets/C/7_L.png');
        background-position-y: 10%;
        top: 2.5vh  !important;
        /* top: 4.5vh  !important; */
        position: relative;
        left: 1vw;

    }
    .pl3{
        background-image: url('@/assets/C/8_L.png');
        background-position-y: 0%;
        top: 4vh !important;
        /* top: 6vh !important; */
        position: relative;
        left: 1vw;

    }
    /* On screens that are 992px or less, set the background color to blue */
    @media screen and (max-width: 992px) {
        .punter_linea{}
        .pl1{}
        .pl2{}
        .pl3{}
    }

    /* On screens that are 600px or less, set the background color to olive */
    @media screen and (max-width: 600px) {
        .punter_linea{
            background-repeat: no-repeat;
            background-size: 98% 65%;
            left: -10px;
            width: 33px !important;
        }
        .pl1{}
        .pl2{
            top: 5vh !important;
            position: relative;
            background-size: 89% 75%;
        }
        .pl3{}
    }


</style>
<script>
    export default {
        name: 'C'
    }
</script>