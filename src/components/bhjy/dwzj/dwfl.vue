<template>
  <div class='dwlb'>
    <mt-search></mt-search>
    <ul class='dwkx'>
      <li @click="toDetail">
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>地球上的爱情鸟--双脚犀鸟</h4>
            <p>广州动物园的斑马一直受到游客的喜爱，尤其是斑马漫画闻名于微博之后</p>
        </div>
      </li>
      <li>
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>地球上的爱情鸟--双脚犀鸟</h4>
            <p>广州动物园的斑马一直受到游客的喜爱，尤其是斑马漫画闻名于微博之后</p>
        </div>
      </li>
      <li>
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>地球上的爱情鸟--双脚犀鸟</h4>
            <p>广州动物园的斑马一直受到游客的喜爱，尤其是斑马漫画闻名于微博之后</p>
        </div>
      </li>
      <li>
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>地球上的爱情鸟--双脚犀鸟</h4>
            <p>广州动物园的斑马一直受到游客的喜爱，尤其是斑马漫画闻名于微博之后</p>
        </div>
      </li>
      <li>
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>地球上的爱情鸟--双脚犀鸟</h4>
            <p>广州动物园的斑马一直受到游客的喜爱，尤其是斑马漫画闻名于微博之后</p>
        </div>
      </li>
      <li>
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>地球上的爱情鸟--双脚犀鸟</h4>
            <p>广州动物园的斑马一直受到游客的喜爱，尤其是斑马漫画闻名于微博之后</p>
        </div>
      </li>
      <li>
        <div class='keLeft'>
          <img src="/src/assets/images/test.png" alt="">
        </div>
        <div class='keRight'>
            <h4>地球上的爱情鸟--双脚犀鸟</h4>
            <p>广州动物园的斑马一直受到游客的喜爱，尤其是斑马漫画闻名于微博之后</p>
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
        this.$router.push({path:'/bhjy/dwflxq'})
      }
    }
}
</script>

<style lang="scss" scoped>
  @import '../../../styles/mixin.scss';
  ul.dwkx{
    @include clearMargin;
    padding:p2r(12) p2r(28) 0;
    li{
      padding:p2r(30) 0;
      border-bottom:1px solid #eee;
      overflow:hidden;
      :nth-child(1){
        padding-top:0;
      }
      .keLeft,.keRight{
        float:left;
      }
      .keLeft{
        width:p2r(208);
        height:p2r(135);
        border-radius:10px;
        img{
          width:100%;
          height:p2r(135);
          border-radius:4px;
        }
      }
      .keRight{
        margin-left:p2r(30);
        h4{
          @include clearMargin;
          width:p2r(443);
          height:p2r(40);
          line-height:p2r(45);
          font-size:p2r(30);
          font-weight:normal;
          margin-bottom:p2r(10);
        }
        p{
          @include clearMargin;
          font-size:p2r(24);
          width:p2r(443);
          height:p2r(43);
          line-height:p2r(43);
          color:#b1b1b1;
          font-size:p2r(24);
          /* overflow: hidden; 
          text-overflow: ellipsis; 
          -o-text-overflow: ellipsis;
          white-space:nowrap; */
        }
      }
    }
  }
</style>