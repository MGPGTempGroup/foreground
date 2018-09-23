<template>
  <el-card class="box-card">
    <div slot="header">
      <h3 style="margin: 0px;" >Contacts</h3>
    </div>
    <ul class="contact-list" v-if="contactList" >
      <li v-for="(item, index) in contactList" :key="index" >
        <h4 class="contact-position" >{{ index }}</h4>
        <div class="contact-detail" v-if="item" >
          <div v-if="item.direct" > Direct: {{ item.direct }} </div>
          <div v-if="item.mobile" > Mobile: {{ item.mobile }} </div>
          <div v-if="item.email" > <a :href="'mailto:' + item.email">{{ item.email }}</a> </div>
        </div>
        <div v-else > nothing </div>
      </li>
    </ul>
    <div v-else > nothing </div>
  </el-card>  
</template>

<script>
export default {
  name: 'contacts',
  props: {
    contactList: Object // { "Georgina Mellick — Project Sales Director": ['contact 1', 'contact 2'] }
  }
}
</script>

<style scoped lang="scss" >
  .contact-list {
    h4 {
      font-size: 14.5px;
    }
    > li {
      padding-top: 23px;
      &:first-of-type {
        padding-top: 0px;
      }
    }    
  }
  .contact-detail {
    margin-top: 10px;
    font-size: 14px;
  }
</style>


