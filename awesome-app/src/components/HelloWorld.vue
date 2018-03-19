<template>
  <div class="root">
    <div class="push">
      <text @click="jump" style="font-size: 100px">jump</text>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    // console.log(this.$refs.canvas)
    // let c = this.$refs.canvas
    // c.width = 500
    // c.height = 500
    // let ctx = c.getContext('2d')
    // console.log(ctx)
    // ctx.lineWidth = 6
    // ctx.strokeStyle = '#f00'
    // ctx.beginPath()
    // ctx.moveTo(100, 250)
    // ctx.quadraticCurveTo(150, 50, 400, 250)
    // ctx.stroke()
    // this.mouseMove(c)
  },
  methods: {
    jump () {
      this.$router.push('/recommend')
    }
    // mouseMove (canvas) {
    //   let that = this
    //   let position = {}
    //   canvas.onmousemove = function (e) {
    //     console.log(`pageX: ${e.pageX}, pageY: ${e.pageY}`)
    //     position = that.getPointOncanvas(canvas, e.pageX, e.pageY)
    //     console.log(position)
    //   }
    // },
    // getPointOncanvas (canvas, x, y) {
    //   var offset = canvas.getBoundingClientRect()
    //   console.log('left: ' + offset.left, 'top: ' + offset.top, offset.width)
    //   return {
    //     x: x - offset.left * (canvas.width / offset.width),
    //     y: y - offset.top * (canvas.height / offset.height)
    //   }
    // }
  }
}
</script>

<style lang="css" scoped>
  .root {
    font-size: 100px
  }
</style>
