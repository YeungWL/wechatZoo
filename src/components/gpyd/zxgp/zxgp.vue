<template>
  <div class="select-container">
    <ul class="list">
      <li class="item">
        <img src="../../../assets/images/test.png" alt="" class="image">
        <div class="item-info">
          <div>
            <div class="title">广州动物园--全票</div>
            <div class="time">开发时间：8:00-18:00</div>
          </div>
          <div>
            <mt-button class="buybtn" @click="toGpDetail">立即购买</mt-button>
          </div>
        </div>
      </li>
      <li class="item">
        <img src="../../../assets/images/test.png" alt="" class="image">
        <div class="item-info">
          <div>
            <div class="title">广州动物园--全票</div>
            <div class="time">开放时间：8:00-18:00</div>
          </div>
          <div>
            <mt-button class="buybtn">立即购买</mt-button>
          </div>
        </div>
      </li>
      <li class="item">
        <img src="../../../assets/images/test.png" alt="" class="image">
        <div class="item-info">
          <div>
            <div class="title">广州动物园--全票</div>
            <div class="time">开放时间：8:00-18:00</div>
          </div>
          <div>
            <mt-button type="primary" class="buybtn">立即购买</mt-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toGpDetail(id){
      this.$router.push({ path: '/gpyd/gpDetail'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.select-container{
  padding-top: 45px;
  .list{
    @include clearLi;
    .item{
      padding-top: p2r(40);
      margin: 0 p2r(20);
      border-bottom: 1px solid #E6E6E6;
      .image{
        display: block;
        margin: 0 auto;
        width: p2r(702);
        height: p2r(304);
        border-radius: 3px;
      }
      .item-info{
        display: flex;
        justify-content: space-between;
        padding: p2r(30) 0;
        .title{
          font-size: 20px;
          font-weight: 500;
          margin-bottom: p2r(20);
        }
        .time{
          font-size: 14px;
          color: #9C9C9C;
        }
        .buybtn{
          border: none;
          background: #FE6F38;
          color: #f7f7f7;
          font-size: p2r(18);
        }
      }
    }
  }
}
</style>
