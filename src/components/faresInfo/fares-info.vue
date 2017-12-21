<template>
  <div class="faresinfo-container">
    <div class="template-box time">
      <div class="template-left">
        <span class="title">售票时间</span>
      </div>
      <div class="template-right">
        <div class="datetime border">
          8:00-16:30 <span class="gray">(4月16日至10月15日)</span>
        </div>
        <div class="datetime">
          8:00-16:00 <span class="gray">(10月16日至4月15日)</span>
        </div>
      </div>
    </div>
    <div class="fares-title">动物园门票价格</div>
    <ul class="fares-list">
      <li class="template-box price">
        <div class="template-left">
          全票<span class="orange">20</span>元
        </div>
        <div class="template-right">
          <span>身高1.1米以上者，凭票1人限带两名1.1米以下儿童进园，超出人数均需购半票。</span>
        </div>
      </li>
      <li class="template-box price">
        <div class="template-left">
          优惠票<span class="orange">16</span>元
        </div>
        <div class="template-right">
          <span>团体30人以上、学生（成人教育、博士、硕士除外）凭学生证购票。</span>
        </div>
      </li>
      <li class="template-box price">
        <div class="template-left">
          半票<span class="orange">10</span>元
        </div>
        <div class="template-right">
          <span>60-65岁老人凭《广州市老人优待证》、残疾人士凭有效证件购票。</span>
        </div>
      </li>
      <li class="template-box price">
        <div class="template-left">
          <span class="orange">免票</span>
        </div>
        <div class="template-right">
          <span>1.1米以下儿童、65周岁以上老人凭《广州市老人优待证》、现役军人、荣誉军人凭有效证件。</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
.faresinfo-container{
  background: #F6F6F6;
  .template-box{
    display: flex;
    align-items: center;
    .template-left{
      width: p2r(203);
      text-align: center;
    }
    .template-right{
      border-left: 1px solid #EFEFEF;
      flex: 1;
    }
  }
  .time{
    background: #ffffff;
    .datetime{
      height: p2r(86);
      line-height: p2r(86);
      text-align: center;
      font-size: 13px;
      .gray{
        color: #9A9A9A;
      }
    }
    .border{
      border-bottom: 1px solid #EFEFEF;
    }
    .title{
      color: #5ABD41;
    }
  }
  .fares-title{
    margin-top: p2r(20);
    text-align: center;
    height: p2r(90);
    line-height: p2r(90);
    font-weight: 500;
    color: #5EBA48;
    background: #ffffff;
  }
  .fares-list{
    @include clearLi;
    background: #ffffff;
    border-top: 1px solid #EFEFEF;
    .price{
      border-bottom: 1px solid #EFEFEF;
      .template-right{
        padding: p2r(30) 6px;
        font-size: 14px;
        line-height: 18px;
        color: #717171;
      }
    }
    .orange{
      color: #F86F26;
    }
  }
}
</style>
