<template>
  <div class="recommend">
    <div class="slider" v-for="(item, index) in slider" :key="index">
      <image
        style="width:100%;height:500px"
        :src="item.picUrl"
        resize="cover"
      ></image>
    </div>
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
