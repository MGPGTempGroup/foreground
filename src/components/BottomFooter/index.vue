<template>
  <footer class="container" >
    <section class="desc" >
      <div class="desc-inner" >

        <a class="desc-inner-img" href="//google.com">
          <img src="@/assets/images/footer/Borderlessx500.png" alt="">
        </a>

        <div class="desc-inner-about" >
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
          <h5>Resource</h5>
          <ul>
            <li>
              <router-link to="/industry-updates" >Blog</router-link>
            </li>
            <li>
              <router-link to="/contact-us" >Suburb Profiles</router-link>
            </li>
          </ul>
        </div>

        <div class="desc-inner-touch" >
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
        </div>

      </div>
    </section>
    <section class="info" >
      <div class="info-inner" >
        <address class="info-inner-section" >
          <p>12 Yarra Street <br>
          South Yarra, VIC 3141 <br>
          Telephone +61 3 9829 2900<br>
          Facsimile +61 3 9829 2966</p>
        </address>
        <address class="info-inner-section">
          <p>EQ Tower<br>
          131 A’Beckett Street<br>
          Melbourne VIC 3000</p>
        </address>
        <ul class="info-inner-section">
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
      </div>
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
  .container {
    > section {
      padding: 0px 30px !important;
    }
    .desc {
      height: 260px;
      background-color: white;
      &-inner {
        display: flex;
        display: -webkit-flex;
        margin: 0 auto;
        padding: 27px 20px 0px 30px;
        width: 1163px;
        ul {
          width: 150px;
          li {
            line-height: 1.1;
            a {
              font-size: 12px;
              text-decoration: none;
            }
          }
        }
        &-img {
          width: 100px;
          height: 171px;
          > img {
            width: 100%;
            height: 100%;
          }
        }
        &-about {
          margin-left: 270px;
          > h5:first-of-type {
            margin-top: 8px;
          }
          > h5:last-of-type {
            margin-top: 20px;
          }
        }
        &-touch {
          margin-left: 230px;
          > h5 {
            margin-top: 8px;
          }
        }
      }
    }
    .info {
      height: 200px;
      background-color: black;
      &-inner {
        display: flex;
        display: -webkit-flex;
        margin: 0 auto;
        padding: 40px 20px 0px 30px;
        width: 1163px;
        > address {
          display: block;
          width: 300px;
          height: 100%;
          font-size: 14px;
          font-style: normal;
          color: white;
          + address {
            margin-left: 71.5px;
          }
        }
        > ul {
          margin-left: 80px;
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
        
      }
    }
  }
</style>


