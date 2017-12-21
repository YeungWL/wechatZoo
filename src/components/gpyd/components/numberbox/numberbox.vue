<template>
  <div class="inputNumber">
    <mt-button class="numbtn" @click="subNum">-</mt-button>
    <input type="text" class="numtxt" v-model="num">
    <mt-button class="numbtn" @click="addNum">+</mt-button>
  </div>
</template>

<script>
export default {
  name: 'numberbox',
  data(){
    return {
      num: 0
    }
  },
  props: {

  },
  methods: {
    addNum(){
      this.num++;
      this.$emit('func',this.num);
    },
    subNum(){
      this.num--;
      if(this.num <= 0){
        this.num = 0;
      }
      this.$emit('func',this.num);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../styles/mixin.scss';
  .inputNumber{
    display: flex;
    .numtxt{
      width: p2r(60);
      border: none;
      text-indent: p2r(22);
    }
    .numbtn{
      margin: 0;
      padding: 0 p2r(8);
      border: 1px solid #EFEFEF;
      line-height: 1;
      background: #F6F6F6;
      font-weight: 900;
      width: p2r(50);
      height: p2r(50);
      color: #999999;
      outline: none;
      font-size: 16px;
    }
  }
</style>
