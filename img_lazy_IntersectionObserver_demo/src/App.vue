<template>
  <div id="app">
    <imgLazy msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import imgLazy from './components/imgLazy.vue'

export default {
  name: 'App',
  components: {
    imgLazy
  }
}
</script>

<style>
body{
  display: flex;
  justify-content: center;
}
</style>
