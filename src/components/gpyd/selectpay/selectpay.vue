<template>
  <div class="pay-container">
    <div class="hint">
      <span>请您在<i class="time">19分34秒</i>内支付完成, 超时订单会自动取消</span>
    </div>
    <div class="money">
      <span>支付金额</span>
      <span class="color">¥20.00</span>
    </div>
    <mt-radio align="right" v-model="value" :options="options" class="pay-radio">
    </mt-radio>
    <div class="pay-btn">
      <mt-button type="primary" class="pay">确认支付</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value: '',
      options: [
        {
          label: '支付宝',
          value: '值F',
        },
        {
          label: '微信',
          value: '值A'
        },
        {
          label: '银联支付',
          value: '值B'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.pay-container{
  background-color: #F6F6F6;
  .hint{
    padding: 0 10px;
    background: #FFFEDF;
    color: #999;
    height: p2r(80);
    line-height: p2r(80);
    font-size: 13px;
    .time{
      color: #FE7031;
    }
  }
  .money{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background: #fff;
    height: p2r(90);
    .color{
      color: #FE7031;
    }
  }
  .pay-btn{
    position: fixed;
    bottom: 0;
    width: 100%;
    .pay{
      width: 100%;
      background: #FE6F38;
      border-radius: 0;
    }
  }
}
</style>
