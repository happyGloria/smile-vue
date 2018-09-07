<template>
  <div class="shopping-mall">
    <!-- search bar -->
    <search-bar></search-bar>
    <!-- swiper area -->
    <swiper></swiper>
    <!-- category -->
    <category :category="category"></category>
    <div class="ad-banner">
      <img v-lazy="adBanner" alt="" width="100%">
    </div>
  </div>
</template>

<script>
import searchBar from './searchbar.vue'
import swiper from './swiper.vue'
import category from './category.vue'
export default {
  components: {
    searchBar,
    swiper,
    category
  },
  data() {
    return {
      category: [],
      adBanner: ''
    }
  },
  created() {
    Service.getIndex().then(r => {
      this.category = r.data.category
      this.adBanner = r.data.advertesPicture.PICTURE_ADDRESS
    })
    /* this.$http({
      url: 'https://www.easy-mock.com/mock/5b8e03a7ae6b714d1bc70006/SmileVue/index',
      method: 'get'
    }).then(res => {
      console.log(res)
    }) */
  }
}
</script>