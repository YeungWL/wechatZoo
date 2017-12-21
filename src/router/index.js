import Vue from 'vue'
import Router from 'vue-router'
//引入入口文件
const index = () => import('@/components/index.vue')
//引入保护教育 - 入口
const bhjy = () => import('@/components/bhjy/index.vue')

//引入保护教育 - 最新动态
const zxdt = () => import('@/components/bhjy/zxdt/zxdt.vue')
//引入保护教育 - 最新动态详情
const zxdtxq = () => import('@/components/bhjy/zxdt/zxdtxq.vue')

//引入保护教育 - 动物科学
const dwkx = () => import('@/components/bhjy/dwkx/dwkx.vue')
//引入保护教育 - 动物科学详情
const dwkxxq = () => import('@/components/bhjy/dwkx/dwkxxq.vue')

//引入保护教育 - 动物之家
const dwzj = () => import('@/components/bhjy/dwzj/dwzj.vue')
//引入保护教育 - 动物之家分类
const dwfl = () => import('@/components/bhjy/dwzj/dwfl.vue')
//引入保护教育 - 动物分类详情
const dwflxq = () => import('@/components/bhjy/dwzj/dwflxq.vue')

//引入保护教育 - 主题展馆
const ztzg = () => import('@/components/bhjy/ztzg/ztzg.vue')
//引入保护教育 - 动物展示详情
const ztzgxq = () => import('@/components/bhjy/ztzg/ztzgxq.vue')
//引入保护教育 - 语音解说
const yyjs = () => import('@/components/bhjy/yyjs/yyjs.vue')
//引入保护教育 - 语音列表
const yylb = () => import('@/components/bhjy/yyjs/yylb.vue')
//引入保护教育 - 语音列表详情
const yyxq = () => import('@/components/bhjy/yyjs/yyxq.vue')

//引入购票预定 - 入口
const gpyd = () => import('@/components/gpyd/index.vue')
// 引入购票预定 - 在线购票
const zxgp = () => import('@/components/gpyd/zxgp/zxgp.vue')
// 引入购票预定 - 购票详情页面
const gpDetail = () => import('@/components/gpyd/detail/gp-detail.vue')
// 引入购票预定 - 订单确定页面
const orderform = () => import('@/components/gpyd/order-form/orderform.vue')
// 引入购票预定 - 支付选择页面
const selectpay = () => import('@/components/gpyd/selectpay/selectpay.vue')
// 引入购票定义 - 购物车
const shopping = () => import('@/components/gpyd/shopping/shopping.vue')

// 引入我的订单 
const myorder = () => import('@/components/myOrder/index.vue')
// 引入我的订单 - 订单详情
const orderDetail = () => import('@/components/myOrder/order-detail/orderDetail.vue')

// 我的二维码门票
const prcode = () => import('@/components/prCode/index.vue')
// 我的二维码门票 - 多个二维码门票
const moreCode = () => import('@/components/prCode/moreCode/more-code.vue')
// 我的二维码门票 - 单个二维码门票
const oneCode = () => import('@/components/prCode/oneCode/one-code.vue')

// 票价信息
const faresInfo = () => import('@/components/faresInfo/fares-info.vue')

//引入游览图 - 入口
const ylt = () => import('@/components/ylt/index.vue')
//引入游览图 - 游览图导航
const yltdh = () => import('@/components/ylt/ylt/yltdh.vue')
//引入游览图 - 游览图解答
const yltjd = () => import('@/components/ylt/ylt-jd/yltjd.vue')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: index },
    { 
      path: '/bhjy', name: '保护教育', redirect: '/bhjy/dwkx', component:bhjy,
      children:[
        { path:'/bhjy/dwkx',component:dwkx,name:'动物科学' },
        { path:'/bhjy/dwzj',component:dwzj,name:'动物之家' },
        { path:'/bhjy/yyjs',component:yyjs,name:'语音解说' }
      ]
    },
    { path:'/bhjy/zxdt', component:zxdt, name:'最新动态' },
    { path:'/bhjy/zxdtxq', component:zxdtxq, name:'最新动态详情' },
    { path:'/bhjy/dwkxxq', component:dwkxxq, name:'动物科学详情' },
    { path:'/bhjy/dwfl', component:dwfl, name:'动物之家分类' },
    { path:'/bhjy/dwflxq', component:dwflxq, name:'动物分类详情' },
    { path:'/bhjy/ztzg', component:ztzg, name:'主题展馆' },
    { path:'/bhjy/ztzgxq',component:ztzgxq, name:'主题展馆详情' },
    { path:'/bhjy/yylb',component:yylb, name:'语音列表' },
    { path:'/bhjy/yyxq',component:yyxq, name:'语音详情' },
    { path: '/gpyd', name: '购票预定', redirect: '/gpyd/zxgp', component:gpyd,
      children:[
        { path:'/gpyd/zxgp',component:zxgp,name:'在线购买' },
        { path:'/gpyd/shopping',component:shopping,name:'购物车' }
      ]
    },
    { path: '/gpyd/gpDetail', name: '购票详情', component: gpDetail },
    { path: '/gpyd/orderform', name: '订单详情填写', component: orderform},
    { path: '/gpyd/selectpay', name: '选择支付', component: selectpay},
    { 
      path: '/myorder/order', name: '我的订单', component:myorder,
      // children:[
      //   { path: '/myorder/allorder', component: allorder, name: '全部订单'}
      // ]
    },
    { path: '/myorder/orderdetail', name: '订单详情', component: orderDetail},
    { path: '/code/myprcode', name: '二维码门票', component: prcode},
    { path: '/code/morecode', name: '多个二维码门票', component: moreCode},
    { path: '/code/onecode', name: '单个二维码门票', component: oneCode},
    { path: '/faresinfo', name: '票价信息', component: faresInfo},
    { 
      path: '/ylt', name: '游览图', redirect: '/ylt/ylt',
      component:ylt, children:[
        { path:'/ylt/ylt',component:yltdh,name:'游览图导航' },
        { path:'/ylt/yltjd',component:yltjd,name:'游览图解答' },
      ]
    },
  ]
})
