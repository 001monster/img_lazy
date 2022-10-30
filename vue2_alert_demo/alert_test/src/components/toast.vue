<template>
  <div class="toast" v-show="show">
    <div class="message">{{message}}</div>
  </div>
</template>

<script>
function throttle(fn, delay = 200) {
  let timer = null
  return function () {
    if(timer) return 
    timer = setTimeout( () => {
      
      timer = null
    }, delay)
  }
}
export default {
  data() {
    return {
      message: '默认内容',
      show: false
    }
  },

  methods: {
    isShow(message) {
      throttle(() => {
        console.log('sfsfsf')
        // this.show = true    
      })
        
      this.message = message
    },
    isHide() {
      this.show = false
    }
  }
}
</script>

<style>
.toast{
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
}

.message{
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>