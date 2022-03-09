<template>
  <div class="articleBox">
    <div class="content" v-for="item in articleList" :key="item.id">
      <div class="content-header">
        <span class="title">{{item.title}}</span>
        <span class="createTime">{{item.createTime}}</span>
        <span class="author">{{item.author}}</span>
      </div>
      <div class="content-body">
        <img :src="item.imgUrl">
      </div>
      <div class="content-footer">
        <span class="more">read more ></span>
        <span class="category">{{item.category}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"ArticleBox",
  data(){
    return{
      articleList:[
        {id:"001",title:"我的网站作品一",createTime:"2021/08/18",author:"马天乐",imgUrl:"https://img.zcool.cn/ad_manager/location/abfb61151e5b1101c43350048100.png",category:"网页 WEB"},
        {id:"002",title:"我的网站作品二",createTime:"2022/03/17",author:"马天乐",imgUrl:"https://img.zcool.cn/tubelocation/d08361f3b2a71101c43c6134d3a8.jpg",category:"网页 WEB"}
      ]
    }
  }
}
</script>

<style scoped>
.articleBox{
  width:800px;
  background-color: #ffffff;
  float: left;
}
.content{
  padding: 20px 30px;
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

