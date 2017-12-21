<template>
    <div class='dwzj'>
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
                <h4>两爬类</h4>
            </li>
            <li>
                <img src="/src/assets/images/test.png" alt="">
                <h4>禽鸟类</h4>
            </li>
            <li>
                <img src="/src/assets/images/test.png" alt="">
                <h4>草食类</h4>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
    methods:{
        toDetail(){
            this.$router.push({path:'/bhjy/dwfl'})
        }
    }
}
</script>

<style lang="scss" scoped>
    /* @import '../../../styles/mixin.scss'; */
</style>