<template>
  <div class="articleBox">
    <div class="content">
      <div class="content-header">
        <span class="title">我的网站作品一</span>
        <span class="createTime">2021/08/18</span>
        <span class="author">马天乐</span>
      </div>
      <div class="content-body">
        <img src="https://img.zcool.cn/ad_manager/location/abfb61151e5b1101c43350048100.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.articleBox{
    width:800px;
    height:400px;
    background-color: #ffffff;
    float: left;
}
.content{
  width:720px;
  padding: 30px;
}
.content-header{
  height:30px;
  line-height: 30px;
  padding-bottom: 15px;
  border-bottom:3px solid #000000;
}
.content-header .title{
  font-size: 24px;
  font-weight: bold;
}
.content-header .author{
  font-size: 14px;
  float: right;
  color: #444444;
}
.content-header .createTime{
  font-size: 14px;
  float: right;
  color: #444444;
  padding-left: 10px;
}
.content-body{
  margin-top:5px;
}
.content-body img{
  width:100%;
  height:300px;
}
</style>