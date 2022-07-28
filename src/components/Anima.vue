<template>
  <b-container class="bv-example-row seccion dark" fluid>
    <section class="container">
      <h1 class="title animate__animated animate__slower animate__backInDown ">
        <span>Hi, nice</span>
        <span>to see</span>
        <span>you here</span>
      </h1>
      
      <h2 class="title">
        <span class="animat_22">This is</span>
        <span>a long</span>
        <span>sub title</span>
      </h2>
    </section>
  
    <span class="usechrome">Use Chrome for a better experience</span>
  </b-container>  
</template>

<style>
    

    .animat_22 {
      animation:
        titleAnimation 2s linear 1.5s,  /* Comienza a los 7.5s (5 + 2.5) */
        titleAnimation 2s linear 2.5s;  /* Comienza a los 9.5s (5 + 2.5 + 2) */
    }

    @keyframes titleAnimation {
      0% {
        transform: translateY(-50px);
        opacity: 0;
        -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      }
      20% {
        transform: translateY(0);
        opacity: 1;
        -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      }
      80% {
        transform: translateY(0);
        opacity: 1;
        -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      }
      100% {
        transform: translateY(50px);
        opacity: 0;
        -webkit-clip-path: polygon(100% 0, 100% 0%, 0 100%, 0 100%);
        clip-path: polygon(100% 0, 100% 0%, 0 100%, 0 100%);
      }
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
        name: 'Anima'
    }
</script>