<template>
  <div class="notes">
    <Header></Header>
    <div class="notes-content">
      <div class="collect">
        <p>收集到的资料</p>
      </div>
      <div class="myNotes">
        <ul>
          <li class="list-item" v-for="item in notesList" :key="item.detail_id">
            <a :href="item.address" target="blank">
              <img
                :src="item.image"
              />
            </a>
            <div class="intro">
              <a href="">{{item.title}}</a>
              <div class="createTime">{{item.keywords}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import "../assets/css/iconfont.css";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import axios from 'axios'
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      notesList:[]
    };
  },
  mounted() {
    axios.get('http://www.matianle.com/api/notes/list').then(
      response => {
        console.log('请求成功',response.data)
        this.notesList = response.data.data
      },
      error => {
        console.log('请求失败',error.message)
      }
    )
  }
};
</script>

<style scoped>
.notes-content {
  width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
}
.iconfont {
  font-size: 30px;
  padding-right: 5px;
}
.collect {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  border-bottom: solid 1px #abcdef;
  font-size: 24px;
  font-weight: bold;
}
.myNotes {
  margin-top: 30px;
  margin-right: -20px;
}
.myNotes .list-item {
  width: 285px;
  vertical-align: top;
  display: inline-block;
  margin-right: 20px;
  margin-bottom:30px;
}
.myNotes .list-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  background: #f8f8f8;
}
.intro {
  text-align: center;
  margin-top:10px;
}
.intro a {
  color: #444444;
}
.intro .createTime{
  margin-top:5px;
}
</style>
