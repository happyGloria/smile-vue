<template>
  <div class="shopping-mall">
    <!-- search bar -->
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <i class="icon icon-location"></i>
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" placeholder="查找">
        </van-col>
        <van-col span="5">
          <van-button size="mini" class="search-btn">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- swiper area -->
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner, idx) in bannerPicArray" :key="idx">
          <img v-lazy="banner.image" width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- category area-->
    <div class="category">
      <div class="cate-item" v-for="(cate, idx) in category" :key="idx">
        <img v-lazy="cate.image" width="90%" alt="">
        <div class="cate-title">{{cate.mallCategoryName}}</div>
      </div>
    </div>
    <div class="adv-banner">
      <img v-lazy="advBannerUrl" width="100%">
    </div>
    <!-- recommend goods area-->
    <div class="recommend-area">
      <div class="title">商品推荐</div>
      <div class="body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(reco, idx) in recommendGoods" :key="idx">
            <div class="recommend-item">
             <img :src="reco.image" width="80%" alt="">
              <div class="name">{{reco.goodsName}}</div>
              <div class="price">￥{{reco.price}}(￥){{reco.mallPrice}}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- floor-1 -->
    <floor v-for="(f, idx) in floors" :key="idx"
      :floor-idx="idx"
      :title="idx+1 + '楼  ' + floorNames['floor'+(idx+1)]" 
      :floorData="f"
      :clz="(idx % 2 == 0) ? 'floor-anomaly' : 'floor-rule'">
    </floor>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Floor from './Floor.vue'

export default {
  components: {
    swiper,
    swiperSlide,
    Floor
  },
  data() {
    return {
      category: [],
      bannerPicArray: [],
      advBannerUrl: '',
      recommendGoods: [],

      swiperOption: {
        slidesPerView: 3,
        loop: true
      },
      floorNames: [],
      floors: []
    }
  },
  mounted() {
    Service.getIndex().then(r => {
      console.log('data: ', r.data)
      this.bannerPicArray = r.data.slides
      this.category = r.data.category
      this.advBannerUrl = r.data.advertesPicture.PICTURE_ADDRESS
      this.recommendGoods = r.data.recommend

      this.floorNames = r.data.floorName
      this.floors = [r.data.floor1, r.data.floor2, r.data.floor3]
    })
  }
}
</script>
<style lang="less">
.shopping-mall {
  .search-bar {
    height: 2.2rem;
    line-height: 2.2rem;
    background-color: #e5017d;
    padding: 0 10px;
    overflow: hidden;

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
      font-size: 0.6rem;
      ::-webkit-input-placeholder {
        color: #eee;
      }
    }
  }
  .swiper-area {
    clear: both;
    max-height: 12rem;
    overflow: hidden;
  }
  .category {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    background-color: #f1f1f1;
    margin: 0 0.3rem;
    padding: 0.3rem;
    border-radius: 0.3rem;
    .cate-title {
      text-align: center;
      font-size: 14px;
    }
  }
  .recommend-area {
    margin-top: 0.3rem;
    .title {
      background-color: #fff;
      font-size: 14px;
      border-bottom: 1px solid #eee;
      text-indent: .5rem;
      padding: .2rem;
      color: #e5017d;
    }
    .body {
      border-bottom: 1px solid #eee;
    }
    .recommend-item {
      width: 99%;
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
