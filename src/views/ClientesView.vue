<template>
  <div class="home">
    <Barra />
  </div>
</template>

<script>
// @ is an alias to /src
import Barra from '@/components/BarraNav.vue'


export default {
  name: 'ClientesView',
  components: {
    Barra
  }
}
</script>