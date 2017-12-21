<template>
  <div>
    <ul class="ztzg">
      <li @click="toDetail">
        <img src="/src/assets/images/test.png" alt="">
        <h4>熊猫馆</h4>
      </li>
      <li>
        <img src="/src/assets/images/test.png" alt="">
        <h4>猩猩馆</h4>
      </li>
      <li>
        <img src="/src/assets/images/test.png" alt="">
        <h4>斑马馆</h4>
      </li>
      <li>
        <img src="/src/assets/images/test.png" alt="">
        <h4>斑马馆</h4>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
  methods:{
    toDetail(){
      this.$router.push({path:'/bhjy/ztzgxq'})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../styles/mixin.scss';
  ul.ztzg{
    @include clearLi;/* margin: 0; padding: 0; list-style: none; */
    margin-top:p2r(10);
    padding:0 p2r(24) 0;
    li{
        height:p2r(376);
        padding-top:p2r(30);
        border-bottom:1px solid #eee;
        img{
          width:100%;
          height:p2r(305);
          border-radius:p2r(8);
        }
        h4{
          @include clearMargin;
          height:p2r(71);
          line-height:p2r(71);
          margin-top: -3px;
          font-size:p2r(30);
          text-align:center;
        }
    }
  }
</style>