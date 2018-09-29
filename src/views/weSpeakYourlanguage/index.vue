<template>
  <main class="your-language" >
    <main-swiper class="your-language__swiper" ></main-swiper>
    <el-row class="your-language__layout" >
      <el-col :lg="17" class="your-language__content-wrapper" >
        <el-card class="your-language__content" >
          <h2>墨尔本地产物业管理</h2>
          <p>墨尔本地产致力于打造新一代的物业管理模式， 自2006年以来，我们获得了五个维省房地产行业大奖，三个全国地产行业大奖。我们成功的原因有很多，但最重要的一点是我们坚持履行对客户的承诺，把客户的物业视如己出。</p>
          <p>
            <img src="http://www.melbournerealestate.com.au/wp-content/uploads/2014/05/Property_Management_Image.jpg" alt="">
          </p>
          <strong style="font-size: 20px;" >分享</strong>
          <share-card style="margin-top: 10px;" />
        </el-card>
      </el-col>
      <el-col :lg="7" class="your-language__side" >
        <el-row :gutter="12" >
          <el-col :sm="12" :md="12" :lg="24" >
            <el-card class="your-language__form-wrapper" >
              <h4 slot="header">如果您对我们的服务感兴趣，请您留下您的物业地址，我们会为您准备一份免费的房屋 租赁/销售 评估：</h4>
              <common-form class="your-language__form" ></common-form>
            </el-card>
          </el-col>
          <el-col :sm="12" :md="12" :lg="24" >
            <contacts-card title="联系人" :contactList="contacts" style="margin-top: 20px;" ></contacts-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </main>
</template>

<script>
  import MainSwiper from '@/components/MainSwiper'
  import ShareCard from '@/components/ShareCard'
  import CommonForm from '@/components/CommonForm'
  import ContactsCard from '@/components/Contacts'
  export default {
    name: 'we-speak-your-language-page',
    components: {
      MainSwiper,
      ShareCard,
      CommonForm,
      ContactsCard
    },
    data() {
      return {
        contacts: { "Jason Low 刘青纬 – 亚洲商务发展及销售总监": { "direct": '+61 499 847 888', "mobile": 'jasonmre', 'email': 'jason@melbournerealestate.com.au' } }
      }
    }
  }
</script>

<style scoped lang="scss" >
  @import '@/assets/sass/mixins/responsive.scss';
  .your-language {
    &__layout {
      margin-top: 20px;
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
    }
    &__content-wrapper {
      @include media-lg-up {
        padding-right: 32px;
      }
    }
    &__content {
      padding-bottom: 10px;
      img {
        @include media-xs {
          width: 100%;
        }
      }
    }
    &__form-wrapper {
      @include media-md-down {
        margin-top: 20px;
      }
    }
  }
</style>


