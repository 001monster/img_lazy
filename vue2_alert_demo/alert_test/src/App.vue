<template>
  <div id="app">
    <button @click="alertBtn">点击按钮</button>
  </div>
</template>

<script>
import { showToast } from './components/toast.js'
export default {
  
  methods: {
    alertBtn() {
      showToast('你好啊我是老怪兽', 1200)
    }
  }
}
</script>

<style>

</style>