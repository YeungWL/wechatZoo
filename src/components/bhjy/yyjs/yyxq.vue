<template>
  <div class='yylb'>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, i) in list" :key="i">
        <a :href="item.url" target="_blank">
          <!-- 注意：这里 img 的 src ,不要在手动拼接了，而是应该由 父组件 拼接好，传递进来，这样能保证 轮播图的 适用性 -->
          <img :src="item.img" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <div class='dwjs active'>
      <div class='yyIcon'></div>
      <div class='jsRight'>
        <h4>猩猩馆解说</h4>
        <p class='jsFrom'>来自广州动物园</p>
        <!-- <div class="pro">
          <div class="pro_bg" id="pro_bg"></div>
          <div class="pro_jdt" id="pro_jdt"></div>
          <div class="bar" id="bar"></div> 
        </div>-->
        <mt-range v-model="rangeValue" :barHeight="2" class="yyxq-range"></mt-range>
        <div class='jsTime'>
          <span class='start'>01:41</span>
          <span class='endTime'>15:00</span>
        </div>
      </div>
    </div>
    <p class='content'>
        建于2006的猩猩馆是动物园的一个标志性建筑，占地3000平方米。展区分为室内玻璃展区厅和室外展览场两大部分。室内展区采用加厚夹胶安全玻璃，游客可以安全的与猩猩进行零距离接触。
      </p>
  </div>
</template>

<script>
  // 导入自定义轮播图组件
  export default {
    data() {
      return {
        list: [{
            img: '/src/assets/images/test.png',
            url: 'javascript:;'
          },
          {
            img: '/src/assets/images/test.png',
            url: 'javascript:;'
          },
          {
            img: '/src/assets/images/test.png',
            url: 'javascript:;'
          }
        ],
        rangeValue: 0
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../styles/mixin.scss';
  .dwjs {
    margin: p2r(30) p2r(25) p2r(20);
    padding: p2r(18) p2r(30);
    border:1px solid #e9e9e9;
    border-radius:4px;
    overflow: hidden;
    p,h4 {
      @include clearMargin;
    }
    .yyIcon {
      float: left;
      width: p2r(88);
      height: p2r(89);
      margin-top: p2r(35);
      background: url('/src/assets/images/yyxqIcon.png');
      background-size: cover;
    }
    .jsRight {
      float: right;
      width: p2r(516);
      h4 {
        margin-top: p2r(13);
        font-size:p2r(32);
        height: p2r(50);
        line-height: p2r(50);
        letter-spacing: 2px;
      }
      .jsFrom {
        height: p2r(43);
        line-height: p2r(43);
        font-size:p2r(23);
        font-size: p2r(23);
        color: #ccc;
      }
      .pro {
        position: relative;
        float: left;
        width: p2r(516);
        height: p2r(5);
        background: #ebebeb;
        border-radius: p2r(5);
        margin:p2r(13) 0;
      }
      .pro_bg {
        width: 0;
        height: p2r(5);
        background: #f0c;
        border-radius: p2r(5);
      }
      .pro_jdt {
        width: p2r(0);
        height: p2r(5);
        margin-top:p2r(-4);
        background: #5abd3e;
        border-radius: p2r(5);
      }
      .bar {
        position: absolute;
        left: p2r(0);
        top: p2r(-7);
        width: p2r(20);
        height: p2r(20);
        background: #ddd;
        border-radius: p2r(20);
      }
    }
    .jsTime{
      height:p2r(30);
      line-height:p2r(30);
      margin-bottom:p2r(13);
    }
    .start,.endTime{
      display:block;
      height:p2r(30);
    }
    .start{
      float:left;
    }
    .endTime{
      float:right;
    }
  }
  .dwjs.active{
      .yyIcon{
      background-position: 0 p2r(-276);
      }
      .pro_jdt {
        width: p2r(95);
        background: #5abd3e;
      }
      .bar {
        left: p2r(95);
        background: #5abe3d;
      }
    }
  .content{
    padding:0 p2r(24);
    height:p2r(45);
    line-height:p2r(45);
    font-size:p2r(30);
    color:#a0a0a0;
    // text-indent:2em;
  }
</style>
