<template>
  <div class="prcode-container">
    <ul class="prcodelist">
      <li class="item">
        <div @click="toDetail">
          <div class="item-top">
            <div>
              <div class="serial-number">订单编号：20171102110</div>
              <div class="order-time">订单时间：2017-11-1 10:20:20</div>
            </div>
          </div>
          <div class="item-body">
            <div class="imgbox">
              <img src="../../assets/images/gwc-test.png" alt="" class="orderimg">
            </div>
            <div class="item-info">
              <div class="item-title">广州动物园--全票</div>
              <div class="item-time">游玩日期：2017-12-8</div>
              <div class="item-num">
                <span>全票</span>
                <span class="numcolor">X2</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item-bottom">
          <mt-button type="danger" class="examine" @click="toMoreCode">查看二维码</mt-button>
        </div>
      </li>
      <li class="item">
        <div @click="toDetail">
          <div class="item-top">
            <div>
              <div class="serial-number">订单编号：20171102110</div>
              <div class="order-time">订单时间：2017-11-1 10:20:20</div>
            </div>
          </div>
          <div class="item-body">
            <div class="imgbox">
              <img src="../../assets/images/gwc-test.png" alt="" class="orderimg">
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
        </div>
        <div class="item-bottom">
          <mt-button type="danger" class="examine" @click="toOneCode">查看二维码</mt-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  methods: {
    toMoreCode(){
      this.$router.push({ path: '/code/morecode'})
    },
    toOneCode(){
      this.$router.push({ path: '/code/onecode'})
    },
    toDetail(){
      this.$router.push({ path: '/myorder/orderdetail'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.prcode-container{
  .prcodelist{
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
      padding: p2r(30) 10px;
      .examine{
        width: 100%;
        background: #59C03E;
      }
    }
  }
}
</style>
