<template>
  <div class="staff-container" >
    <el-row class="staff-card" >
      <el-col class="staff-card-photo" :xs="24" :sm="24" :lg="10" >
        <el-card body-style="padding: 5px;" >
          <img style="display: block;" src="https://www.melbournerealestate.com.au/wp-content/uploads/2014/04/Ann-3-640x624.png" alt="">
        </el-card>
      </el-col>
      <el-col class="staff-card-desc" :xs="24" :sm="24" :lg="14" >
        <div class="name" >
          <Strong>Ann Rogers</Strong>
          <Strong>Office Manager</Strong>
          <el-row class="info" >
            <el-col :lg="12" >
              <i class="el-icon-message" ></i> &nbsp;
              <a href="mailto: ann@melbournerealestate.com.au">ann@melbournerealestate.com.au</a>
            </el-col>
            <el-col :lg="12" >
              <i class="el-icon-mobile-phone"></i> &nbsp;
              +61 3 9829 2900
            </el-col>
          </el-row>
        </div>
        <div class="description" >
          The Dream Builder.
          Manager And Matriarch.
          Ann Rogers has a talent for management. As right hand woman to MRE founder and director, Peter Hooymans, she serves as a linchpin of the company. A founding member of the agency, she is incredibly proud to have helped realise the vision of creating an award winning boutique real estate agency.
          Her extensive experience and industry knowledge makes Ann truly indispensable and central to the smooth running of the business. Her natural inclination is to provide support and she is always ready to drop everything and assist where required.
          Ann’s pivotal role in the company is undeniable, as her professionalism, tireless work ethic and outstanding time management skills continue to provide a benchmark for incoming staff. Her positivity and energy encapsulate the MRE cultural mind-set, with its emphasis on excellence and team work.
          A commitment to fitness and wellbeing is obvious as Ann fairly radiates good health. She knows that a successful career can only be realised when priorities are in order and everything in life is balanced, a feat she has successfully achieved.
        </div>
        <div class="other" >
          <ul class="other-links" >
            <li>
              <a class="google-plus" target="_blank" href="">
                <i class="fa fa-google-plus fa-lg"></i>&nbsp;&nbsp;<span>Follow me on Google +</span>
              </a>
            </li>
            <li>
              <a class="linkin" target="_blank" href="">
                <i class="fa fa-linkedin fa-lg"></i>&nbsp;&nbsp;<span>Follow me on Linkin</span>
              </a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row class="testimonials" >
      <el-col :span="24" >
        <h2 class="testimonials-title" >
          Testimonials
        </h2>
        <div class="testimonials-text" >
          "Melbourne Real Estate was recommended to us for our first investment property and we must honestly say it was the best decision we could have made. Everything is taken care of for us, we almost don't realise we have an investment property. Very professional and they communicate at the right level with the appropriate amount of interaction as to not leave you wondering what is happening while not spamming you with information either. Look forward to a number of years of service with them!"
          Regards"
          <div class="testimonials-publisher" >———— Louis Carstens</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'staff-detail-page'
}
</script>

<style scoped lang="scss" >
  @import '@/assets/sass/mixins/responsive.scss';
  @import '@/assets/sass/mixins/transition.scss';
  .staff-container {
    color: white;
    background: url('/images/background/3e23810de9281cd01a058b3682aaef46.jpg') 100px 100px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgba(0,0,0,.35);
    padding: 50px 25px;
    @include media-lg-down {
      width: 88%;
      margin: 0 auto;
    }
    a {
      color: white;
      @include transitionAll;
    }
    .staff-card {
      &-photo {
        img {
          width: 100%;
        }
      }
      &-desc {
        .name {
          display: block;
          padding-bottom: 15px;
          border-bottom: 1px solid #ccc;
          > Strong {
            display: block;
            &:first-of-type {
              font-size: 30px;
            }
            &:nth-of-type(2) {
              font-size: 19px;
            }
          }
        }
        .info {
          a:hover {
            color: rgba(255,255,255,.55);
          }
          > div {
            margin-top: 20px;
          }
        }
        .description {
          margin-top: 15px;
          font-size: 14.5px;
          letter-spacing: .5px;
        }
        .other {
          margin-top: 30px;
          &-links {
            display: flex;
            display: -webkit-flex;
            justify-content: flex-end;
            > li {
              margin-left: 35px;
              > a {
                display: flex;
                display: -webkit-flex;
                align-items: center;
                font-size: 16px;
                text-decoration: none;
                > span {
                  color: #ccc;
                  @include transitionAll;
                }
                > i {
                  background-color: #393939;
                  @include transitionAll;
                }
                &:hover {
                  animation: shake .15s infinite;
                  > span {
                    color: white;
                  }
                }
              }
            }
            .google-plus {
              &:hover {
                > i {
                  background-color: #D94938;
                }
              }
              > i {
                padding: 10px 6px;
                font-size: 20px;
                
              }
            }
            .linkin {
              > i {
                padding: 10px 10px;
                font-size: 20px;
              }
              &:hover {
                > i {
                  background-color: #2080AE;
                }
              }
            }
          }
        }
        @include media-lg-down {
          margin-top: 30px;
        }
        @include media-md-up {
          padding: 5px 0px 0px 25px;
        }
      }
    }
    .testimonials {
      margin-top: 20px;
      &-title {
        text-align: center;
      }
      &-content {
        padding: 0px 30px;
        box-sizing: border-box;
      }
      &-publisher {
        text-align: right;
        padding-right: 50px;
      }
    }
  }
</style>

<style lang="scss" >
  @import '@/assets/sass/mixins/responsive.scss';
  .el-carousel__indicators {
    display: none;
  }
  .carousel {
    @include media-md {
      height: 200px;
    }
    @include media-xs {
      height: 250px;
    }
    @include media-custom(null, 500px) {
      height: 450px;
    }
  }
</style>



