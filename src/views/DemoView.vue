<template>
  <div class="">
    <Barra />
    <FW/>
  </div>
</template>

<script>
// @ is an alias to /src
import Barra from '@/components/BarraNav.vue'
import FW from '@/components/FW.vue'


export default {
  name: 'DemoView',
  components: {
    Barra, FW
  }
}
</script>