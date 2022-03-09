<template>
<div class="home">
  <Header></Header>
  <div class="content">
    <ArticleBox></ArticleBox>
    <Category></Category>
  </div>
</div>

</template>

<script>
import Header from '../components/Header.vue'
import ArticleBox from '../components/ArticleBox.vue'
import Category from '../components/Category.vue'
export default {
  components: {
    Header,
    ArticleBox,
    Category
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.content{
  width:1200px;
  margin: 50px auto 0;
  overflow: hidden;
}
</style>
