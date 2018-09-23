<template>
  <footer class="container" >
    <section class="desc" >
      <el-row class="desc-inner" >
        <el-col :xs="14" :sm="8" :md="8" :lg="8" >
          <a class="desc-inner-img" href="//google.com">
            <img src="@/assets/images/footer/Borderlessx500.png" alt="">
          </a>
        </el-col>
        <el-col :xs="10" :sm="16" :md="16" :lg="12" >
          <el-row>
            <el-col class="desc-inner-item" :xs="24" :sm="12" :lg="12">
              <h5>Site</h5>
              <ul>
                <li>
                  <router-link to="/" >Home</router-link>
                </li>
                <li>
                  <router-link to="/contact-us" >Contact Us</router-link>
                </li>
                <li>
                  <router-link to="/buy-residential" >Buy</router-link>
                </li>
                <li>
                  <router-link to="/renting" >Rent</router-link>
                </li>
                <li>
                  <router-link to="/selling" >Sell</router-link>
                </li>
              </ul>
            </el-col>
            <el-col class="desc-inner-item" :xs="24" :sm="12" :lg="12">
              <h5>Get in touch</h5>
              <ul>
                <li>
                  <router-link to="/about-us" >About Us</router-link>
                </li>
                <li>
                  <router-link to="/team" >Team</router-link>
                </li>
                <li>
                  <router-link to="/contact-us" >Contact Us</router-link>
                </li>
                <li>
                  <router-link to="/careers" >Careers</router-link>
                </li>
                <li>
                  <router-link to="/past-success" >Track Record</router-link>
                </li>
              </ul>
            </el-col>
            <el-col class="desc-inner-item" :xs="24" :sm="12" :lg="12" >
              <h5>Resource</h5>
                <ul>
                  <li>
                    <router-link to="/industry-updates" >Blog</router-link>
                  </li>
                  <li>
                    <router-link to="/contact-us" >Suburb Profiles</router-link>
                  </li>
                </ul>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </section>
    <section class="info" >
      <el-row class="info-inner" >
        <el-col :xs="12" :sm="12" :lg="7" class="info-inner-section">
          <address >
            <p>12 Yarra Street <br>
            South Yarra, VIC 3141 <br>
            Telephone +61 3 9829 2900<br>
            Facsimile +61 3 9829 2966</p>
          </address>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="info-inner-section">
          <address >
            <p>EQ Tower<br>
            131 A’Beckett Street<br>
            Melbourne VIC 3000</p>
          </address>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="info-inner-section">
          <ul>
            <li>
              <a href="mailto:sales@melbournerealestate.com.au">Email Melbourne Sales</a>
            </li>
            <li>
              <a href="mailto:rentals@melbournerealestate.com.au">Email Melbourne Rentals</a>
            </li>
            <li>
              <a href="mailto:projects@melbournerealestate.com.au">Email Melbourne Projects</a>
            </li>
            <li>
              <a href="/wp-content/uploads/2014/08/disclaimer.pdf" id="termpopup" class="privacylinks" target="_blank">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="/wp-content/uploads/2018/08/INTERNET-PRIVACY-STATEMENT-2018.pdf" id="privacylink" class="privacylinks" target="_blank">Privacy Policy</a>
            </li>
          </ul>
        </el-col>
      </el-row>
    </section>
  </footer>
</template>

<script>
  export default {
    name: 'bottom-footer'
  }
</script>

<style scoped lang="scss" >
  @import '@/assets/sass/mixins/transition.scss';
  @import '@/assets/sass/mixins/responsive.scss';
  .container {
    > section {
      padding: 0px 30px !important;
    }
    .desc {
      background-color: white;
      &-inner {
        display: flex;
        display: -webkit-flex;
        margin: 0 auto;
        padding: 20px 20px 50px 30px;
        max-width: 1163px;
        &-item {
          > h5 {
            margin-top: 18px;
          }
          > ul {
            > li {
              line-height: 1.1;
              a {
                font-size: 12px;
                text-decoration: none;
              }
            }
          }
        }
        &-img {
          display: block;
          margin-top: 12px;
          img {
            width: 100px;
          }
        }
      }
    }
    .info {
      background-color: black;
      &-inner {
        margin: 0 auto;
        padding: 40px 0px 40px 0px;
        max-width: 1200px;
        width: 100%;
        &-section {
          min-height: 180px;
          > address {
            display: block;
            font-size: 14px;
            font-style: normal;
            color: white;
          }
          > ul {
            a {
              font-size: 15px;
              text-decoration: none;
              color: white;
              @include transitionAll(.3s);
              &:hover {
                color: rgba(255,255,255,.6);
              }
            }
          }
          @include media-lg-up {
            padding-left: 20px;
            &:nth-of-type(2) {
              padding-left: 67px;
            }
            &:nth-of-type(3) {
              padding-left: 44px;
            }
          }
          @include media-md-down {
            padding-left: 30px;
            &:nth-of-type(2) {
              padding-left: 30px;
            }
          }
        }
      }
    }
  }
</style>


