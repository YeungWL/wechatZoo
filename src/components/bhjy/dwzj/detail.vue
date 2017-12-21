<template>
  <div>
    <mt-swipe :auto="4000" class='hygxq'>
      <mt-swipe-item v-for="(item, i) in list" :key="i">
        <a :href="item.url" target="_blank">
          <!-- 注意：这里 img 的 src ,不要在手动拼接了，而是应该由 父组件 拼接好，传递进来，这样能保证 轮播图的 适用性 -->
          <img :src="item.img" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <div class="fixed">
        <h4>广州海洋馆</h4>
        <div class='fixIcon'></div>
        <div class='fixbtn'>点击定位</div>
    </div>
    <div class='footer'>
      广州海洋馆是一家集游乐、观赏、科研、教育多功能为一体的大型科技综合性场馆，以陈列展览海洋鱼类为主要特色的蓝色海底世界。全馆占地面积为1.5万平方米，馆内放养着200多种鱼类及其它独特罕见的海洋生物，并有多个主题场馆及精彩的海洋动物表演。
    </div>
  </div>
</template>

<script>
// 导入自定义轮播图组件
  export default {
    data(){
      return {
        list: [
          {
            img:'/src/assets/images/test.png',
            url:'javascript:;'
          },
          {
            img:'/src/assets/images/test.png',
            url:'javascript:;'
          },
          {
            img:'/src/assets/images/test.png',
            url:'javascript:;'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
  .mint-swipe {
    height: p2r(398);
    .mint-swipe-item {
      text-align: center;
      overflow: hidden;
      img {
        height: 100%;
      }
    }
  }
  .fixed{
    padding:p2r(20) p2r(24);
    overflow:hidden;
    h4{
      float:left;
      @include clearMargin;
      font-size:p2r(34);
      height:p2r(48);
      line-height:p2r(48)
    }
    .fixbtn{
        float:right;
        width:p2r(169);
        height:p2r(48);
        line-height:p2r(48);
        background:#1aad19;
        text-align:center;
        line-height:p2r(48);
        font-size:p2r(23);
        color:#fff;
        border-radius:4px;
      }
    .fixIcon{
      float:right;
      width:p2r(40);
      height:p2r(40);
      margin-left:p2r(50);
      margin-top:2px;
      background:url('/src/assets/images/fixblue.png') no-repeat;
      background-size:cover;
    }
  }
  .footer{
    padding:p2r(10) p2r(24);
    font-size:p2r(34);
    line-height:p2r(50);
  }
</style>
