<template>
  <div class="works">
    <Header></Header>
    <div class="works-content">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icondiannao"></use>
      </svg>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import "../assets/js/iconfont";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
