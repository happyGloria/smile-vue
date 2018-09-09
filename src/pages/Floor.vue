<template>
  <div class="floor">
      <div class="floor-title">{{title}}</div>
      <!-- 不规则布局 -->
      <div v-if="floorIdx %2 == 0" :class="clz">
        <div>
          <img :src="floorData[0].image" width="100%" alt="">
        </div>
        <div>
          <div><img :src="floorData[1].image" width="100%" alt=""></div>
          <div><img :src="floorData[2].image" width="100%" alt=""></div>
        </div>
      </div>
      <!-- 规则布局 -->
      <div v-else :class="clz">
        <div v-for="(item, idx) in floorData.slice(1)" :key='idx'>
          <img :src="item.image" width="100%">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    floorData: Array,
    clz: String,
    floorIdx: Number
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log('key:', this.floorIdx)
  }
}
</script>

<style lang="less" scoped>
.floor-title {
  height: 1.5rem;
  line-height: 1.5rem;
  background-color: #fff;
  font-size: 14px;
  text-indent: .4rem;
  color: #e5017d;
}
.floor-anomaly {
  display: flex;
  flex-direction: row;

  & > div:nth-child(1) {
    border: 1px solid #ddd;
    border-left: none;
  }
  & > div:nth-child(2){
    & > div {
      border-top: 1px solid #ddd;
    }
    & > div:last-child {
      border-bottom: 1px solid #ddd;
    }
  }
}

.floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
  & > div:nth-child(n) {
    width: 10rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
  }
  & > div:nth-child(2n+1) {
    border-right: 1px solid #ddd;
  }

  & > div:nth-child(-n+2) { // 前两个
    border-top: 1px solid #ddd;
  }
}
</style>
