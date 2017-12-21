<template>
  <div class="allorder-container">
    <ul class="orderlist">
      <li class="item">
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
          <div class="overall">
            <div class="piece">
              <span>共</span>
              <span class="orange">1</span>
              <span>件</span>
            </div>
            <div>
              <span>合计：</span>
              <span class="orange">¥20.00</span>
            </div>
          </div>
          <div>
            <mt-button type="danger" size="small" class="orderbtn">删除订单</mt-button>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item-top">
          <div>
            <div class="serial-number">订单编号：20171102110</div>
            <div class="order-time">订单时间：2017-11-1 10:20:20</div>
          </div>
          <div class="sign">未使用</div>
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
          <div class="overall">
            <div class="piece">
              <span>共</span>
              <span class="orange">1</span>
              <span>件</span>
            </div>
            <div>
              <span>合计：</span>
              <span class="orange">¥20.00</span>
            </div>
          </div>
          <div>
            <!-- <mt-button type="danger" size="small" class="orderbtn">删除订单</mt-button> -->
            <button class="noclick">删除订单</button>
          </div>
        </div>
      </li>
      <li class="item">
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
          <div class="overall">
            <div class="piece">
              <span>共</span>
              <span class="orange">1</span>
              <span>件</span>
            </div>
            <div>
              <span>合计：</span>
              <span class="orange">¥20.00</span>
            </div>
          </div>
          <div>
            <mt-button type="danger" size="small" class="orderbtn">删除订单</mt-button>
          </div>
        </div>
      </li>
      <li class="item">
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
          <div class="overall">
            <div class="piece">
              <span>共</span>
              <span class="orange">1</span>
              <span>件</span>
            </div>
            <div>
              <span>合计：</span>
              <span class="orange">¥20.00</span>
            </div>
          </div>
          <div>
            <mt-button type="danger" size="small" class="orderbtn">删除订单</mt-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.allorder-container{
  padding-top: p2r(82);
  .orderlist{
    @include clearLi;
    background: #F6F6F6;
    .item{
      background: #ffffff;
      margin-bottom: p2r(20);
      &:nth-last-child(1){
        margin: 0;
      }
    }
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
      display: flex;
      justify-content: space-between;
      padding: p2r(30) 10px;
      .overall{
        display: flex;
        .piece{
          margin-right: 10px;
        }
        .orange{
          color: #FE7031;
        }
      }
      .orderbtn{
        background: #FE7031;
        font-size: 13px;
      }
      .noclick{
        display: inline-block;
        padding: 0 12px;
        height: 33px;
        border: 1px solid #E4E4E4;
        border-radius: 4px;
        box-sizing: border-box;
        outline: none;
        overflow: hidden;
        text-align: center;
        background: #F6F6F6;
        color: #D4D4D4;
        font-size: 13px;
      }
    }
  }
}
</style>
