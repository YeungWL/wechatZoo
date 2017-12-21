<template>
  <div class="ticket-container">
    <ul class="nav-bar">
      <li v-for="(item,index) in linkList" :key="index" :class="[{action: index === actionIndex}]">
        <span class="toplink" @click="handelActionIndex(index,item.linkTo)">{{ item.text }}</span>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      actionIndex: 0,
      linkList:[
        {text:'选票',linkTo:'/gpyd/zxgp'},
        {text:'购物车',linkTo:'/gpyd/shopping'}
      ]
    }
  },
  methods:{
    handelActionIndex(index,url){ // 改变路由切换
      this.actionIndex = index;
      this.$router.push({ path: url });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.ticket-container{
  .nav-bar{
    @include clearLi;
    position: fixed;
    width: 100%;
    display: flex;
    background: #F2F2F2;
    z-index: 999;
    li{
      margin: 0 40px;
      padding: 12px 0;
      width: 50%;
      text-align: center;
      border-bottom: 3px solid #F2F2F2;
      .toplink{
        display: inline-block;
        color: #999;
        padding: 0 15px;
      }
      &.action{
        .toplink{
        color: #59BD3A;
        }
        border-bottom-color: #59BD3A;
      }
    }
  }
}
</style>
