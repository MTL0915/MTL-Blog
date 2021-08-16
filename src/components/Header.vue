<template>
  <div class="header">
    <div class="nav">
      <div class="nav-content">
        <div class="logo">
          <a href="#">博客 | Blog</a>
        </div>
        <div class="menu">
          <ul>
            <li><a href="#">works</a></li>
            <li><a href="#">blog</a></li>
            <li><a href="#">resume</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="banner">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

export default {
  name: "Header",
  data () {
    return {
      banners: [ '/1.jpg', '/2.jpg', '/3.jpg' ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
      }
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.mySwiper)
    this.mySwiper.slideTo(3, 1000, false)
  },
  props: {
      msg: String,
  },
  components: {
      Swiper,
      SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  height: 50px;
  background-color: #3c2b4f;
}
.nav-content {
  width: 1200px;
  margin: 0 auto;
}
.logo {
  float: left;
  height: 50px;
  line-height: 50px;
}
.menu {
  float: right;
}
.menu ul li {
  float: left;
  height: 50px;
  line-height: 50px;
}
.menu ul li a {
  padding-left: 40px;
}
</style>
