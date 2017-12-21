<template>
  <div class="detail-container">
    <mt-swipe :auto="4000" class="myswiper">
      <mt-swipe-item><img src="../../../assets/images/test.png" alt="" class="swipeimg"></mt-swipe-item>
      <mt-swipe-item><img src="../../../assets/images/test1.png" alt="" class="swipeimg"></mt-swipe-item>
    </mt-swipe>
    <div class="info">
      <div class="info-title">
        <div class="title">广州动物园--全票</div>
        <div class="time">营业时间：09:30-18:00</div>
      </div>
      <div class="service">
        <span class="icon"></span>
        <span>客服</span>
      </div>
    </div>
    <ul class="date-list">
      <li class="base action">
        <div class="week">周三</div>
        <div class="day">今天</div>
      </li>
      <li class="base">
        <div class="week">周三</div>
        <div class="day">明天</div>
      </li>
      <li class="base action">
        <div class="week">周三</div>
        <div class="day">12月08日</div>
      </li>
      <li class="base">
        <div class="week">周三</div>
        <div class="day">12月09日</div>
      </li>
      <li class="base">
        <div class="week">周三</div>
        <div class="day">12月10日</div>
      </li>
    </ul>
    <div class="countbox">
      <div class="wrapper">
        <span>门票数量：</span>
        <div class="numbox">
          <numberbox @func="getNumber"></numberbox>
        </div>
      </div>
      <div class="wrapper">
        <span>单价：</span>
        <span class="money">¥20:00</span>
      </div>
      <div class="wrapper">
        <span>总价：</span>
        <span class="money">¥20:00</span>
      </div>
    </div>
    <div class="btnbox">
      <mt-button class="btn car">加入购物车</mt-button>
      <mt-button class="btn reserve" @click="toOrderform">立即预定</mt-button>
    </div>
  </div>
</template>

<script>
import Numberbox from '../components/numberbox/numberbox.vue'
export default {
  data(){
    return {
      
    }
  },
  methods: {
    toOrderform(){
      this.$router.push({ path: '/gpyd/orderform'})
    },
    getNumber(value){
      console.log(value);
    }
  },
  components: { Numberbox }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.detail-container{
  background: #F6F6F6;
  .myswiper{
    height: p2r(333);
    .mint-swipe-item{
      height: 100%;
      .swipeimg{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .info{
    display: flex;
    height: p2r(117);
    background: #fff;
    .info-title{
      flex: 1;
      padding-left: 10px;
      margin: p2r(10) 0;
      border-right: 1px solid #eee;
      .title{
        line-height: p2r(70);
        font-weight: 500;
        font-size: p2r(28);
      }
      .time{
        font-size: p2r(18);
        color: #d0d0d0;
      }
    }
    .service{
      padding: p2r(40) p2r(26);
      width: p2r(184);
      color: #58BF3B;
      text-align: center;
      box-sizing: border-box;
      font-size: p2r(32);
      .icon{
        display: inline-block;
        width: p2r(30);
        height: p2r(32);
        background: url('../../../assets/images/icon_service.png') no-repeat;
        background-size: 100%;
        vertical-align: middle;
      }
    }
  }
  .date-list{
    @include clearLi;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: p2r(20) 0;
    padding: 0 10px;
    background: #fff;
    height: p2r(120);
    text-align: center;
    font-size: 14px;
    .week{
      color: #B7B7B7;
      font-size: 13px;
      margin-bottom: 5px;
    }
    .base{
      padding: p2r(15);
    }
    .action{
      background: #59C03E;
      border-radius: 3px;
      color: #fff;
      .week{
        color: #fff;
      }
    }
  }
  .countbox{
    background: #fff;
    padding: 0 10px;
    line-height: p2r(90);
    .wrapper{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      height: p2r(90);
      span:nth-child(1){
        width: 90px;
        text-align: right;
      }
      .money{
        color: #FE7031;
      }
      .numbox{
        padding: 10px 0;
        box-sizing: border-box;
      }
    }
  }
  .btnbox{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    .btn{
      @include highlight;
      padding: p2r(20) 0;
      width: 50%;
      height: 100%;
      border: none;
      outline: none;
      border-radius: 0;
      &.car{
        background: #fff;
        border-top: 1px solid #E6E6E6;
      }
      &.reserve{
        background: #FE6F38;
        color: #fff;
      }
    }
  }
}
</style>
