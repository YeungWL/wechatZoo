<template>
  <div class='dwkx'>
    <mt-search></mt-search>
    <ul class='dwkx'>
      <li @click="toDetail">
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>现代动物园及水族馆的角色及功能</h4>
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
    data(){
      return {
        value:'',
        result:[
          {
            title:'xxx',
            value:'xxx'
          }
        ]
      }
    },
    methods:{
      toDetail(){
        this.$router.push({path:'/bhjy/dwkxxq'})
      }
  }
}
</script>

<style lang="scss" scoped>
  /* @import '../../../styles/mixin.scss'; */
</style>