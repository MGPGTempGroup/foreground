<template>
  <div class="areas-we-serve">
    <div class="carousel" >
      <el-carousel class="carousel" :interval="5000" height="500px">
        <el-carousel-item class="carousel-item" v-for="item in 4" :key="item">
          <img src="@/assets/images/banner/Home_Hero_1.1.gif" alt="">
          <h2>&nbsp;One step ahead.</h2>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      <el-card class="content-inner">
        <el-row class="content-desc" >
          <el-col class="content-inner-desc">
            <p>
              At Melbourne Real Estate we understand that when you are looking to buy, rent or invest in real estate it’s a big decision. It is important to know and understand not only the market place but also who lives in the area, what schools, public transport and activities the areas has to offer.
            </p>
            <p>
              Below you will find a selection of some of Melbourne’s best suburbs, to see a full list of areas we serve Click Here. If you have any questions, feel free to contact one of our agents!
            </p>
          </el-col>
        </el-row>
        <!-- 服务地区列表 -->
        <el-row tag="ul" class="areas-list" >
          <el-col
            class="areas-list-item"
            v-for="(item, index) in 6"
            :key="index"
            tag="li"
            :xs="24" :sm="12" :md="8" :lg="8" >
            <main-box />
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
  import MainBox from '@/components/MainBox'
  export default {
    name: 'areas-we-serve-page',
    components: {
      MainBox
    }
  }
</script>

<style scoped lang="scss" >
  @import '@/assets/sass/mixins/responsive.scss';
  .areas-we-serve {
    padding-bottom: 70px;
    .carousel {
      margin: 0 auto;
      &-item {
        img {
          width: 100%;
          height: 100%;
        }
        h2 {
          position: absolute;
          top: 140px;
          z-index: 100;
          width: 100%;
          text-align: center;
          font-size: 50px;
          letter-spacing: 2px;
          text-shadow: 2px 2px 10px black;
          color: white;
        }
      }
    }
    .content {
      @include media-md-down {
        padding: 0px 10px;
      }
      &-inner {
        margin-top: 20px;
        &-desc {
          > p {
            font-size: 18px;
            color: #343434;
          }
          @include media-xs {
            padding: 0px 10px !important;
          }
          @include media-sm {
            padding: 0px 20px !important;
          }
          @include media-md {
            padding: 0px 20px !important;
          }
          @include media-custom(1200px, 1330px) {
            padding: 0px 30px !important;
          }
          @include media-sm-down {
            img {
              width: 100%;
            }
          }
        }
      }
    }
    .areas-list {
      margin-top: 20px;
      padding-bottom: 20px;
      &-item {
        > * {
          box-shadow: 0px 0px 10px #ccc;
        }
        @include media-xs {
          padding: 0px 20px;
        }
        @include media-sm {
          padding: 0px 20px;
          &:nth-of-type(2n) {
            padding-left: 10px;  
          }
          &:nth-of-type(2n + 1) {
            padding-right: 10px;
          }
        }
        @include media-md {
          padding: 0px 20px;
        }
        @include media-lg {
          padding: 0px 10px;
          
        }
        @include media-custom(1200px, 1300px) {
          padding: 0px 20px !important;
        }
      }
    }
  }
</style>