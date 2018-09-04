<template>
  <div class="swiper-area">
    <van-swipe :autoplay="1000">
      <van-swipe-item v-for="(banner, idx) in bannerPicArray" :key="idx">
        <img :src="banner.imageUrl" width="100%" alt="" v-lazy="banner.imageUrl">
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
.swiper-area, .van-swipe {
  width: 100%;
  overflow: hidden;
}
</style>
