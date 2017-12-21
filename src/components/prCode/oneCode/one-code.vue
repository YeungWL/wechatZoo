<template>
  <div class="onecode-container">
    <div class="codebox">
      <img src="../../../assets/images/test_code.png" alt="二维码" class="code">
    </div>
    <div class="code-name">广州动物园门票01</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../../../styles/mixin.scss';
.onecode-container{
  text-align: center;
  .codebox{
    margin: p2r(150) auto p2r(15);
    width: p2r(650);
    height: p2r(650);
    .code{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .code-name{
    color: #9A9A9A;
  }
}
</style>
