<template>
  <div class="category">
    <ul class="clearfix">
      <li v-for="(cate, idx) in category" :key="idx" class="fl">
        <div class="img-wrap">
          <img :src="cate.image" alt="">
        </div>
        <div class="title">{{cate.mallCategoryName}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    category: Array
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log('category:', this.category)
  }
}
</script>

<style lang="less" scoped>
</style>
