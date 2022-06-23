<template>
  <div id="app">
      <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  metaInfo: {
    title: 'CarMind',
    htmlAttrs: {
      lang: 'es',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { rel: 'stylesheet', href: '/css/index.css' },
      { rel: 'favicon', href: '@/assets/favicon.ico' }
    ],
    link: [
      // { rel: 'icon', href: '/logo.png' }
    ]
  }
}
</script>

<style>

#app {
  font-family: 'archivo', Helvetica, Arial, sans-serif;
  /*
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
}

a{
  font-family: 'archivo_font' sans-serif;
  font-weight: bold;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>



