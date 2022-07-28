<template>
    <b-container class="bv-example-row seccion dark" fluid>
      <b-row style="padding:5em;">
        

        <b-col cols="12" md="2"></b-col>

        <b-col cols="12" md="5">
          <b-list-group class="dark someLink2">
            <b-list-group-item class="dark">afonzo@mindia.com.ar</b-list-group-item>
            <b-list-group-item class="dark">+54 2966 676495</b-list-group-item>
            <b-list-group-item class="dark">Puerto San Julian, Santa Cruz, Argentina.</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col cols="12" md="5">
          <b-list-group class="dark someLink2">
            <b-list-group-item class="dark">
                <img src="@/assets/H/21_L.png">
                /user
            </b-list-group-item>
            <b-list-group-item class="dark">
                <img src="@/assets/H/22_L.png">
                @user
            </b-list-group-item>
            <b-list-group-item class="dark">
                <img src="@/assets/H/23_L.png">
                @user
            </b-list-group-item>
          </b-list-group>
        </b-col>

        <b-col cols="12" md="1"></b-col>

        
      </b-row>
    </b-container>  
</template>

<style>
    .someLink2 .list-group-item{
      font-family: "Nunito";
      margin: 10px;
      background-color: transparent;
      color: white !important;
      text-align: left;
      font-weight: 400;
      line-height: 20px;
    }
    
    .someLink2 .list-group-item:hover{
        background-color: transparent !important;
    }
    /* On screens that are 992px or less, set the background color to blue */
    @media screen and (max-width: 992px) {
      
    }

    /* On screens that are 600px or less, set the background color to olive */
    @media screen and (max-width: 600px) {
      
    }
</style>

<script>
    export default {
        name: 'I'
    }
</script>