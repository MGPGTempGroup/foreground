<template>
  <div class="hd-container">
    <main-swiper></main-swiper>
    <el-row class="hd-card-row" >
      <el-card class="hd-card" >
        <el-col class="hd-col hd-col-left" :lg="17" >
          <el-row class="hd-info">
            <el-col :xs="24" :sm="17" :md="17" :lg="17" >
              <h2>2701/35 Malcolm Street</h2>
              <h2>SOUTH YARRA, Victoria, 3141</h2>
              <div class="hd-info-count" >
                <i style="margin-left: 3.5px;" class="fa fa-bed" ></i> 1 &nbsp;
                <i class="fa fa-shower"></i> 1 &nbsp;
                <i class="fa fa-car" ></i> 1 &nbsp;
              </div>
            </el-col>
            <el-col :xs="24" :sm="7" :md="7" :lg="7" class="hd-info-btn" >
              <el-button type="info">
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;
                Book an Inspection
              </el-button>
              <el-button type="info">
                <i class="fa fa-book" aria-hidden="true"></i>&nbsp;
                Statement Of Information
              </el-button>
            </el-col>
          </el-row>
          <h2>Stylish Living at Vogue Apartments</h2>
          <p class="listing">Vogue,  enviably situated in a South Yarra side street off buzzing Chapel Street, the coveted Vogue Apartment complex is moments from South Yarra train station, tram stops and the Jam Factory shopping/dining and entertainment precinct, with direct access to its own ground level retail stores and supermarket.<br><br>This practically oriented apartment,  delivering space, light and stunning views, comprises an immaculate fully tiled bathroom, euro laundry, streamlined white galley kitchen with stone benches, stainless steel appliances, integrated dishwasher and considered storage cabinetry, open-plan and air-conditioned dining/living area and balcony. Two carpeted and good sized bedrooms each include BIR’s, with the master room sharing balcony access. Along with a secure basement car space, exclusive amenities include a resident building manager and state of the art security, tennis court, BBQ area and indoor heated 25m pool with sun deck, plus a well equipped gymnasium, spa and sauna. A direct lift to the Vogue Plaza also ensures you’ll never run out of milk again! Brilliant to live in or a great investment, Vogue Apartments are a sure thing.</p>
          <p class="listing">Vogue,  enviably situated in a South Yarra side street off buzzing Chapel Street, the coveted Vogue Apartment complex is moments from South Yarra train station, tram stops and the Jam Factory shopping/dining and entertainment precinct, with direct access to its own ground level retail stores and supermarket.<br><br>This practically oriented apartment,  delivering space, light and stunning views, comprises an immaculate fully tiled bathroom, euro laundry, streamlined white galley kitchen with stone benches, stainless steel appliances, integrated dishwasher and considered storage cabinetry, open-plan and air-conditioned dining/living area and balcony. Two carpeted and good sized bedrooms each include BIR’s, with the master room sharing balcony access. Along with a secure basement car space, exclusive amenities include a resident building manager and state of the art security, tennis court, BBQ area and indoor heated 25m pool with sun deck, plus a well equipped gymnasium, spa and sauna. A direct lift to the Vogue Plaza also ensures you’ll never run out of milk again! Brilliant to live in or a great investment, Vogue Apartments are a sure thing.</p>
          <div class="show-desktop show-mobile" id="listing_details">
            <div class="details_section">
              <h3>Apartment for Sale</h3>
                  <p>$588,000</p>
              </div>
              <div class="details_section">
                <h3>General Features</h3>
                <ul>
                  <li>Property Type: Apartment</li>						<li>Bedrooms: 2</li>						<li>Bathrooms: 1</li>						<li>Car ports: 1</li>						<li>Lock-up garages: 0</li>																	</ul>
              </div>
              <div class="details_section">
                <h3>Available Date</h3>
                <ul>
                  <li></li>
                </ul>
              </div>
          </div>
          <div style="margin-top: 27px;" >
						<strong style="font-size: 21px;" >Share</strong>
						<share-card style="margin-top: 5px;" />
					</div>
        </el-col>
        <el-col class="hd-col hd-col-right" :lg="7" >
          <div class="google-map" style="width: 100%; height: 300px;" ></div>
          <h2 style="margin: 0px; margin-top: 30px;" >Contact Agents</h2>
          <el-row :gutter="36" class="hd-agent-list" >
            <el-col v-for="(item, index) in 2" :key="index" class="hd-agent-list-item" :sm="12" :lg="24" >
              <contacts-agent />
            </el-col>
          </el-row>
        </el-col>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import mainSwiper from '@/components/MainSwiper'
import ContactsAgent from '@/components/Contacts/Agent'
import ShareCard from '@/components/ShareCard'
export default {
  name: 'residential-detail',
  components: {
    mainSwiper,
    ContactsAgent,
    ShareCard
  },
  mounted() {
    var mapType = google.maps.MapTypeId.ROADMAP;
    var lat = 145, lng = 39, zoom = 10;
    var mapOptions = {
        center: new google.maps.LatLng(lat, lng),  //地图的中心点
        zoom: zoom,               　　　　　　　　　　//地图缩放比例
        mapTypeId: mapType,       　　　　　　　　　　//指定地图展示类型：卫星图像、普通道路
        scrollwheel: true          　　　　　　　　　 //是否允许滚轮滑动进行缩放
    };
    var map = new google.maps.Map(document.getElementsByClassName("google-map")[0], mapOptions); //创建谷歌地图
    }
}
</script>

<style scoped lang="scss" >
  @import '@/assets/sass/mixins/responsive.scss';
  .hd-container {
    
  }
  .hd-card-row {
    margin-top: 20px;
    @include media-md-down {
      padding: 0px 10px;
    };
  }
  .hd-card {
    padding-bottom: 50px;
    @include media-lg-up {
      padding: 10px 10px 35px 10px;
    }
  }
  .hd-col-left {
    @include media-md-up {
      padding-right: 50px;
    }
    .hd-info {
      padding-bottom: 25px;
      border-bottom: 1px solid #ccc;
      &-count {
        font-size: 20px;
      }
      &-btn {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        @include media-md-up {
          justify-content: flex-end;
        }
        @include media-md-down {
          justify-content: flex-start;
        }
        @include media-custom(768px, 800px) {
          justify-content: center;
        }
        @include media-xs {
          margin-top: 0px;
        }
        > button {
          margin: 22px 20px 0px 0px;
        }
      }
    }
  }
  .hd-col-right {
    .google-map {
      @include media-md-down {
        margin-top: 30px;
      }
    }
    .hd-agent-list {
      &-item {
        margin-top: 20px;
      }
    }
  }
</style>


