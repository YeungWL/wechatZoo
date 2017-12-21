<template>
  <div>
    <div class='yyjs'></div>
    <ul class='gongneng'>
      <li>
        <div class='smIcon'></div>
        <div class='smName'>扫描景点二维码获取</div>
        <div class='RigIcon'></div>
      </li>
      <li class='active'>
        <div class='yyIcon'></div>
        <div class='smName'>摇一摇获取</div>
        <div class='RigIcon'></div>
      </li>
      <li @click="toDetail">
        <div class='jsIcon'></div>
        <div class='smName'>景点语音讲解列表</div>
        <div class='RigIcon'></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods:{
      toDetail(){
        this.$router.push({path:'/bhjy/yylb'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/mixin.scss';
  .yyjs{
    width:100%;
    height:p2r(305);
    background:url('/src/assets/images/voice_banner.png') no-repeat center center;
    background-size:cover;
  }
  ul.gongneng{
    @include clearLi;
    li{
      padding:p2r(46) p2r(20);
      height:p2r(70);
      border-bottom:p2r(20) solid #f6f6f6;
      .smIcon,.smName,.yyIcon,.jsIcon{
        float:left;
      }
      .smIcon,.yyIcon,.jsIcon{
        width:p2r(72);
        height:p2r(72);
        margin-right:p2r(50);
        background:url('/src/assets/images/yyjsIcon.png') no-repeat;
        background-size:cover;
      }
      .smIcon{
        background-position:0 0;
      }
      .yyIcon{
        background-position:0 p2r(-77);
      }
      .jsIcon{
        background-position:0 p2r(-155);
      }
      .smName{
        height:p2r(72);
        line-height:p2r(72);
        font-size:p2r(30);
      }
      .RigIcon{
        float:right;
        width:p2r(40);
        height:p2r(40);
        margin-top:p2r(15);
        background:url('/src/assets/images/yyjsRight.png') 0 p2r(-4) no-repeat;
        background-size:cover;
      }
    }
    li.active{
      .RigIcon{
        background-position: 0 p2r(-47);
      }
      .smName{
        color:#999;
      }
      .smIcon{
        background-position:0 p2r(-239.5);
      }
      .yyIcon{
        background-position:0 p2r(-314);
      }
      .jsIcon{
        background-position:0 p2r(-393);
      }
    }
  }
</style>