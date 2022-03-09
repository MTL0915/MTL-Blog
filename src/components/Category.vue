<template>
  <div class="category">
    <div class="category-header">
      <h3>CATEGORY</h3>
      <div class="line"></div>
    </div>
    <ul class="category-body">
      <li v-for="(item,index) in categoryList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"Category",
  data(){
    return{
      categoryList:["PC版","移动端","小程序"]
    }
  }
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
.category-body li{
  padding-left:20px;
  border-bottom:1px solid #c7c7c7;
  height: 40px;
  line-height:40px;
}
</style>