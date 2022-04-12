<template>
  <div class="header">
    <div class="nav">
      <div class="nav-content">
        <div class="logo">
          <a href="#">博客 | Blog</a>
        </div>
        <div class="menu">
          <ul>
            <li><router-link active-class="active" to="/home">blog</router-link></li>
            <li><router-link active-class="active" to="/notes">notes</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in bannerImgs" :key="index">
          <router-link :to="`/detail?id=${item.detail_id}`"><img :src="item.bannerImg" alt="" /></router-link>
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
import axios from 'axios'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      bannerImgs:[

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

    axios.get('http://localhost:8080/api/article/bannerImg').then(
      response => {
        console.log('请求成功',response.data)
        this.bannerImgs = response.data.data
      },
      error => {
        console.log('请求失败',error.message)
      }
    )
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
  margin:0 20px;
}
.menu ul li a {
  display: block;
  height:46px;
  padding:0 4px;
}
.active{
  border-bottom: 2px solid #94ade4;
}
.banner img{
  width:100%;
  height:300px;
  object-fit: cover;
}
</style>
