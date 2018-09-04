<template>
  <div class="shopping-mall">
    <!-- search bar -->
    <search-bar></search-bar>
    <!-- swiper area -->
    <swiper></swiper>
    <!-- category -->
    <category :category="category"></category>
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
      category: []
    }
  },
  created() {
    Service.getIndex().then(r => {
      this.category = r.data.category
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