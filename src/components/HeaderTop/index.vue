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
          <div class="inner-pc-top-right-login">
            <a @click="$emit('update:dialogLoginVisible', true)" href="javascript:;" class="inner-pc-top-right-login-btn" type="warning" >
              <i style="font-size: 28px;" class="fa fa-user-circle-o" ></i>
              <div>Members Login</div>
              <figure>
                <figcaption>
                  <span>Members Login</span>
                  <br>
                  <span>MGPG Online 24 / 7</span>
                </figcaption>
                <div></div>
              </figure>
            </a>
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
            <figure :class="{ 'inner-mobile-top-right-menu-figure-active': displayMobileNav }" >
              <div></div>
              <div></div>
              <div></div>
            </figure>
          </div>
        </div>
      </div>
      <navigation class="inner-mobile-nav" :show.sync="displayMobileNav" mode="vertical" />
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
        displayMobileNav: false,
        dialogLoginVisible: false
      }
    }
  }
</script>

<style scoped lang="scss" >
  @import '@/assets/sass/mixins/transition.scss';
  .container {
    padding: 0px 0px;
    height: auto !important;
    .inner-pc {
      background-color: #2C2C2C;
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
            width: 210px;
          }
        }
        &-right {
          margin-top: 32px;
          margin-right: 30px;
          &-login {
            box-shadow: 0px 7px 15px #1C1C1C;
            border-radius: 10px;
            &-btn {
              position: relative;
              display: flex;
              align-items: center;
              padding: 15px 15px;
              line-height: 18px;
              text-shadow: 0px 0px 6px rgba(0,0,0,.15);
              background: #121212;
              border-radius: 10px;
              color: white;
              cursor: pointer;
              overflow: hidden;
              transition: all .4s;
              &:hover {
                > figure {
                  opacity: 1;
                }
              }
              > div {
                margin-left: 10px;
                font-size: 14px;
                
                &:before {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  left: 0%;
                  top: 0%;
                  background-color: red;
                }
              }
              > figure {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0px;
                width: 100%;
                height: 100%;
                left: 0px;
                top: 0px;
                perspective: 200;
                &:active {
                  > div {
                    box-shadow: -5px 5px 5px #D18E05 inset;
                  }
                }
                &:hover {
                  > div {
                    width: 100%;
                  }
                  > figcaption {
                    opacity: 1;
                    transition: all .4s;
                    transition-delay: .1s;
                    transform: rotateY(0deg);
                  }
                }
                > figcaption {
                  position: absolute;
                  z-index: 1;
                  font-size: 13px;
                  text-align: center;
                  letter-spacing: 1px;
                  text-shadow: 0px 0px 5px #7C7C7C;
                  transform: rotateY(240deg);
                  opacity: 0;
                  
                  > span:first-of-type {
                    font-size: 15px;
                    font-weight: bold;
                  }
                }
                > div {
                  position: absolute;
                  z-index: 0;
                  left: 0px;
                  top: 0px;
                  width: 0%;
                  height: 100%;
                  background-color: #F6B930;
                  transition: all .2s;
                }
              }
            }
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
      padding: 10px 0px 4px 0px;
      background-color: #2C2C2C;
      box-shadow: 0px 15px 5px #000;
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
            width: 27px;
            height: 27px;
            > figure {
              width: 100%;
              height: 100%;
              > div {
                margin-top: 5px;
                width: 100%;
                height: 4px;
                border-radius: 10px;
                background-color: #E5E5E5;
                transition: all .3s;
              }
            }
            > figure[class*="figure-active"] {
              > div:first-of-type, > div:last-of-type {

              }
              > div:first-of-type {
                transform: translateY(9px) rotate(45deg);
              }
              > div:last-of-type {
                transform: translateY(-9px) rotate(-45deg);
              }
              > div:nth-of-type(2) {
                opacity: 0;
              }
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


