<template>
 <vueper-slides
  class="no-shadow vueper_edit"
  :visible-slides="3"
  slide-multiple
  :gap="3"
  :slide-ratio="1 / 4"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }">
  <!-- :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"> -->
  <vueper-slide class="vueper_slide_edit"  
    v-for="i in slides"  
    :key="i.i"
    :content="i.contenido"/>
    
  </vueper-slide>
</vueper-slides>


</template>
<style>
  .vueper_edit{
    background-image: url('../assets/F/fondo.jpeg');
    background-size: cover;
    height: 70vw;
    margin: 5vh 0px 0vh 0px;
    padding: 20% 5% 0px 5%;

  }
  .vueperslide{
    height: auto !important;
  }
  .vueper_slide_edit{
    background-color: whitesmoke;
    /* height: 6em; */
    border-radius: 5%;
    color: black !important;
    font-size: 1em;
  }
  .vueperslide__content-wrapper{
    height: auto !important;
  }
  .tt{
    padding:25px;
  }

  .nombreCliente_card{
    text-align: left;
    line-height: 1px;
  }
  .nombreCliente_card h5{
    font-family: 'nunito';
    font-size: 15px !important;
    font-weight: 900;
  }
  
  .retrato_{
    height: 5em;
    width: 6em;
    position: relative;
    top: -1em;
    border-radius: 50%;
  }
  .dichos_{
    font-size: 0.8em;
    font-style: italic;
    text-align: justify;
  }

  .contenedor_estrellas{
    margin-left: -2.2em;
  }

  .estrellas_{
    text-align: left;
    position: relative;
    left: 0px;
    display: inline-block;
    height: 2em;
    width: 2em;
    margin-right: 15px;
    background-image: url('../assets/F/19_S.png');
    background-size: cover;
  }

  .vueperslides__arrow {
    background-color: white;
    opacity: 1;
    border-radius: 50%;
  }

  .vueperslides__arrow svg{
    width: 2.5em !important;
  }


   @media screen and (max-width: 992px) {
        .sobrante__{
            display: inherit;
        } 
        .vueper_edit{
          background-image: url(http://192.168.1.104:8080/img/fondo.3bba4f2e.jpeg);
          background-size: cover;
          height: 100vw;
          margin: 0vh 0px 0vh 0px;
          padding: 10% 5% 0px 5%;
        }
        .vueperslides__parallax-wrapper{
          height: 300px !important;
        }
        .vueperslides__arrow{
          display: none;
        }

}

    /* On screens that are 600px or less, set the background color to olive */
    @media screen and (max-width: 600px) {
      
        .vueper_edit{
          background-image: url(http://192.168.1.104:8080/img/fondo.3bba4f2e.jpeg);
          background-size: cover;
          height: 100vw;
          margin: 0vh 0px 0vh 0px;
          padding: 10% 5% 0px 5%;

        }
        .vueperslides__parallax-wrapper{
          height: 300px !important;
        }
        .vueperslides__arrow{
          display: none;
        }
        .dichos_{
          font-size: 12px;
        }
        .estrellas_{
          height: 1em;
          width: 1em;
          margin-right: 5px;
        }
        .contenedor_estrellas{
          margin-left: 0em;
        }
    }

</style>

<script>
  import { VueperSlides, VueperSlide } from 'vueperslides'
  import 'vueperslides/dist/vueperslides.css'

  export default {
    components: { VueperSlides, VueperSlide },
    name: 'Gig',
    data () {
        return {
          
          parallax :  1 , 
          parallaxFixedContent :  false ,
          slides: [
            {
              i:0,
              contenido:`
              <div  class="tt" >
                <b-card class="container">
                  <div class="row">
                    
                    <div class="col-4">
                      <img class="img-rounded retrato_" src="https://placekitten.com/1000/300" alt="">
                    </div>
                    
                    <div class="col-8 nombreCliente_card">
                      <h5>Martina Rodriguez</h5>
                      <small>CEO Keos SRL</small>
                    </div>
                    <hr>
                    <div class="col-12">
                        <p class="dichos_">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum optio animi quia tempora iusto velit mollitia nemo ex? Minus repellendus alias sit. Culpa maiores pariatur inventore facilis minus temporibus!..."</p>
                    </div>
                    
                    <div class="col-12 contenedor_estrellas" >
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                    </div>
                  </div>
                </b-card>
              </div>
            `
            },
            {
              i:1,
              contenido:`
              <div  class="tt" >
                <b-card class="container">
                  <div class="row">
                    
                    <div class="col-4">
                      <img class="img-rounded retrato_" src="https://placekitten.com/1000/300" alt="">
                    </div>
                    
                    <div class="col-8 nombreCliente_card">
                      <h5>Martina Rodriguez</h5>
                      <small>CEO Keos SRL</small>
                    </div>
                    <hr>
                    <div class="col-12">
                        <p class="dichos_">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum optio animi quia tempora iusto velit mollitia nemo ex? Minus repellendus alias sit. Culpa maiores pariatur inventore facilis minus temporibus!..."</p>
                    </div>
                    
                    <div class="col-12 contenedor_estrellas" >
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                    </div>
                  </div>
                </b-card>
              </div>
              `
            },
            
            {
              i:2,
              contenido:`
              <div  class="tt" >
                <b-card class="container">
                  <div class="row">
                    
                    <div class="col-4">
                      <img class="img-rounded retrato_" src="https://placekitten.com/1000/300" alt="">
                    </div>
                    
                    <div class="col-8 nombreCliente_card">
                      <h5>Martina Rodriguez</h5>
                      <small>CEO Keos SRL</small>
                    </div>
                    <hr>
                    <div class="col-12">
                        <p class="dichos_">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum optio animi quia tempora iusto velit mollitia nemo ex? Minus repellendus alias sit. Culpa maiores pariatur inventore facilis minus temporibus!..."</p>
                    </div>
                    
                    <div class="col-12 contenedor_estrellas" >
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                    </div>
                  </div>
                </b-card>
              </div>
              `
            },
            
            
            {
              i:3,
              contenido:`
              <div  class="tt" >
                <b-card class="container">
                  <div class="row">
                    
                    <div class="col-4">
                      <img class="img-rounded retrato_" src="https://placekitten.com/1000/300" alt="">
                    </div>
                    
                    <div class="col-8 nombreCliente_card">
                      <h5>Martina Rodriguez</h5>
                      <small>CEO Keos SRL</small>
                    </div>
                    <hr>
                    <div class="col-12">
                        <p class="dichos_">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nostrum optio animi quia tempora iusto velit mollitia nemo ex? Minus repellendus alias sit. Culpa maiores pariatur inventore facilis minus temporibus!..."</p>
                    </div>
                    
                    <div class="col-12 contenedor_estrellas" >
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                      <div class="estrellas_"></div>
                    </div>
                  </div>
                </b-card>
              </div>
              `
            },
            
          ], 
          breakpoints: {
            1200: {
              slideRatio: 1 / 5
            },
            900: {
              slideRatio: 1 / 3
            },
            600: {
              slideRatio: 1 / 2,
              arrows: false,
              bulletsOutside: true
            },
            1100: {
              slideRatio: 1 / 4
            }
          }
        }
    },
    methods: {
        onSlideStart(slide) {
          this.sliding = true
        },
        onSlideEnd(slide) {
          this.sliding = false
        }
    }
}
</script>