<template>
 <vueper-slides
  class="no-shadow vueper_edit"
  :visible-slides="3"
  slide-multiple
  :gap="3"
  :slide-ratio="1 / 4"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
  <vueper-slide class="vueper_slide_edit" v-for="i in 10"  />
    <template #content>
        <span>{{ i }}</span>
    </template>
  </vueper-slide>
</vueper-slides>
</template>

<style>
  .vueper_edit{
    background-image: url('../assets/F/fondo.jpeg');
    background-size: cover;
    height: 60vw;
    margin: 5vh 0px 0vh 0px;
    padding: 20% 5% 0px 5%;

  }
  .vueper_slide_edit{
    background-color: red;
    border-radius: 7%;
    color: black !important;
    font-size: 3em;
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
            title: 'Slide #1',
            content: 'Slide 1 content.'
          },
          {
            title: 'Slide #2',
            content: 'Slide 2 content.'
          },
          {
            title: 'Slide #3',
            content: 'Slide 3 content.'
          }
          ]
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