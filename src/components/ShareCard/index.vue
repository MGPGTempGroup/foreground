<template>
  <div class="shareCard-container">
    <ul class="shareCard-list" >
      <li class="shareCard-list-item" >
        <a href="">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
          Facebook
        </a>
      </li>
      <li class="shareCard-list-item" >
        <a href="">
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
          Twitter
        </a>
      </li>
      <li class="shareCard-list-item">
        <a href="">
          <i class="fa fa-google-plus-square" aria-hidden="true"></i>
          Google+
        </a>
      </li>
      <li class="shareCard-list-item">
        <a href="">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          Linkedin
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'share-card'
}
</script>

<style scoped lang="scss" >
  a {
    text-decoration: none;
  }
  .shareCard-list {
    &-item:first-of-type ~ &-item {
      margin-left: 20px;
    }
    &-item {
      display: inline-block;
      margin-top: 4.5px;
      width: auto;
      font-size: 17px;
      transition: all .3s;
      i {
        transition: all .3s;
      }
      &:hover {
        transform: scale(1.1, 1.1);
        .fa-facebook-square {
          color: #4267B1;
        }
        .fa-twitter-square {
          color: #21A1F0;
        }
        .fa-google-plus-square {
          color: #DD4D41;
        }
        .fa-linkedin-square {
          color: #0573B0;
        }
      }
    }
  }
</style>


