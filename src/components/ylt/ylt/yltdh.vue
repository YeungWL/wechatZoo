<template>
  <div class="ylt">
    <ul class='yltdh'>
      <li class='searchIcon' @click="searchBtn=!searchBtn"></li>
      <li>热点</li>
      <li>洗手间</li>
      <li class='active'>景点</li>
      <li>动物</li>
      <li>商店</li>
      <li>餐饮</li>
      <li>餐饮</li>
      <li>餐饮</li>
    </ul>
    <!-- <mt-search v-if="searchBtn"></mt-search> -->
    <div class="searBtn" v-if='searchBtn'>
      <input type="text" value="">
      <div class="searRight" @click="searchBtn=!searchBtn">取消</div>
    </div>
    <div class="footer"></div>
    <ul class='aside'>
      <li>
        <div class='ArIcon'></div>
        <p class='asideTitle'>AR实景</p>
      </li>
      <li @click="jsBtn=!jsBtn" :class="{active:jsBtn==true}">
        <div class='JsIcon'></div>
        <p class='asideTitle'>解说</p>
      </li>
      <li>
        <div class='DdIcon'></div>
        <p class='asideTitle'>导航</p>
      </li>
      <li>
        <div class='LxIcon'></div>
        <p class='asideTitle'>路线</p>
      </li>
    </ul>
    <div class="yltLeft active"><span class="LeftIcon"></span></div>
    <div class="yltRight"><span class="RightIcon"></span></div>
    <div class="jstk" v-if='jsBtn'>
        <div class="jstkTop">
          <div class="jsTitle">自动解说</div>
          <mt-switch v-model="value1"></mt-switch>
          <mt-switch v-model="value2"></mt-switch>
          <div class="jsClose" @click="jsBtn=!jsBtn">X</div>
        </div>
        <p class="jsContent">打开按钮后，靠近某个景点附近时，自动弹出解说框，自动播放该景点语音解说。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: false,
      jsBtn: false,
      searchBtn: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/mixin.scss";
::-webkit-scrollbar {
  display: none;
}
.ylt {
  overflow-x: auto;
  ul.yltdh {
    @include clearLi; /* margin: 0; padding: 0; list-style: none; */
    width: p2r(985);
    height: p2r(88);
    box-shadow: 0 0 1px 1px #ccc;
    li {
      float: left;
      font-size: p2r(30);
      margin: p2r(25) p2r(25) p2r(28);
      color: #9a9a9a;
    }
    li.active {
      color: #57bf3f;
    }
    :nth-child(1) {
      margin-right: p2r(3);
      margin-top: p2r(15);
    }
    li.searchIcon {
      width: p2r(47);
      height: p2r(47);
      background: url("/src/assets/images/yldIcon.png") 0 p2r(10) no-repeat;
      background-size: cover;
    }
  }
  // .mint-search{
  //   position: absolute;
  //   width:100%;
  //   top:0;
  //   /deep/ .mint-searchbar{
  //     padding:0;
  //     height:p2r(88);
  //     .mint-searchbar-inner{
  //       background:#f6f6f6;
  //     }
  //     .mint-searchbar-core{
  //       background:#f6f6f6;
  //     }
  //     a.mint-searchbar-cancel{
  //       margin-right: p2r(20);
  //       color:#727272;
  //     }
  //   }
  // }
  .searBtn{
    position: absolute;
    z-index:2;
    top:0;
    padding:p2r(11) 0;
    background: #fff;
    box-shadow: 0 0 1px 1px #ccc;
    &::before{
      content:'';
      position: absolute;
      width:p2r(45);
      height:p2r(45);
      margin-top:p2r(9  );
      margin-left:p2r(35);
      background:url('/src/assets/images/yldIcon.png') p2r(0) p2r(10) no-repeat;
      background-size: cover;
    }
    input[type=text],.searRight{
      float:left;
    }
    input[type=text]{
      width:p2r(555);
      height:p2r(58);
      margin-left:p2r(23);
      border:1px solid #eee;
      color:#7c7c7c;
      border-radius: 3px;
      outline: none;
      padding-left:p2r(70);
      background: #f6f6f6;
    }
    .searRight{
      width:p2r(98);
      height:p2r(63);
      line-height:p2r(63);
      color:#7c7c7c;
      text-align: center;
    }
  }
  ul.aside {
    @include clearLi; /* margin: 0; padding: 0; list-style: none; */
    position: absolute;
    top: p2r(160);
    right: p2r(25);
    width: p2r(83);
    li {
      width: p2r(81);
      height: p2r(93);
      float: left;
      padding: 0 p2r(3);
      margin-top: 2px;
      box-shadow: 0 0 1px 1px #ccc;
      background: #fff;
      .ArIcon,
      .JsIcon,
      .DdIcon,
      .LxIcon {
        width: p2r(40);
        height: p2r(40);
        margin: p2r(8) p2r(22) 0;
        background: url("/src/assets/images/yldIcon.png") p2r(0) p2r(-67)
          no-repeat;
        background-size: cover;
      }
      .JsIcon {
        background-position: p2r(0) p2r(-111);
      }
      .DdIcon {
        background-position: p2r(0) p2r(-149);
      }
      .LxIcon {
        background-position: p2r(0) p2r(-193);
      }
      .asideTitle {
        @include clearMargin;
        height: p2r(36);
        line-height: p2r(36);
        font-size: p2r(20);
        text-align: center;
        color: #bab9b9;
      }
    }
    li.active {
      box-shadow: 0 0 1px 1px #57bf3f;
      .ArIcon,
      .JsIcon,
      .DdIcon,
      .LxIcon {
        background: url("/src/assets/images/yldIcon2.png") p2r(0) p2r(-67)
          no-repeat;
        background-size: cover;
      }
      .asideTitle {
        color: #57bf3f;
      }
      .JsIcon {
        background-position: p2r(0) p2r(-111);
      }
      .DdIcon {
        background-position: p2r(0) p2r(-149);
      }
      .LxIcon {
        background-position: p2r(0) p2r(-193);
      }
    }
    :nth-child(1) {
      margin-bottom: p2r(23);
    }
  }
  .yltLeft,
  .yltRight {
    position: absolute;
    bottom: p2r(32);
    width: p2r(80);
    height: p2r(80);
    border-radius: 50%;
    box-shadow: 0 0 1px 1px #ccc;
    background: #fff;
  }
  .yltLeft {
    left: p2r(24);
  }
  .yltRight {
    right: p2r(24);
  }
  .LeftIcon,
  .RightIcon {
    position: absolute;
    width: p2r(45);
    height: p2r(45);
    margin: p2r(16) p2r(17) p2r(20);
    background: url("/src/assets/images/yldIcon.png") 0 p2r(-264) no-repeat;
    background-size: cover;
  }
  .RightIcon {
    margin-top: p2r(20);
    background-position: 0 p2r(-317);
  }
  .yltLeft.active,
  .yltRight.active {
    box-shadow: 0 0 1px 1px #57bf3f;
    .LeftIcon,
    .RightIcon {
      background: url("/src/assets/images/yldIcon2.png") 0 p2r(-264) no-repeat;
      background-size: cover;
    }
    .RightIcon {
      background-position: 0 p2r(-317);
    }
  }
  .footer {
    position: absolute;
    margin-top: 2px;
    width: 100%;
    height: p2r(1243);
    background: url("/src/assets/images/yltBg.png") p2r(-50) p2r(40) no-repeat;
    background-size: cover;
    background-color: #e7f4e7;
  }
  .jstk {
    position: absolute;
    width: p2r(610);
    height: p2r(160);
    top:p2r(282);
    left:p2r(21);
    background: #fff;
    box-shadow: 0 0 1px 1px #ccc;
    border-radius: 4px;
    div.jstkTop {
      padding:p2r(10) p2r(20);
      overflow: hidden;
      .jsClose{
        position:absolute;
        right: p2r(20);
        top: p2r(20);
        font-size:p2r(35);
        color:#6bd551;
      }
      .jsTitle,
      .mint-switch,
      .jsClose {
        float: left;
      }
      .jsTitle{
        margin-right:p2r(30);
        font-size:p2r(30);
        line-height: p2r(50);
      }
      .mint-switch {
        margin-right: p2r(8);
      }
    }
    p{
        padding:p2r(10) p2r(20);
        margin:0;
        line-height:p2r(30);
        font-size:p2r(25);
        letter-spacing: 1px;
        color:#8a8a8a;
      }
  }
}
</style>

