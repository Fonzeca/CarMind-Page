<template>
  <div class="home">
    <Barra />
    <Anima />

  </div>
</template>

<script>
// @ is an alias to /src
import Barra from '@/components/BarraNav.vue'
import Anima from '@/components/Anima.vue'


export default {
  name: 'ClientesView',
  components: {
    Barra, Anima
  }
}
</script>