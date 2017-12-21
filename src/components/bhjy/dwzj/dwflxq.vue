<template>
  <div class='dwkxxq'>
    <div class='titHead'>
      <h1>非洲-黑猩猩</h1>
      <div class='fixBtn'>
        <span class='fixIcon'></span>
        <span class='fixTitle'>点击定位</span>
      </div>
    </div>
    <div class='article'>
      广州动物园在2011年从非洲引进了五只小黑猩猩，当时只有1-3岁，经过两年时间，在饲养员的精心饲养下，它们渐渐成长了。在舒适的新家里它们玩得特别开心。黑猩猩善于攀爬的本领和活泼好动的本性，在它们身上充分得到体现，游客常被它们的举动所吸引，而长时间停留驻足欣赏它们的表演。
    </div>
    <div class='artMsg'>
      <img src="/src/assets/images/test.png" alt="">
      <p class='titMsg'>黑猩猩的举动吸引了大批游客驻足</p>
    </div>
    <div class='artMsg'>
      <img src="/src/assets/images/test.png" alt="">
      <p class='titMsg'>黑猩猩的举动吸引了大批游客驻足</p>
    </div>
    <div class='artMsg'>
      <img src="/src/assets/images/test.png" alt="">
      <p class='titMsg'>黑猩猩的举动吸引了大批游客驻足</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../styles/mixin.scss";
.dwkxxq {
  margin-top: p2r(11);
  text-align: center;
  padding: 0 p2r(24);
  .titHead {
    border-bottom: 1px solid #ccc;
    width: 100%;
    overflow: hidden;
    h1 {
      margin:0 auto;
      height: p2r(60);
      line-height: p2r(60);
      font-size: p2r(35);
      letter-spacing:1px;
    }
    .fixBtn {
      margin: p2r(25) auto p2r(25);
      float: none;
    }
  }
  .article {
    margin-top: p2r(30);
    line-height: p2r(42);
    font-size: p2r(30);
    color: #7c7c7c;
    text-align: left;
    text-indent: 2em;
  }
  .artMsg {
    margin-top: p2r(26);
    img {
      width: 100%;
      height: p2r(400);
      border-radius: 5px;
    }
    .titMsg {
      @include clearMargin;
      height: p2r(65);
      line-height: p2r(65);
      font-size: p2r(25);
    }
  }
}
</style>
