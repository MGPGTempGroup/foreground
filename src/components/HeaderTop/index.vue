<template>
  <header class="container" >
    <div class="inner" >
      <div class="inner-left" >
        <router-link to="/" >
          <img class="container-logo" src="@/assets/images/logo/logo_widthplus_transparent.png" alt="">
        </router-link>
      </div>
      <div class="inner-right" >
        待填充区域
        <br>
        地区选择 / 登陆注册
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-top'
}
</script>

<style scoped lang="scss" >
  .container {
    background-color: #242C2E;
    .inner {
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 15px 12px;
      box-sizing: border-box;
      width: 1163px;
      &-right {
        margin-top: 30px;
        width: 300px;
        height: 80px;
        text-align: center;
        line-height: 37px;
        color: #ccc;
        border: 1px solid #ccc;
      }
    }
    &-logo {
      width: 250px;
    }
  }
</style>


