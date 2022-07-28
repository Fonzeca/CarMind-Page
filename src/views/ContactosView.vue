<template>
  <div class="home">
    <Barra />
    <Contacto />
  </div>
</template>

<script>
// @ is an alias to /src
import Barra from '@/components/BarraNav.vue'
import Contacto from '@/components/contacto.vue'


export default {
  name: 'ContactosView',
  components: {
    Barra, Contacto
  }
}
</script>