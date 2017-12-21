<template>
  <div class="hello">
    <router-link :to="{name:'游览图解答'}">游览图解答</router-link>
    <router-link :to="{ name: '游览图' }"> 游览图 </router-link>
    <router-link :to="{ name: '游览图解答' }"> 游览图解答 </router-link>
    <router-link :to="{ name: '最新动态' }"> 最新动态 </router-link>
    <router-link :to="{ name: '主题展馆' }"> 主题展馆 </router-link>
    <router-link :to="{ name: '动物之家' }"> 动物之家 </router-link>
    <router-link :to="{ name: '动物科学' }"> 动物科学 </router-link>
    <router-link :to="{ name: '语音解说' }"> 语音解说 </router-link>
    <router-link :to="{ name: '票价信息' }"> 票价信息 </router-link>
    <router-link :to="{ name: '在线购买' }"> 在线购买 </router-link>
    <router-link :to="{ name: '我的订单' }"> 我的订单 </router-link>
    <router-link :to="{ name: '二维码门票' }"> 二维码门票 </router-link>
    <div>
      <numberbox @func="getNum"></numberbox>
    </div>
  </div>
</template>

<script>
// test numberboxy
import Numberbox from './gpyd/components/numberbox/numberbox.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods:{
    getNum(c){
      console.log(c);
    }
  },
  components:{Numberbox}
}
</script>

