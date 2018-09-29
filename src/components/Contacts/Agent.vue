<template>
  <div class="contacts-agent" >
    <img src="https://www.melbournerealestate.com.au/wp-content/uploads/2014/09/Jason-Andor-1.png" alt="">
    <div class="contacts-agent-info">
      <h4><strong>Jason Andor</strong></h4>
      <div>
        Senior Sales Executive <br>
        Direct +61 3 9829 2933 <br>
        Mobile +61 431 523 161 <br>
        jandor@melbournerealestate.com.au
      </div>
    </div>
    <div class="contacts-agent-other" >
      <el-button type="info">Email Agent</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contacts-agent'
}
</script>

<style scoped lang="scss" >
  .contacts-agent {
    img {
      width: 100%;
    }
    &-info {
      margin-top: 12px;
      h4 {
        font-size: 20px;
      }
      > div {
        margin-top: 15px;
      }
    }
    &-other {
      margin-top: 15px;
    }
  }
  
</style>


