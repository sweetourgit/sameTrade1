import Vue from 'vue'
import Router from 'vue-router'
import productList from '@/page/productReserve/productList'
import orderManagement from '@/page/orderManagement/orderList'
import userList from '@/page/userList/userList'
import salesStatistics from '@/page/salesStatistics/salesStatistics'
import login from '@/page/login/login'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', redirect: 'login',
    }, {
      path: '/productList',
      component: productList,
      name: '产品预定',
      meta: {
        keepAlive: true,
        auth:true}
    },{
          path: '/orderManagement',
          component: orderManagement,
          name: '订单管理',
          meta: {
              keepAlive: true,
              auth:true}
      },{
          path: '/userList',
          component: userList,
          name: '账户信息',
          meta: {
              keepAlive: true,
              auth:true}
      },{
          path: '/salesStatistics',
          component: userList,
          name: '销售统计',
          meta: {
              keepAlive: true,
              auth:true}
      },{
      path: '/login',
      component: login,
      meta: {
        keepAlive: false}
    },
    {
      path: '*',
      redirect:'/productList'
    }
  ],
})
