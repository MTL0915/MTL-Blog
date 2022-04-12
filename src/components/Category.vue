<template>
  <div class="category">
    <div class="category-header">
      <h3>CATEGORY</h3>
      <div class="line"></div>
    </div>
    <ul class="category-body">
      <li><router-link active-class="active" to="/home/allCategory">全部</router-link></li>
      <li><router-link active-class="active" to="/home/pcCategory">PC版</router-link></li>
      <li><router-link active-class="active" to="/home/phoneCategory">移动端</router-link></li>
      <li><router-link active-class="active" to="/home/weChatCategory">小程序</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"Category"
}
</script>

<style scoped>
.category{
  width:300px;
  float: right;
}
.category-header h3{
  font-size:24px;
  height:40px;
  line-height: 40px;
  padding-left:20px;
}
.category-header .line{
  height:5px;
  background-color: #abcdef;
}
.category-body{
  margin-top:20px;
}
.category-body .active{
  color: #abcdef;
  font-weight: bold;
}
.category-body li{
  padding-left:20px;
  border-bottom:1px solid #c7c7c7;
  height: 40px;
  line-height:40px;
}
.category-body li a{
  color: #333333
}
</style>