<template>
  <div class="img-lazy">
    <div>参考链接：<a href="https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html">IntersectionObserver API 使用教程</a></div>
    <div 
      class="item"
      v-for="(item, i) in arrSrc"
      :key="i"
    >
      <img 
        class="img" 
        :src="moren"
        v-lazy="item"
        alt="懒加载"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'imgLazy',

  data() {
    return {
      moren: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.soogif.com%2F1g9pHPk2uEA9JT8lT8ejc1WE2mgQTVy4.gif&refer=http%3A%2F%2Fimg.soogif.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668584050&t=e90ea07c724b96a9446190b6cbe4de35",
      arrSrc: [
        'https://image.jxc4.com/image/21170e70681c93e9ef85453cb5f28e33.png',
        'https://image.jxc4.com/image/71b9046bb233bccf103825e74d5fc257.png',
        'https://image.jxc4.com/image/48d133ab53758f1caf05654f0eb40605.png',
        'https://image.jxc4.com/image/e8e9e36d4a1d814bc059a588e49c20b6.png',
        'https://image.jxc4.com/image/e4042b6463fcf5b4cc58e01c7311e392.jpg',
        'https://image.jxc4.com/image/ec7bf3e5a8efb503ce1c51ed135f773e.jpg',
        'http://image.jxc4.com/image/a21a88820fdde49807de58964295d1ee.jpg',
        'http://image.jxc4.com/e0c502683858f1e6c82a6e110b880c10.jpg',
        'http://image.jxc4.com/image/de2be839697594030b7023edb2274c8f.jpg',
        'http://image.jxc4.com/image/c7de655f254ddde1a9919195b4516b94.jpg',
        'http://image.jxc4.com/image/0c083fb4ec22f28bed2cded5d2424c11.jpg',
        'http://zswei.xyz/assets/hero.197a9d2d.jpg',
        'https://image.jxc4.com/image/21170e70681c93e9ef85453cb5f28e33.png',
        'https://image.jxc4.com/image/71b9046bb233bccf103825e74d5fc257.png',
        'https://image.jxc4.com/image/48d133ab53758f1caf05654f0eb40605.png',
        'https://image.jxc4.com/image/e8e9e36d4a1d814bc059a588e49c20b6.png',
        'https://image.jxc4.com/image/e4042b6463fcf5b4cc58e01c7311e392.jpg',
        'https://image.jxc4.com/image/ec7bf3e5a8efb503ce1c51ed135f773e.jpg',
        'http://image.jxc4.com/image/a21a88820fdde49807de58964295d1ee.jpg',
        'http://image.jxc4.com/e0c502683858f1e6c82a6e110b880c10.jpg',
        'http://image.jxc4.com/image/de2be839697594030b7023edb2274c8f.jpg',
        'http://image.jxc4.com/image/c7de655f254ddde1a9919195b4516b94.jpg',
        'http://image.jxc4.com/image/0c083fb4ec22f28bed2cded5d2424c11.jpg',
        'http://zswei.xyz/assets/hero.197a9d2d.jpg'
      ]
    }
  },

  // 自定义指令
  directives: {
    /*
     *@描述: 自定义懒加载指令
     *@作者: zhang-shu-wei
     *@日期: 2022-10-17 15:38:28
     *@params: {
      el - 不包括自定义指令的容器 也就是没有 v-laz
      binding - 包括自定义指令的容器 也就是有 v-lazy
     }
    */
    lazy: {
      inserted(el, binding) {
        // 实例化一个交叉监视
        let io = new IntersectionObserver((entries) => {
          entries.forEach( element => {
            if(element.isIntersecting > 0) {
              let img = element.target
              setTimeout( () => {
                img.src = binding.value
              }, 500)
            }
          })
        })
        io.observe(el);
      }
    }
  }
  
}
</script>
<style scoped lang="less">
.img-lazy{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 750px;
  height: auto;
  border: 1px solid rgb(199, 199, 199);
  
  .item{
    margin: 20px;
    height: 200px;
    width: 200px;
    border: 1px soldi rgb(185, 0, 0);
    overflow: hidden;

    .img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
