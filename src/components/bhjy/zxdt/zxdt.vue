<template>
  <div>
    <ul class='zxdt'>
      <li @click="toDetail">
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>关于预防不法分子假冒 我园招聘行骗的声明</h4>
            <p>发布时间：2017-12-01</p>
        </div>
      </li>
      <li>
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>美国国家动物园饲养员的一天一天</h4>
            <p>发布时间：2017-12-01</p>
        </div>
      </li>
      <li>
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>美国国家动物园饲养员的一天一天</h4>
            <p>发布时间：2017-12-01</p>
        </div>
      </li>
      <li>
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>美国国家动物园饲养员的一天一天</h4>
            <p>发布时间：2017-12-01</p>
        </div>
      </li>
      <li>
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>美国国家动物园饲养员的一天一天</h4>
            <p>发布时间：2017-12-01</p>
        </div>
      </li>
      <li>
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>美国国家动物园饲养员的一天一天</h4>
            <p>发布时间：2017-12-01</p>
        </div>
      </li>
      <li>
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>美国国家动物园饲养员的一天一天</h4>
            <p>发布时间：2017-12-01</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      result: [
        {
          title: "xxx",
          value: "xxx"
        }
      ]
    };
  },
  methods: {
    toDetail() {
      this.$router.push({ path: "/bhjy/zxdtxq" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
ul.zxdt li {
  .keRight {
    h4 {
      font-weight: normal;
      font-size: p2r(31);
    }
  }
}
</style>