<template>
  <el-form class="container" :model="form">
    <el-form-item>
      <el-input placeholder="Name" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="Surname" v-model="form.surname"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input placeholder="Email Address" v-model="form.emailAddress"></el-input>
    </el-form-item>
    <el-form-item >
      <el-input placeholder="Phone" v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item>
      <el-select placeholder="About You" v-model="form.aboutYou">
        <el-option
          v-for="item in form.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="comment..."
        v-model="form.comment">
      </el-input>
    </el-form-item>
    <el-button type="primary" round>Go</el-button>
  </el-form>
</template>

<script>
export default {
  name: 'common-form',
  data() {
    return {
      form: {
        name: '',
        surname: '',
        emailAddress: '',
        phone: '',
        aboutYou: '',
        comment: '',
        options: [{
          value: '选项1',
          label: 'Landlords'
        }, {
          value: '选项2',
          label: 'Tenand'
        }, {
          value: '选项3',
          label: 'Purchaser'
        }, {
          value: '选项4',
          label: 'Vendor'
        }, {
          value: '选项5',
          label: 'Other'
        }],
      },
    }
  }
}
</script>

<style scoped lang="scss" >
  .container {
    width: 100%;
  }
  .el-form-item {
    margin-bottom: 8px;
  }
</style>


