<template>
  <div class="recommend">
    <h1>
      <text>123</text>
    </h1>
    <div class="slider" v-for="(item, index) in slider" :key="index">
      <image
        style="width:100%;height:500px"
        :src="item.picUrl"
        resize="cover"
      ></image>
    </div>
    <image style="width:100%;height:500px" src="http://y.gtimg.cn/music/photo_new/T003R720x288M000003zsjKi29fSOQ.jpg"></image>
  </div>
</template>

<script>
import { getRecommend } from '@/api/recommend'

export default{
  data () {
    return {
      slider: []
    }
  },
  mounted () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        console.log(res.data)
        this.slider = res.data.slider
      })
    }
  }
}
</script>
