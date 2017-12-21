<template>
  <div class="morecode-container">
    <div class="code-top">
      <div>
        <div class="serial-number">订单编号：20171102110</div>
        <div class="order-time">订单时间：2017-11-1 10:20:20</div>
      </div>
      <div class="sign">共2张门票</div>
    </div>
    <div class="code-body">
      <div class="code-num">
        <span class="num">取票号:</span>
        <span>2199000000000</span>
      </div>
      <div class="codelist">
        <div class="codebox">
          <img src="../../../assets/images/test_code.png" alt="二维码" class="code">
        </div>
        <div>广州动物园门票01</div>
      </div>
      <div class="codelist">
        <div class="codebox">
          <img src="../../../assets/images/test_code.png" alt="二维码" class="code">
        </div>
        <div>广州动物园门票02</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.morecode-container{
  background: #F6F6F6;
  .code-top{
    display: flex;
    justify-content: space-between;
    padding: p2r(40) 10px p2r(30);
    background: #ffffff;
    .serial-number{
      font-size: 18px;
      margin-bottom: p2r(14);
    }
    .order-time{
      font-size: 14px;
      color: #959595;
    }
    .sign{
      font-size: 18px;
      color: #FE7031;
    }
  }
  .code-body{
    margin-top: p2r(20);
    text-align: center;
    background: #ffffff;
    .code-num{
      padding: p2r(36) 0;
    }
    .codebox{
      margin: 0 auto;
      padding-bottom: p2r(20);
      width: p2r(412);
      height: p2r(412);
      .code{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .codelist{
      margin-bottom: p2r(30);
      &:nth-last-child(1){
        margin: 0;
      }
    }
  }
}
</style>
