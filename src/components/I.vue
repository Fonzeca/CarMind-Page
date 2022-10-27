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
            <b-list-group-item class="dark" href="">
                <a class="link_redes_" href="https://www.linkedin.com/company/81582827/" v-on:click="toLinkedin">
                <img src="@/assets/H/21_L.png">
                Linkedin
                </a>
            </b-list-group-item>
            <b-list-group-item class="dark" >
              <a class="link_redes_" href="https://wa.me/+5492966783544" v-on:click="toWhatsapp">
              <img src="@/assets/H/25_L.png" 
              style="height: 35px;
                width: 35px;
                left: -1px;
                position: relative;">
                <span style="position:relative; left:-4px;">
                  Whatsapp
                </span>
              </a>
            </b-list-group-item>
          </b-list-group>
        </b-col>

        <b-col cols="12" md="1"></b-col>

        
      </b-row>
    </b-container>  
</template>

<style>
    .link_redes_{
      text-decoration: none;
      color: white;
    }
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
        name: 'I',
        methods:{
          toLinkedin() {
              this.$gtag.event('click-linkedin', { method: 'Google' })
          },
          toWhatsapp(){
            this.$gtag.event('click-whatsapp', { method: 'Google' })
          }
        }
    }
</script>