<template>
  <div class="orderDetail-container">
    <div class="item">
      <div class="item-top">
        <div>
          <div class="serial-number">订单编号：20171102110</div>
          <div class="order-time">订单时间：2017-11-1 10:20:20</div>
        </div>
        <div class="sign">已使用</div>
      </div>
      <div class="item-body">
        <div class="imgbox">
          <img src="../../../assets/images/gwc-test.png" alt="" class="orderimg">
        </div>
        <div class="item-info">
          <div class="item-title">广州动物园--全票</div>
          <div class="item-time">游玩日期：2017-12-8</div>
          <div class="item-num">
            <span>全票</span>
            <span class="numcolor">X1</span>
          </div>
        </div>
      </div>
      <div class="item-bottom">
        <div class="money-top">
          <div>
            <span>总额：</span>
            <span class="orange">¥20.00</span>
          </div>
          <div>
            <span>优惠：</span>
            <span class="orange">¥0.00</span>
          </div>
        </div>
        <div class="money-bottom">
          <div class="synthesize">
            <span>实付金额：</span>
            <span class="orange">¥20.00</span>
          </div>
        </div>
      </div>
    </div>
    <div class="order-info">
      <div class="order-time">
        <span class="title">订单时间</span>
        <span>2017-10-31 14:13:06</span>
      </div>
      <div class="order-id">
        <span class="title">交易单号</span>
        <span>2017111111111</span>
      </div>
    </div>
    <div class="order-info">
      <div class="order-time">
        <span class="title">购买人姓名</span>
        <span>XXX</span>
      </div>
      <div class="order-id">
        <span class="title">购买人手机</span>
        <span>XXXX</span>
      </div>
    </div>
    <div class="examine">
      <mt-button type="primary" class="qrcode">查看二维码</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.orderDetail-container{
  background: #F6F6F6;
  .item{
    background: #ffffff;
    .item-top{
      display: flex;
      justify-content: space-between;
      padding: p2r(40) 10px p2r(30);
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
    .item-body{
      display: flex;
      padding: p2r(20) 10px;
      border-top: 1px solid #EFEFEF;
      border-bottom: 1px solid #EFEFEF;
      .imgbox{
        width: p2r(190);
        height: p2r(160);
        .orderimg{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .item-info{
        padding-left: p2r(30);
        flex: 1;
        .item-title{
          font-size: 18px;
          height: p2r(56);
          line-height: p2r(56);
        }
        .item-time{
          font-size: 14px;
          color: #959595;
          margin-bottom: p2r(20);
        }
        .item-num{
          display: flex;
          justify-content: space-between;
          .numcolor{
            color: #FE7031;
          }
        }
      }
    }
    .item-bottom{
      padding: 0 10px;
      line-height: p2r(86);
      .orange{
        display: inline-block;
        width: 60px;
        color: #FE7031;
      }
      .money-top{
        display: flex;
        justify-content: space-between;
        height: p2r(86);
        border-bottom: 1px solid #E5E5E5;
      }
      .money-bottom{
        height: p2r(86);
        .synthesize{
          float: right;
        }
      }
    }
  }
  .order-info{
    line-height: p2r(86);
    padding: 0 10px;
    margin-top: p2r(20);
    background: #ffffff;
    .order-time{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #E5E5E5;
    }
    .order-id{
      display: flex;
      justify-content: space-between;
    }
    .title{
      color: #979797;
    }
  }
  .examine{
    position: fixed;
    bottom: 0;
    width: 100%;
    .qrcode{
      width: 100%;
      border-radius: 0;
      background: #59C03E;
      height: p2r(89);
    }
  }
}
</style>
