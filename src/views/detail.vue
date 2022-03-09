<template>
<div class="detail">
  <Header></Header>
  <div class="content">
    <ArticleDetailBox class="fl"></ArticleDetailBox>
    <Category class="fr"></Category>
  </div>
  <Footer></Footer>
</div>

</template>

<script>
import Header from '../components/Header.vue'
import ArticleDetailBox from '../components/ArticleDetailBox.vue'
import Category from '../components/Category.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Header,
    ArticleDetailBox,
    Category,
    Footer
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.content{
  width:1200px;
  margin: 0 auto;
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
