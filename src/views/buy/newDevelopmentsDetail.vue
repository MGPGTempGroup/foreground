<template>
  <main class="new-dev-detail" >
    <main-swiper></main-swiper>
    <el-row class="new-dev-detail__layout" >
      <el-col class="new-dev-detail__content" :lg="17" >
        <el-card class="new-dev-detail__detail" >
					<h1 class="internal-title">Little Oxford, Collingwood</h1>
          <p><span style="color: #808080;"><strong>Product Type – 29 Apartments<br>
          </strong><strong>Status – Under Construction/Sold Out</strong></span></p>
          <p><span style="color: #808080;">Little Oxford is a limited collection of only 29 contemporary residences in the heart of Collingwood. From the carefully considered architecture inspired by the surrounding streetscapes, to the meticulously detailed finishes of the interiors, each residence reflects the rich character of the neighbourhood. With Smith Street, Gertrude Street and the CBD all just moments away, Little Oxford is <a style="color: #808080;" href="https://www.google.com.au/maps/place/9-15+Little+Oxford+St,+Collingwood+VIC+3066/@-37.8058798,144.9839303,19z/data=!4m13!1m7!3m6!1s0x6ad642e751833c6b:0xa3a99ac1b50c9d52!2s9-15+Little+Oxford+St,+Collingwood+VIC+3066!3b1!8m2!3d-37.8059037!4d144.9837442!3m4!1s0x6ad642e751833c6b:0xa3a99ac1b50c9d52!8m2!3d-37.8059037!4d144.9837442" target="_blank">perfectly placed</a> to enjoy the very best of Melbourne living in one of the city’s most desirable inner-urban locations.</span><br>
          <span style="color: #808080;">Features include, Kennedy Nolan Architecture, Miele Appliances, rogerseller bathrooms, timber flooring, Air-conditioning and heating, security entrances, lift access. Bicycle and storage cage</span></p>
        </el-card>
      </el-col>
      <el-col class="new-dev-detail__side" :lg="7" >
        <el-card class="new-dev-detail__form-wrapper" >
          <h3 style="margin: 0px;" slot="header" >Register your interest:</h3>
          <common-form></common-form>
        </el-card>
      </el-col>
    </el-row>
  </main>
</template>

<script>
import MainSwiper from '@/components/MainSwiper'
import CommonForm from '@/components/CommonForm'
export default {
  name: 'new-Developments-detail',
  components: {
    MainSwiper,
    CommonForm
  }
}
</script>

<style scoped lang="scss" >
  @import '@/assets/sass/mixins/responsive.scss';
  .new-dev-detail {
    &__layout {
      margin-top: 35px;
      @include media-md{
				margin-top: 30px;
				padding:0 30px;
			}
			@include media-sm{
				margin-top: 20px;
				padding:0 20px;
			}
			@include media-xs{
				margin-top: 10px;
				padding:0 10px;
			}
      @include media-lg-up {
        padding: 0px 10px;
        padding-bottom: 15px;
      }
    }
    &__content {
      @include media-lg-up {
        padding-right: 20px;
      }
    }
    &__form-wrapper {
      @include media-md-down {
        margin-top: 25px;
      }
    }
  }
</style>


