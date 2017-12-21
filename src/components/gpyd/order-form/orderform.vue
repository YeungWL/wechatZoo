<template>
  <div class="order-container">
    <mt-swipe class="myswiper" :auto="4000">
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
    <div class="order-info">
      <div class="wrapper">
        <span class="info-title">订单信息</span>
        <span class="order-time">游玩时间：2017-12-08</span>
      </div>
      <div class="wrapper">
        <div>
          <span>单价:</span>
          <span class="orange">¥20.00</span>
        </div>
        <div>
          <span>数量:</span>
          <span class="orange">1</span>
        </div>
      </div>
      <div class="wrapper">
        <div></div>
        <div>
          <span>订单金额:</span>
          <span class="orange">¥20.00</span>
        </div>
      </div>
    </div>
    <div class="person-info">
      <div class="wrapper">
        <span class="info-title">个人信息</span>
      </div>
      <div class="wrapper">
        <mt-field label="姓名:" placeholder="请填写你的个人信息" v-model="username" class="order-fie"></mt-field>
      </div>
      <div class="wrapper">
        <mt-field label="电话:" placeholder="请填写你的个人电话" v-model="phone" class="order-fie"></mt-field>
      </div>
    </div>
    <div class="notice">
      <div class="clickbox">
        <span :class="['click',{action: inputAction === true}]" @click="clickRead"></span>
      </div>
      <div class="read" @click="readMessage">
        <span>
          已经阅读并同意<span class="color">《预定须知》</span>
        </span>
        <span><img src="../../../assets/images/icon_order.png" alt=">" class="icon"></span>
      </div>
    </div>
    <div class="hint">
      <div class="hint-title">温馨提示:</div>
      <div class="hint-item">1.购票一经确认，即时成交，不可退换；</div>
      <div class="hint-item">2.请仔细填写手机号码，订单付款成功后，取票凭证码将会以短信形式发送。</div>
    </div>
    <div class="present">
      <div class="sum">
        <span>实付金额:</span>
        <span class="num">¥20</span>
      </div>
      <div class="box">
        <mt-button class="persentbtn" @click="toPay">提交订单</mt-button>
      </div>
    </div>
  </div>  
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  data(){
    return {
      username: '',
      phone: '',
      inputAction: false
    }
  },
  methods: {
    toPay(){
      this.$router.push({path:'/gpyd/selectpay'})
    },
    readMessage(){
      let title = '预定须知';
      let message = `<div>1.本须知适用于购买本网站的电子门票产品。</div>
        <div>2.游客购买门票需置顶游览日期，日期选择以购票页面可选日期为准。</div>
        <div>3.订单上的所有门票，须在指定游览日期的当天入园，过期无效。</div>
        <div>4.购票一经确认，即时成交，不可退换、改期。</div>`;
      MessageBox.alert(
        message,
        title
      ).then(action => {
        this.inputAction = true;
      });
    },
    clickRead(){
      this.inputAction = !this.inputAction;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.order-container{
  background: #F6F6F6;
  padding-bottom: p2r(80);
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
  .order-info{
    margin: p2r(20) 0;
    padding: 0 10px;
    background: #fff;
    line-height: p2r(85);
    .wrapper{ 
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      height: p2r(85);
      .order-time{
        font-size: 13px;
        color: #9E9E9E;
      }
      .info-title{
        font-size: 17px;
      }
      .orange{
        display: inline-block;
        color: #F26A2B;
        width: p2r(140);
        text-indent: 6px;
      }
    }
  }
  .person-info{
    padding: 0 10px;
    background: #fff;
    line-height: p2r(85);
    .wrapper{ 
      border-bottom: 1px solid #eee;
      height: p2r(85);
      .mint-cell{
        min-height: p2r(85);
      }
      .info-title{
        font-size: 17px;
      }
    }
  }
  .notice{
    display: flex;
    margin: p2r(20) 0;
    padding: 0 10px;
    background: #fff;
    font-size: p2r(30);
    .clickbox{
      width: p2r(28);
      margin: 13px 0;
      margin-right: 10px;
      // padding: 10px;
      // line-height: 0;
      .click{
        display: block;
        width: 100%;
        height: 100%;
        background: url('../../../assets/images/checkbox.png') no-repeat;
        background-size: 100%;
        margin: auto;
      }
      .action{
        background-position: 0 -26px;
      }
    }
    .read{
      flex: 1;
      display: flex;
      justify-content: space-between;
      padding: 12px 0;
      .icon{
        display: block;
        width: 6px;
      }
      .color{
        color: #FE6F38;
      }
    }
  }
  .hint{
    padding: 0 10px 10px;
    background: #fff;
    .hint-title{
      padding: p2r(30) 0;
    }
    .hint-item{
      margin-bottom: p2r(10);
      color: #949494;
      font-size: 13px;
      line-height: 20px;
    }
  }
  .present{
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    background: #fff;
    .box{
      width: p2r(180);
      height: 100%;
      .persentbtn{
        padding: p2r(30) 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
        font-size: 14px;
        background: #FE6F38;
        color: #fff;
      }
    }
    .sum{
      flex: 1;
      padding: 0 10px;
      padding-top: p2r(30);
      border-top: 1px solid #eee;
      .num{
        color: #FE6F38;
      }
    }
  }
}
</style>
