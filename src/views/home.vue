<template>
<div class="home">
  <Header></Header>
  <div class="content">
    <router-view></router-view>
    <Category class="fr"></Category>
  </div>
  <Footer></Footer>
</div>

</template>

<script>
import Header from '../components/Header.vue'
import Category from '../components/Category.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Category,
    Footer
  },
  data() {
    return {
      articleList:[]
    };
  }
};
</script>
<style scoped>
.content{
  width:1200px;
  margin: 50px auto 0;
  overflow: hidden;
  margin-top:50px;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
</style>
