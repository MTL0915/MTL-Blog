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
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in bannerImgs" :key="index">
          <img :src="item" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      bannerImgs:[
        "https://img.zcool.cn/ad_manager/location/e48d611b139d1101c43350ae6b31.jpg",
        "https://img.zcool.cn/ad_manager/location/7439611b137f1101c43350934225.png",
        "https://img.zcool.cn/ad_manager/location/27f5611b14041101c433502dc500.jpg"
      ],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
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
.banner img{
  width:100%;
  height:300px;
}
</style>
