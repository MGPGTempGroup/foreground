<template>
  <main class="industry-updates-details">
    <div class="industry-updates-details__head-map">
      <div class="industry-updates-details__head-map-title" >
        <h1>The Importance Of Completing</h1>
        <h2>A Condition Report</h2>
      </div>
      <img class="industry-updates-details__head-map-img" src="https://www.melbournerealestate.com.au/wp-content/uploads/2018/08/Condition-Report-Blog-Header.jpg" alt="">
    </div>
    <article class="industry-updates-details__article">
      <el-card class="industry-updates-details__article-content">
          <h3>The Importance Of Completing A Condition Report</h3>
          <p>You’ve found the perfect rental home and can’t wait to move in. Amongst the flurry of unpacking boxes, acclimatising the philodendron and assembling your Billy bookcase, one vitally important task can sometimes be overlooked; completing the condition report.</p>
          <p>At the beginning of your tenancy, along with collecting the keys, you’ll receive 2 copies of a detailed report noting the overall condition of your rental property, including all fixtures and fittings. You then have 3 business days to return a signed copy to the leasing agent, retaining one for your own records. </p>
          <p>The condition report contains available sections for you, as tenant, to write any of your own comments. In the event you believe something has been overlooked, note your concerns and take accompanying photos to back them up. At MRE, our meticulous Property Managers also film an HD video covering every square inch of the property as a visual record, which ensures this seldom occurs. </p>
          <p>At the end of the tenancy, your agent will compare this condition report with their final property inspection, using it to support any reasonable dispute around cleaning or potential damage, and facilitating the timely repayment of the bond once you’ve vacated.</p>
          <p>It’s important to note that should you neglect to complete the condition report in the allotted time, it will be assumed that you accept it as given, without any changes. So take the time to thoroughly go over the property, report in hand, before you begin alphabetising your cook books, because the transition will be so much easier for all parties when it’s eventually time to move on. </p>
          <strong style="font-size: 20px; margin-bottom: 10px;" >share</strong>
          <share-card style="margin-top: 10px;" />
      </el-card>
    </article>
  </main>
</template>

<script>
  import ShareCard from '@/components/ShareCard'
  export default {
    name: 'industry-updates-details',
    components: {
      ShareCard
    }
  }
</script>

<style scoped lang="scss" >
  @import '@/assets/sass/mixins/responsive.scss';
  .industry-updates-details {
    &__head-map {
      position: relative;
      min-height: 400px;
      background-color: rgba(0,0,0,.9);
      &-title {
        position: absolute;
        top: 45%;
        width: 100%;
        text-align: center;
        color: white;
        transform: translateY(-50%);
        h1, h2 {
          margin: 0px;
          margin-top: 10px;
          text-shadow: 0px 0px 10px black;
        }
        h1 {
          font-size: 45px;
        }
        h2 {
          font-size: 35px;
        }
        @include media-xs {
          h1 {
            font-size: 30px;
          }
          h2 {
            font-size: 25px;
          }
        }
      }
      img {
        width: 100%;
      }
    }
    &__article {
      margin-top: 20px;
      @include media-md-down {
        padding: 0px 10px;
      }
      &-content {
        padding-bottom: 10px;
      }
    }
  }
</style>


