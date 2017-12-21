<template>
  <div class='yylb'>
    <div class='yyjs'></div>
    <mt-search></mt-search>
    <ul class='dwfl'>
      <!-- <li>
        <div class='dwzjLeft' @click="toDetail">
            <img src="/src/assets/images/test.png" alt="">
            <h4>两爬类</h4>
        </div>
        <div class='dwzjRight'>
            <img src="/src/assets/images/test.png" alt="">
            <h4>禽鸟类</h4>
        </div>
    </li>
    <li>
        <div class='dwzjLeft' @click="toDetail">
            <img src="/src/assets/images/test.png" alt="">
            <h4>两爬类</h4>
        </div>
        <div class='dwzjRight'>
            <img src="/src/assets/images/test.png" alt="">
            <h4>禽鸟类</h4>
        </div>
    </li> -->

      <li @click="toDetail">
        <img src="/src/assets/images/test.png" alt="">
        <h4>熊猫馆解说</h4>
      </li>
      <li>
        <img src="/src/assets/images/test.png" alt="">
        <h4>猩猩馆解说</h4>
      </li>
      <li>
        <img src="/src/assets/images/test.png" alt="">
        <h4>蝴蝶馆解说</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toDetail() {
      this.$router.push({ path: "/bhjy/yyxq" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/mixin.scss";
.yyjs {
  position: absolute;
  top: 0;
  width: 100%;
  height: p2r(305);
  background: #f6f6f6 url("/src/assets/images/voice_banner.png") no-repeat center center;
  background-size: cover;
  z-index: 2;
}
.yylb {
  .mint-search {
    margin-top: p2r(295);
  }
}
</style>