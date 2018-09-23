<template>
  <div class="prospective-tenants">
    <div class="carousel" >
      <el-carousel class="carousel" :interval="5000" height="500px">
        <el-carousel-item class="carousel-item" v-for="item in 4" :key="item">
          <img src="@/assets/images/banner/Home_Hero_1.1.gif" alt="">
          <h2>&nbsp;One step ahead.</h2>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row class="content" >
      <el-col class="content-desc">
        <h1>Tenant Services &amp; Information</h1>
        <p>Please refer to our <strong><a href="https://www.melbournerealestate.com.au/renting/">listings page</a></strong> for current rental opportunities:</p>
        <p><a href="https://www.melbournerealestate.com.au/renting/"><img class="alignnone wp-image-1035 size-full" title="listings page" src="https://www.melbournerealestate.com.au/wp-content/uploads/2014/05/Tenants_Image.jpg" alt="listings page" width="455" height="282"></a></p>
        <h2>Applying Online</h2>
        <p class="p1">Melbourne Real Estate utilise&nbsp;the online application program 1form, for a seamless, secure and efficient way to apply to rental properties.</p>
        <p class="p1">If you wish to apply for one of our listed properties, please fill out an&nbsp;<strong><a title="Apply Online" href="https://1form.com/au/tenant/application/start/tagid/612" target="_blank" rel="noopener">online application</a></strong>.</p>
        <h2></h2>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'prospective-tenants-page'
  }
</script>

<style scoped lang="scss" >
  @import '@/assets/sass/mixins/responsive.scss';
  .prospective-tenants {
    padding: 35px 0px 70px 0px;
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
      margin-top: 33px;
      @include media-xs {
        padding: 0px 25px !important;
      }
      @include media-sm {
        padding: 0px 30px !important;
      }
      @include media-md {
        padding: 0px 40px !important;
      }
      &-desc {
        padding-right: 20px;
        @include media-sm-down {
          img {
            width: 100%;
          }
        }
      }
      > * {
        @include media-custom(1200px, 1263px) {
          padding: 0px 30px !important;
        }
      }
    }
  }
</style>