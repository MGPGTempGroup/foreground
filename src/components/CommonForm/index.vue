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
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      },
    }
  }
}
</script>

<style scoped lang="scss" >
  .container {
    width: 350px;
  }
  .el-form-item {
    margin-bottom: 8px;
  }
</style>


