<template>
  <component class="comment-container" :is="tag" >
    <el-rate
      v-model="rate"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value}">
    </el-rate>
    <div class="info" >
      <b>{{ name }}</b> - {{ date }}
      <br />
      <a href="//www.melgrand.com">Via</a>
    </div>
    <div class="content" >
      <slot></slot>
    </div>
  </component>
</template>

<script>
export default {
  name: 'service-comment',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    rate: {
      type: Number,
      default: 5 // 默认评分5
    },
    name: String,
    date: String
  }
}
</script>

<style scoped lang="scss" >
  .comment-container {
    width: 100%;
  }
  .info {
    margin-top: 10px;
  }
  .content {
    padding: 10px 0px 10px 0px;
    letter-spacing: 0.5px;
    color: #272822;
  }
</style>


