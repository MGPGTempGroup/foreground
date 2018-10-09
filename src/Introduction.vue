<template>
  <div class="intro" >
    <swiper :options="swiperOpts" :style="{ height: availHeight }" class="intro-swiper" >
      <swiper-slide
        class="intro-swiper-section intro-swiper-section-1 intro-swiper-section-1-animation">
        <div class="intro-swiper-section-1-inner" >
          <div class="intro-swiper-section-1-inner-caption" >
            <h1>Melbourne Grand</h1>
            <h2>
              Online Estate Management Platform.
            </h2>
            <h3>To provide you with the best online hotel rental service.</h3>
          </div>
          <div class="logo" >
            <img src="/images/logo/logo_widthplus_transparent.png" alt="">
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        class="intro-swiper-section intro-swiper-section-2">
        <div class="intro-swiper-section-2-inner" >
          <div class="intro-swiper-section-2-inner-caption" >
            <h1>The Services We Provide</h1>
          </div>
          <ul class="intro-swiper-section-2-inner-services" >
            <li class="services-item" >
              <div class="services-item-desc">
                <img class="services-item-desc-img" src="/images/icon/introduction/房屋买卖.svg" alt="">
                <p class="services-item-desc-title">House Sale</p>
                <p class="services-item-desc-detail">
                  At Melbourne Real Estate we know that the experience of selling property goes beyond contracts, deposits and commissions – it’s momentous, it’s emotional and it’s a process we’re passionate about.
                </p>
              </div>
            </li>
            <li class="services-item">
              <div class="services-item-desc">
                <img style="width: 80px;" class="services-item-desc-img" src="/images/icon/introduction/wygl.svg" alt="">
                <p class="services-item-desc-title">Estate Management</p>
                <p class="services-item-desc-detail">
                  Melbourne Real Estate has turned the industry standard of property management on its head.
                  Since 2006, we’ve won six state-wide awards from the Real Estate Institute of Victoria recognising...
                </p>
              </div>
            </li>
            <li class="services-item">
              <div class="services-item-desc">
                <img class="services-item-desc-img" src="/images/icon/introduction/yx.svg" alt="">
                <p class="services-item-desc-title">Project Marketing</p>
                <p class="services-item-desc-detail">
                  Established in 2000, MRE has broken boundaries, subverted the old order and set the benchmark for project marketing in Melbourne. Established as a dedicated project marketing agency in 2005
                </p>
              </div>
            </li>
            <li class="services-item">
              <div class="services-item-desc" >
                <img class="services-item-desc-img" src="/images/icon/introduction/zl.svg" alt="">
                <p class="services-item-desc-title">Rental Housing</p>
                <p class="services-item-desc-detail">
                  xxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxxx
                </p>
              </div>
            </li>
            <li class="services-item">
              <div class="services-item-desc" >
                <img class="services-item-desc-img" src="/images/icon/introduction/信息服务.svg" alt="">
                <p class="services-item-desc-title">Information Services</p>
                <p class="services-item-desc-detail">
                  Through MGPG, get relevant information about property nearby quickly.
                </p>
              </div>
            </li>
            <li class="services-item">
              <div class="services-item-desc" >
                <img class="services-item-desc-img" src="/images/icon/introduction/szh.svg" alt="">
                <p class="services-item-desc-title">Digitalization Of Property</p>
                <p class="services-item-desc-detail">
                  xxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxxx
                </p>
              </div>
            </li>
          </ul>
        </div>
      </swiper-slide>
      <swiper-slide class="intro-swiper-section intro-swiper-section-3">
        <div class="intro-swiper-section-3-inner" >
          <div class="intro-swiper-section-3-inner-caption" >
            <h1>
              Our team
            </h1>
          </div>
          <swiper :options="teamSwiperOpts" class="intro-swiper-section-3-inner-swiper" >
            <swiper :options="teamSwiperOpts" class="intro-swiper-section-3-inner-swiper" >
              <swiper-slide class="intro-swiper-section-3-inner-swiper-slide" >
                <div class="staff-photo" >
                  <img src="/images/staff/Ann-3_b.png" alt="">
                </div>
                <div class="staff-info" >
                  <div class="staff-info-name" >
                    <h2 style="margin: 0" >Ann Rogers</h2>
                    <h3 style="margin-top: 5px;" >Office Manager</h3>
                  </div>
                  <div class="staff-info-desc" >
                    Ann Rogers has a talent for management. As right hand woman to MRE founder and director, Peter Hooymans, she serves as a linchpin of the company. A founding member of the agency, she is incredibly proud to have helped realise the vision of creating an award winning boutique real estate agency.
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="intro-swiper-section-3-inner-swiper-slide" >
                <div class="staff-photo" >
                  <img src="/images/staff/Georgina_b.png" alt="">
                </div>
                <div class="staff-info" >
                  <div class="staff-info-name" >
                    <h2 style="margin: 0" >Georgina Mellick</h2>
                    <h3 style="margin-top: 5px;" >Project Sales Director</h3>
                  </div>
                  <div class="staff-info-desc" >
                    A longstanding passion for real estate, a dedication to customer service and a personal understanding of property investment underpin Georgina Mellick ’s success as the Director of Project Sales for Melbourne Real Estate.
                    Georgina’s career in real estate was established abroad and consolidated in Australia, and she brings to her work a wealth of industry experience.
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="intro-swiper-section-3-inner-swiper-slide" >
                <div class="staff-photo" >
                  <img src="/images/staff/Pete_b.png" alt="">
                </div>
                <div class="staff-info" >
                  <div class="staff-info-name" >
                    <h2 style="margin: 0" >Peter Hooymans</h2>
                    <h3 style="margin-top: 5px;" >Founder</h3>
                  </div>
                  <div class="staff-info-desc" >
                    Peter Hooymans heads the MRE family – a visionary with clear ideas about client service, Peter is committed to quality. Every team member is cherry picked to exacting standards. Understanding the strengths required for every position, Peter leaves nothing to chance, only hiring the cream of the crop.
                    It’s not a stretch to suggest that Peter Hooymans lives and breathes property having started his career at 18.
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="intro-swiper-section-3-inner-swiper-slide" >
                <div class="staff-photo" >
                  <img src="/images/staff/Tim-1_b.png" alt="">
                </div>
                <div class="staff-info" >
                  <div class="staff-info-name" >
                    <h2 style="margin: 0" >Tim Ear</h2>
                    <h3 style="margin-top: 5px;" >General Manager</h3>
                  </div>
                  <div class="staff-info-desc" >
                    Tim Ear has lived many professional lives. A qualified CPA accountant with experience in the banking sector, he has managed and supported the financial performance and business development of multiple real estate franchise offices across Victoria and Tasmania. He has tutored in Accounting at Deakin University and lectured in Strategic Management Accounting for CPA Australia.
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="intro-swiper-section-3-inner-swiper-slide" >
                <div class="staff-photo" >
                  <img src="/images/staff/Adriarna-1_b.png" alt="">
                </div>
                <div class="staff-info" >
                  <div class="staff-info-name" >
                    <h2 style="margin: 0" >Adriarna Nunn</h2>
                    <h3 style="margin-top: 5px;" >Head of People & Culture</h3>
                  </div>
                  <div class="staff-info-desc" >
                    As MRE’s Head of People and Culture, Adriarna Nunn encapsulates all of the things that make this award winning business rise head and shoulders above the pack. Consciously subverting the traditionally accepted values of Human Resources and embodying the core values that underscore MRE’s success, her focus is on maximising the engagement, effectiveness and retention of each and every employee.
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </swiper>
        </div>
      </swiper-slide>
      <swiper-slide class="intro-swiper-section intro-swiper-section-4">
        <div class="intro-swiper-section-4-inner" >
          <div class="intro-swiper-section-4-inner-caption" >
            <h1>
              Innovate, never imitate.
            </h1>
            <h2>
              One step ahead.
            </h2>
            <h3>
              "As far as we’re concerned
              it’s about return, quality
              tenants and communication"
            </h3>
          </div>
          <div class="intro-swiper-section-4-inner-btn" >
            Learn More
            <figure></figure>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="down-arrow" >
      <img src="/images/icon/down-arrow.svg" alt="">
      <div>
        Scroll to read more
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'introduction-page',
    data() {
      return {
        swiperOpts: {
          direction: 'vertical',
          mousewheel: true,
          speed: 500,
          on: {
            slideChange: function(){

              // 当前slide索引
              let currIndex = this.activeIndex + 1

              // 上一slide索引
              let pervIndex = this.previousIndex + 1
            
              let currSlide = document.querySelector(`.intro-swiper-section-${currIndex}`)
              let prevSlide = document.querySelector(`.intro-swiper-section-${pervIndex}`)

              currSlide.classList.add(`intro-swiper-section-${currIndex}-animation`)
              currSlide.classList.remove(`intro-swiper-section-${currIndex}-animation-left`)

              prevSlide.classList.remove(`intro-swiper-section-${pervIndex}-animation`)
              prevSlide.classList.add(`intro-swiper-section-${pervIndex}-animation-left`);
            }, 
          },
        },
        teamSwiperOpts: {
          effect : 'coverflow',
          slidesPerView: 3,
          centeredSlides: true,
          initialSlide: 2,
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows : true
          }
        },
        windowOnLoad: false,
        availHeight: window.screen.availHeight + 'px'
      }
    },
    created() {
      window.onresize = () => this.availHeight = window.screen.availHeight + 'px'
      window.onload = () => this.windowOnLoad = true
    }
  }
</script>

<style scoped lang="scss" >
  @import '@/assets/sass/mixins/responsive.scss';
  .intro {
    position: relative;
  }
  .intro-header {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    width: 100%;
    height: 150px;
    background-color: rgba(0,0,0,.45);
    &-nav {
      margin: 0 auto;
      padding-top: 17px;
      width: 85%;
    }
  }
  .intro-swiper {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    overflow: hidden;
    color: white;
    text-shadow: 0px 0px 10px #292929;
    // background-image: url('/images/background/introduction/16pic_7044135_796f9d8e.jpg');
    background-image: url('/images/background/desk-light-wood-meeting-ceiling-decoration-790647-pxhere.com.jpg');
    background-size: cover;
    &-section {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden; // 解决margin-top重叠问题
      background-size: cover;
      &-1 {
        // background-image: url('/images/background/introduction/f.jpg');
        &-inner {
          position: absolute;
          top: 0%;
          left: 0%;
          width: 100%;
          height: 100%;
          perspective: 300;
          background-color: rgba(0,0,0,.55);
          > .logo {
            position: absolute;
            left: calc((100% - 280px) / 2);
            top: 15%;
            > img {
              width: 280px;
            }
            @include media-xs {
              top: 28%;
              left: calc((100% - 200px) / 2);
              transform: scale(1.3, 1.3);
              > img {
                width: 200px;
              }
            }
          }
          &-caption {
            position: absolute;
            left: 50%;
            top: 32%;
            width: 90%;
            text-align: center;
            transform: translateX(-50%);
            perspective: 300;
            @include media-xs {
              top: 20%;
            }
            > h1, > h2 {
              margin: 0;
            }
            > h1, > h2, > h3 {
              color: #FED618;
              text-align: center;
              text-shadow: 3px 3px 5px #313131;
              @include media-xs {
                opacity: 0;
              }
            }
            > h1 {
              font-family: KoruriExtrabold;
              font-size: 52px;
              @include media-xs {
                margin-top: 50px;
                font-size: 30px;
                letter-spacing: 3px;
              }
            }
            > h2 {
              margin-top: 10px;
              font-size: 45px;
              font-family: KoruriExtrabold;
              letter-spacing: 4px;
              @include media-xs {
                margin-top: 10px;
                font-size: 20px;
                line-height: 29px;
                letter-spacing: 2px;
              }
            }
            > h3 {
              margin-top: 80px;
              font-size: 22px;
              font-family: KoruriExtrabold;
              letter-spacing: 2px;
              line-height: 25px;
              @include media-xs {
                font-size: 15px;
              }
            }
          }
        }
        &-animation {
          @include media-lg {
            .logo {
              animation: zoomShow 1.5s;
            }
            h1 {
              animation: perspectiveShow 1s 1.5s both;
            }
            h2, h3 {
              animation: moveShow 1.2s 3s both;
            }
          }
          @include media-sm {
            .logo {
              animation: fadeShow 2.5s both;
            }
            h1 {
              animation: perspectiveShow 2s 1s both;
            }
            h2, h3 {
              animation: zoomShow .4s 2.5s both;
            }
          }
          @include media-xs {
            .logo {
              animation: moveLogo 1.2s 3.5s both;
            }
            h1, h2 {
              animation: fadeShow 2s 4.7s both;
            }
            h3 {
              animation: moveShow 2s 6.5s both;
            }
            animation: moveBg 30s linear infinite;
          }
          &-left {
            > div > * {
              animation: fadeHide .5s;
            }
            .logo {
              animation: zoomHide .5s;
            }
          }
        }
      }
      &-2 {
        // background-image: url('/images/background/introduction/16pic_6848833_848b2e20.jpg');
        &-bg {
          position: absolute;
          left: 0px;
          top: 0px;
        }
        &-inner {
          position: absolute;
          top: 0%;
          left: 0%;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,.55);
          &-caption {
            position: absolute;
            top: 5%;
            width: 100%;
            text-align: center;
            color: #FED618;
            perspective: 650;
            perspective-origin: 50% 10%;
            h1 {
              font-size: 50px;
              text-align: center;
              letter-spacing: 5px;
              text-shadow: 3px 3px 3px #343434;
              font-family: KoruriExtrabold;
            }
          }
          &-services {
            position: absolute;
            top: 20%;
            left: 50%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 80%;
            transform: translate(-50%);
            .services-item {
              position: relative;
              width: 420px;
              height: 280px;
              overflow: hidden;
              margin: 0px 30px 20px 30px;
              cursor: pointer;
              transform: translateX(0px);
              &:nth-of-type(1) {
                img {
                  top: 78.5px;
                }
                background: {
                  image: url('/images/background/introduction/services/8b9c9b69badba3deeb0d8b737500fc9e.jpg');
                  size: cover;
                }
              }
              &:nth-of-type(2) {
                img {
                  top: 72px;
                  width: 100px;
                }
                background: {
                  image: url('/images/background/introduction/services/qnb_08.png');
                  size: cover;                  
                }
              }
              &:nth-of-type(3) {
                img {
                  top: 78.5px;
                }
                background: {
                  image: url('/images/background/introduction/services/qnb_09.png');
                  size: cover;                  
                }
              }
              &:nth-of-type(4) {
                img {
                  top: 78.5px;
                }
                background: {
                  image: url('/images/background/introduction/services/qnb_13.png');
                  size: cover;
                }
              }
              &:nth-of-type(5) {
                img {
                  top: 78.5px;
                }
                background: {
                  image: url('/images/background/introduction/services/qnb_13.png');
                  size: cover;
                }
              }
              &:nth-of-type(6) {
                img {
                  top: 78.5px;
                }
                background: {
                  image: url('/images/background/introduction/services/qnb_13.png');
                  size: cover;
                }
              }
              &-desc {
                position: absolute;
                left: 0px;
                top: 0px;
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 10px 30px 10px 30px;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                font-size: 18px;
                letter-spacing: 1px;
                background-color: rgba(0,0,0,.7);
                transition: all .3s;
                &-title, &-img {
                  transition: all .3s;
                  transform: translateY(0px);
                }
                &-img {
                  position: absolute;
                  left: 50%;
                  transform: translateX(-50%);
                }
                &-title {
                  position: absolute;
                  top: 150px;
                  left: 0px;
                  padding-bottom: 9px;
                  width: 100%;
                  text-align: center;
                  font-size: 20px;
                  font-weight: bold;
                }
                &-detail {
                  position: absolute;
                  left: 0px;
                  top: 225px;
                  padding: 0px 30px;
                  font-size: 16px;
                  text-align: center;
                  word-break: break-all;
                  opacity: 0;
                  transition: all .3s;
                  transform: translateY(0px);
                }
                &:hover {
                  background-color: rgba(0,0,0,.9);
                  img {
                    transform: translate(-50%, -60px) scale(.66, .66);
                  }
                  p:nth-of-type(1) {
                    transform: translateY(-80px);
                  }
                  p:nth-of-type(2) {
                    opacity: 1;
                    transform: translateY(-110px);
                  }                  
                }
              }
            }
          }
        }
        &-animation {
          h1 {
            animation: zoomShow .6s .7s ease-out both;
          }
          .services-item {
            &:nth-of-type(1) {
              animation: flyFromLeft .5s .5s ease-out both;
            }
            &:nth-of-type(2) {
              animation: flyFromBottom .5s .55s ease-out both;
            }
            &:nth-of-type(3) {
              animation: flyFromBottom .5s .6s ease-out both;
            }
            &:nth-of-type(4) {
              animation: flyFromRight .5s .65s ease-out both;
            }
            &:nth-of-type(5) {
              animation: flyFromLeft .5s .7s ease-out both;
            }
            &:nth-of-type(6) {
              animation: flyFromBottom .5s .75s ease-out both;
            }
          }
          &-left {
            h1 {
              animation: fadeHide .8s;
            }
            .services-item {
              &:nth-of-type(1), &:nth-of-type(4) {
                animation: flyLeft .8s;
              }
              &:nth-of-type(3), &:nth-of-type(6) {
                animation: flyRight .8s;
              }
              &:nth-of-type(2), &:nth-of-type(5) {
                animation: fadeZoomHide .8s;
              }
            }
          }
        }
      }
      &-3 {
        &-inner {
          position: absolute;
          left: 0px;
          top: 0px;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,.55);
          &-caption {
            margin-top: 100px;
            h1 {
              font-size: 50px;
              text-align: center;
              letter-spacing: 4px;
              color: #FED618;
            }
          }
          &-swiper {
            margin: 0 auto;
            margin-top: 70px;
            width: 80%;
            height: 500px;
            overflow: visible;
            &-slide {
              position: relative;
              box-sizing: border-box;
              border-radius: 15px;
              background-image: url('/images/background/introduction/j.jpg');
              background-size: cover;
              background-position: -430px;
              box-shadow: 3px 3px 15px black;
              .staff-photo {
                position: relative;
                z-index: 100;
                margin: 0 auto;
                margin-top: -80px;
                width: 200px;
                height: 200px;
                border: 4px solid white;
                border-radius: 200%;
                overflow: hidden;
                img {
                  width: 100%;
                }
              }
              .staff-info {
                margin-top: 20px;
                padding: 0px 25px;
                text-align: center;
                h2 {
                  font-size: 35px;
                }
              }
            }
          }
        }
        &-animation {
          .intro-swiper-section-3-inner-swiper {
            &-slide {
              &:nth-of-type(3) {
                animation: fadeShow 1s .5s both;
              }
              &:nth-of-type(4), &:nth-of-type(2) {
                animation: fadeShow 1s .8s both;
              }
              &:nth-of-type(1), &:nth-of-type(5) {
                animation: fadeShow 1s 1.2s both;
              }
            }
          }
          &-left {
            h1 {
              animation: fadeHide .7s;
            }
            .intro-swiper-section-3-inner-swiper {
              &-slide {
                &:nth-of-type(3) {
                  animation: fadeHide .7s;
                }
                &:nth-of-type(4), &:nth-of-type(2) {
                  animation: fadeHide .7s .1s both;
                }
                &:nth-of-type(1), &:nth-of-type(5) {
                  animation: fadeHide .7s .2s both;
                }
              }
            }
          }
        }
      }
      &-4 {
        &-inner {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,.55);
          &-caption {
            position: absolute;
            top: 12%;
            width: 100%;
            color: #FED618;
            perspective: 500;
            > h1 {
              font-size: 50px;
              letter-spacing: 8px;
              text-align: center;
              font-family: KoruriExtrabold;
            }
            > h2 {
              margin-top: 40px;
              font-size: 42px;
              text-align: center;
              letter-spacing: 1px;
              text-shadow: 0px 0px 10px rgba(10,16,16, .4);
            }
            > h3 {
              margin-top: 80px;
              font-size: 25px;
              text-align: center;
              letter-spacing: 1px;
              font-family: MAKFreesetBold;
            }
          }
          &-btn {
            position: absolute;
            left: calc( (100% - 200px) / 2 );
            bottom: 42%;
            width: 200px;
            height: 45px;
            line-height: 45px;
            font-family: "Microsoft YaHei","微软雅黑",Arial,sans-serif;
            text-align: center;
            letter-spacing: 2.5px;
            color: #FCD424;
            cursor: pointer;
            border: 2px solid #FCD424;
            overflow: hidden;
            transition: all .2s;
            transform: scale(1.1,1.1);
            > figure {
              position: absolute;
              top: 0px;
              left: -100%;
              z-index: -1;
              width: 100%;
              height: 100%;
              background-color: #FCD424;
              transition: all .2s;
            }
            &:hover {
              color: white;
              transform: scale(1.1, 1.1);
              > figure {
                left: 0%;
              }
            }
          }
        }
        &-animation {
          h1 {
            animation: FromBigToSmall 1.2s .3s both;
          }
          h2 {
            animation: perspectiveShow2 .8s 1.5s both;
          }
          h3 {
            animation: fadeShow 1s 2.3s both;
          }
          .intro-swiper-section-4-inner-btn {
            animation: moveShow 1s 3.3s both;
          }
          &-left {
            h1, h2, h3, .intro-swiper-section-4-inner-btn {
              animation: fadeZoomHide .8s;
            }
          }
        }
      }
      &-5 {
        background-image: url('/images/background/introduction/e.jpg');
      }
    }
  }
  @keyframes fadeShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeHide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes fadeZoomHide {
    from {
      opacity: 1;
      transform: scale(1,1);
    }
    to {
      opacity: 0;
      transform: scale(0,0);
    }
  }
  @keyframes moveShow {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes flyFromLeft {
    from {
      transform: translateX(-2000px);
    }
    to {
      transform: translateX(0px);
    }
  }
  @keyframes flyFromBottom {
    from {
      opacity: 0;
      transform: translateY(1000px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes flyFromRight {
    from {
      transform: translateX(2000px);
    }
    to {
      transform: translateX(0px);
    }
  }
  @keyframes flyRight {
    from {
      opacity: 1;
      transform: scale(1,1) translateX(0px);
    }
    to {
      opacity: 0;
      transform: scale(0,0) translateX(200px);
    }
  }
  @keyframes flyLeft {
    from {
      opacity: 1;
      transform: scale(1,1) translateX(0px);
    }
    to {
      opacity: 0;
      transform: scale(0,0) translateX(-200px);
    }
  }
  @keyframes flyTop {
    from {
      opacity: 1;
      transform: scale(1,1) translateY(0px);
    }
    to {
      opacity: 0;
      transform: scale(0,0) translateY(-200px);
    }
  }
  @keyframes perspectiveShow {
    from {
      opacity: 0;
      transform: rotateX(45deg);
    }
    to {
      opacity: 1;
      transform: rotateX(0deg);
    }
  }
  @keyframes perspectiveShow2 {
    0% {
      opacity: 0;
      transform: rotateX(65deg);
    }
    25% {
      transform: rotateX(-50deg);
    }
    50% {
      transform: rotateX(40deg);
    }
    75% {
      transform: rotateX(-20deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0deg);
    }
  }
  @keyframes zoomShow {
    from {
      transform: scale(0,0);
    }
    to {
      transform: scale(1,1);
    }
  }
  @keyframes zoomHide {
    form {
      transform: scale(1, 1);
    }
    to {
      transform: scale(0,0);
    }
  }
  @keyframes moveLogo {
    from {
      left: calc((100% - 200px) / 2);
      top: 28%;
      transform: scale(1.3, 1.3);
    }
    to {
      left: calc((100% - 200px) / 2);
      top: 50px;
      transform: scale(1, 1);
    }
  }
  @keyframes moveBg {
    from {
      background-position-x: 0px;
    }
    to {
      background-position-x: -300px;
    }
  }
  @keyframes indistinct {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes FromBigToSmall {
    0% {
      opacity: 0;
      transform: scale(2,2);
    }
    70% {
      transform: scale(.8,.8);
    }
    80% {
      transform: scale(1.1,1.1);
    }
    90% {
      transform: scale(.9,.9);
    }
    100% {
      opacity: 1;
      transform: scale(1,1);
    }
  }

  .down-arrow {
    position: fixed;
    z-index: 1000;
    bottom: 5%;
    left: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    transform: translateX(-50%);
    animation: indistinct 2s 10s infinite both;
    > div {
      text-align: center;
      color: white;
      font-size: 12px;
    }
  }
</style>

<style>
  body {
    overflow: hidden;
  }
  .swiper-wrapper {
    transition-timing-function: ease;
    transition-duration: 1200ms !important;
    transition-delay: 100ms;
  }
</style>