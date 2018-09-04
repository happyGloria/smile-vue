<template>
  <div class="swiper-area">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(banner, idx) in bannerPicArray" :key="idx">
        <img v-lazy="banner.imageUrl" width="100%" alt="" >
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerPicArray: [
        { imageUrl: 'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg' },
        { imageUrl: 'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg' },
        { imageUrl: 'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-area {
  clear: both;
  max-height: 12rem;
  overflow: hidden;
}
</style>
