<template>
  <div class="shopping-container">
    <ul class="shopping-list">
      <li class="item">
        <div>
          <span class="click"></span>
        </div>
        <div>
          <img src="../../../assets/images/gwc-test.png" alt="" class="image">
        </div>
        <div class="info">
          <div class="title">广州动物园--全票</div>
          <div class="time">游玩日期：2017-12-8</div>
          <div class="price-box">
            <span class="price">¥56</span>
            <numberbox @func="getNumber"></numberbox>
          </div>
        </div>
      </li>
      <li class="item">
        <div>
          <span class="click"></span>
        </div>
        <div>
          <img src="../../../assets/images/gwc-test.png" alt="" class="image">
        </div>
        <div class="info">
          <div class="title">广州动物园--全票</div>
          <div class="time">游玩日期：2017-12-8</div>
          <div class="price-box">
            <span class="price">¥56</span>
            <numberbox @func="getNumber"></numberbox>
          </div>
        </div>
      </li>
      <li class="item">
        <div>
          <span class="click"></span>
        </div>
        <div>
          <img src="../../../assets/images/gwc-test.png" alt="" class="image">
        </div>
        <div class="info">
          <div class="title">广州动物园--全票</div>
          <div class="time">游玩日期：2017-12-8</div>
          <div class="price-box">
            <span class="price">¥56</span>
            <numberbox @func="getNumber"></numberbox>
          </div>
        </div>
      </li>
    </ul>
    <div class="shopping-operation">
      <div class="sum">
        <div class="clickall">
          <span class="click"></span>
          <span>全选</span>
        </div>
        <div class="total">
          <span>合计：</span>
          <span class="money">¥30.00</span>
        </div>
      </div>
      <div class="settle">
        <button class="asttlebtn">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import Numberbox from '../components/numberbox/numberbox'
export default {
  data(){
    return{}
  },
  methods: {
    getNumber(value){
      console.log(value);
    }
  },
  components: { Numberbox }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.shopping-container{
  padding-top: 45px;
  padding-bottom: 48px;
  .shopping-list{
    @include clearLi;
    .item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 10px;
      padding: p2r(30) 0;
      border-bottom: 1px solid #E5E5E5; 
      height: p2r(160);
      .image{
        display: block;
        width: p2r(190);
        height: p2r(160);
      }
      .click{
        display: block;
        width: p2r(25);
        height: p2r(25);
        background: url('../../../assets/images/checkbox.png') no-repeat;
        background-size: 100%;
      }
      .info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: p2r(450);
        height: 100%;
        font-size: p2r(24);
        .time{
          font-size: p2r(14);
          color: #969696;
        }
        .price-box{
          display: flex;
          justify-content: space-between;
          .price{
            color: #FD6E3F;
            font-size: p2r(20);
            font-weight: 500;
          }
        }
      }
    }
  }
  .shopping-operation{
    position: fixed;
    display: flex;
    bottom: 0;
    width: 100%;
    .sum{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      flex: 1;
      border-top: 1px solid #E6E6E6;
      background: #ffffff;
      .click{
        display: inline-block;
        width: p2r(25);
        height: p2r(25);
        background: url('../../../assets/images/checkbox.png') no-repeat;
        background-size: 100%;
        vertical-align: middle;
      }
      .money{
        color: #FE6F38;
      }
    }
    .settle{
      width: p2r(180);
      .asttlebtn{
        padding: 15px 0;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        background: #FE6F38;
        color: #f7f7f7;
      }
    }
  }
}
</style>
