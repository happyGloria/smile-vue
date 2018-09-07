<template>
  <div class="category">
    <div class="cate-item"  v-for="(cate, idx) in category" :key="idx">
      <img v-lazy="cate.image">
      <div class="title">{{cate.mallCategoryName}}</div>
    </div>
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
.category {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #f1f1f1;
  margin: 0 .3rem .3rem .3rem;
  border-radius: .3rem;
  padding: .2rem;
  .cate-item {
    padding: .1rem;
    text-align: center;
    img {
      width: 90%;
    }
    div {
      font-size: 14px;
      padding: .3rem;
    }
  }
}
</style>
