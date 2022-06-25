<template>
    <b-container class="bv-example-row seccion3 dark" fluid>
      <b-row style="padding: 5em;">
        <b-col cols="12" md="4" aling-v="center" >
            <b-row>
                <b-col class="punter_linea pl1" cols="2" md="1">
                    <img style="display: none;" class="punteros_img I6L img-responsive" src="@/assets/C/6_L.png">
                </b-col>
                <b-col cols="10" md="11">
                    <b-list-group class="someLink">
                        <b-list-group-item class="tit" href="#">
                                Gestion de <br>Conductores
                        </b-list-group-item>
                        <b-list-group-item href="#" >
                            Podras visualizar quien <br>
                            esta utilizando tus <br>
                            vehiculos en tiempo real. 
                        </b-list-group-item>
                        <b-list-group-item href="#">
                            Esto permitira tener un <br>
                            mayor control sobre tu <br>
                            flota.
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="12" md="4" aling-v="center" >
            <b-row>
                <b-col class="punter_linea pl2" cols="2" md="1">
                    <img style="display: none;" class="punteros_img I7L img-responsive" src="@/assets/C/7_L.png">
                </b-col>
                <b-col cols="10" md="11">
                    <b-list-group class="someLink">
                        <b-list-group-item class="tit" href="#">Creacion de <br>checklist</b-list-group-item>
                        <b-list-group-item href="#" >
                            Creacion de formularios <br>
                            que permiten tener <br>
                            actualizados los datos de <br>
                            los vehiculos, control de <br>
                            revisiones y trackeo de <br>
                            kilometraje para mantener <br>
                            saludable tu flota. 
                        </b-list-group-item>
                        <b-list-group-item href="#">
                            Te ayudara a evitar <br>
                            desperfectos mecanicos <br>
                            que demoren tus servicios.
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="12" md="4" aling-v="center" >
            <b-row>
                <b-col class="punter_linea pl3" cols="2" md="1">
                    <img style="display: none;" class="punteros_img I8L img-responsive" src="@/assets/C/8_L.png">
                </b-col>
                <b-col cols="10" md="11">
                    <b-list-group class="someLink">
                    <b-list-group-item class="tit" href="#">Control <br>Documentario</b-list-group-item>
                    <b-list-group-item href="#" >
                        Subi la documentacion de <br>
                        tus vehiculos y nosotros nos <br>
                        encargamos de recordarte <br>
                        los vencimientos.
                    </b-list-group-item>
                    <b-list-group-item href="#">
                        Evitaras multas y minimizas <br>
                        el riesgo de servicios <br>
                        inconclusos o retrazados <br>
                        por falta de papeleo.
                    </b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
        </b-col>
      </b-row>
    </b-container>  
</template>
<style>
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