<template>
  <div>
    <swiper :options="slideOptions" class="swiper-default">
      <swiper-slide class="swiper-slide" v-for="(item, idx) in slides" :key="idx">
        <div class="item">slide {{item}}</div>
      </swiper-slide>
      <div class="slide-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper, swiperSlide
  },
  data() {
    return {
      slides: [1, 2, 4, 5, 6],
      slideOptions: {
        /* direction: 'vertical', // 竖屏切换 */
        pagination: { // 分页器
          el: '.slide-pagination',
          clickable: true,
          loop: true
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-default {
  height: 7rem;
  border-top: 1px solid red;
  border-bottom: 1px solid red;
}
.swiper-slide {
  height: 4rem;
  line-height: 4rem;
  text-align: center;
}
</style>
