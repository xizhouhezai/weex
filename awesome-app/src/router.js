import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Recommend from '@/components/recommend/recommend'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/recommend',
      component: Recommend
    }
  ]
})
