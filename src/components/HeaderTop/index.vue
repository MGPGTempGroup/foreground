<template>
  <el-header class="container" >
    <div class="inner-pc hidden-md-and-down" >
      <div class="inner-pc-top" >
        <div class="inner-pc-top-left" >
          <router-link to="/" >
            <img class="inner-pc-top-left-logo" src="@/assets/images/logo/logo_widthplus_transparent.png" alt="">
          </router-link>
        </div>
        <div :span="6" class="inner-pc-top-right" >
          <div class="inner-pc-top-right-temp">
            待填充区域
            <br>
            地区选择 / 登陆注册
          </div>
        </div>
      </div>
      <div class="inner-pc-nav" >
        <navigation :show="true" mode="horizontal" />
      </div>
    </div>

    <div class="inner-mobile hidden-lg-and-up" >
      <div class="inner-mobile-top" >
        <div class="inner-mobile-top-left" >
          <router-link class="inner-mobile-top-left-logo" to="/" >
            <img src="@/assets/images/logo/logo_widthplus_transparent.png" alt="">
          </router-link>
        </div>
        <div :span="2" class="inner-mobile-top-right" >
          <div @click="displayMobileNav = !displayMobileNav" class="inner-mobile-top-right-menu">
            <img src="@/assets/images/icon/menu.svg" alt="">
          </div>
        </div>
      </div>
      <navigation class="inner-mobile-nav" :show="displayMobileNav" mode="vertical" />
    </div>
  </el-header>
</template>

<script>
  import Navigation from '@/components/Nav'
  export default {
    name: 'header-top',
    components: {
      Navigation
    },
    data() {
      return {
        displayMobileNav: false
      }
    }
  }
</script>

<style scoped lang="scss" >
  @import '@/assets/sass/mixins/transition.scss';
  .container {
    padding: 0px 0px;
    height: auto !important;
    background-color: #272727;
    .inner-pc {
      &-top {
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        width: 1200px;
        margin: 0 auto;
        padding: 15px 0px;
        box-sizing: border-box;
        &-left {
          &-logo {
            width: 250px;
          }
        }
        &-right {
          margin-top: 30px;
          &-temp {
            width: 260px;
            height: 80px;
            text-align: center;
            line-height: 37px;
            color: #ccc;
            border: 1px solid #ccc;
          }
        }
      }
      &-nav {
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        width: 100%;
        background-color: #535B63;
        > * {
          width: 1200px;
        }
      }
    }
    .inner-mobile {
      padding: 10px 0px;
      &-top {
        position: relative;
        padding: 0px 0px;
        height: 52px;
        &-left, &-right {
          position: absolute;
        }
        &-left {
          left: 20px;
          &-logo {
            display: flex;
            display: -webkit-flex;
            align-items: center;
            text-decoration: none;
            > div {
              margin-left: 10px;
              color: rgb(251,221,0);
              span:first-of-type {
                letter-spacing: 2px;
                font-size: 22px;
              }
              span:last-of-type {
                letter-spacing: .5px;
                font-size: 12px;
              }
            }
            > img {
              height: 45px;
              font-size: 0px;
            }
          }
        }
        &-right {
          top: 8px;
          right: 20px;
          &-menu {
            display: flex;
            display: -webkit-flex;
            align-items: center;
            transform: scale(1,1);
            @include transitionAll;
            &:active {
              transform: scale(0.8, 0.8);
            }
            img {
              height: 35px;
            }
          }
        }
      }
      &-nav {
        margin-top: 8px;
        height: auto;
      }
    }
  }
</style>


