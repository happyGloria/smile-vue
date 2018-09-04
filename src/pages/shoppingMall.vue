<template>
  <div class="shopping-mall">
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <i class="icon icon-location"></i>
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input">
        </van-col>
        <van-col span="5">
          <van-button size="mini" class="search-btn">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <swiper></swiper>
  </div>
</template>

<script>
import swiper from './swiper.vue'
export default {
  components: {
    swiper
  },
  data() {
    return {
      msg: 'Shopping Mall'
    }
  }
}
</script>

<style lang="less" scoped>
.search-bar {
  height: 2.2rem;
  line-height: 2.2rem;
  background-color: #e5017d;
  padding: 0 10px;

  .icon-location {
    color: #fff;
    font-size: 1rem;
  }
  .search-input {
    width: 100%;
    height: 1.3rem;
    border: none;
    border-bottom: 1px solid #fff !important;
    background-color: #e5017d;
    color: #fff;
  }
}
</style>
