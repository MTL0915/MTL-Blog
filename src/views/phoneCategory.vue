<template>
  <div class="articleBox">
    <div class="content" v-for="item in articleList" :key="item.detail_id">
      <router-link :to="`/detail?id=${item.detail_id}`">
        <div class="content-header">
          <span class="title">{{item.title}}</span>
          <span class="createTime">{{item.add_time}}</span>
          <span class="author">{{item.author}}</span>
        </div>
        <div class="content-body">
          <img :src="item.image">
        </div>
        <div class="content-footer">
          <span class="more">read more ></span>
          <span class="category">{{item.keywords}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'allCategory',
  data(){
    return{
      articleList:[]
    }
  },
  mounted(){
    axios.get('http://www.matianle.com/api/article/applist').then(
      response => {
        console.log('请求成功',response.data)
        this.articleList = response.data.data
      },
      error => {
        console.log('请求失败',error.message)
      }
    )
  }
}
</script>

<style scoped>
.articleBox{
  width:800px;
  float: left;
}
.content{
  padding: 20px 30px;
  margin-bottom: 20px;
  background-color: #ffffff;
}
.content a{
  color:#333;
}
.content-header{
  height:30px;
  line-height: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid #000000;
}
.content-header .title {
  font-size: 24px;
  font-weight: bold;
}
.content-header .author {
  font-size: 14px;
  float: right;
  color: #8d8d8d;
}
.content-header .createTime {
  font-size: 14px;
  float: right;
  color: #8d8d8d;
  padding-left: 10px;
}
.content-body {
  margin-top: 5px;
}
.content-body img {
  width: 100%;
  height: 300px;
}
.content-footer {
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
}
.content-footer .more {
  color: #7d4f18;
  border-bottom:1px solid #7d4f18;
}
.content-footer .classify {
  font-size: 14px;
  float: right;
  color: #8d8d8d;
}
.content-footer .comment {
  font-size: 14px;
  float: right;
  color: #7d4f18;
  padding-left: 10px;
}
.content-footer{
  margin-top:5px;
  height:30px;
  line-height: 30px;
}
.content-footer .more{
  float: left;
  border-bottom: 1px solid #333;
}
.content-footer .category{
  float: right;
}
</style>