<template>
  <div>
    <div class="articleBox">
      <div class="content">
        <div class="content-header">
          <span class="title">{{datailItem.brandName}}</span>
          <span class="createTime">{{datailItem.createTime}}</span>
          <span class="author">{{datailItem.name}}</span>
        </div>
        <div class="content-body">
          <p>
            {{datailItem.detailContentOne}}
          </p>
        </div>
        <div class="content-footer">
          <span class="tags">{{datailItem.introduce}}</span>
          <span class="classify">{{datailItem.field}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:"ArticleDetailBox",
  props:['detailId'],
  data(){
    return{
      detailList:[],
      datailItem:"",
    }
  },
  mounted(){
    axios.get('http://localhost:8080/api/article/detail').then(
      response => {
        console.log('请求成功',response.data)
        this.detailList = response.data.data
      },
      error => {
        console.log('请求失败',error.message)
      }
    ).then(()=>{
      for(var i=0;i<this.detailList.length;i++){
        if(this.detailList[i].detail_id == this.detailId){
          this.datailItem = this.detailList[i]
        }
      }
    })
  },
  watch:{
    //监听页面路由变化
    $route(to,from){
      // console.log(to);//去哪里
      // console.log(from);//从哪来
      //从详情页来进入详情页
      if(from.name=="detail" && to.name=="detail"){
        //Object.assign(this.$data, this.$options.data())
        //var to=decodeURIComponent(to.path)
        //to = to.split("/");
        //var id = to[2]
        var id =this.$route.query.id
        for(var i=0;i<this.detailList.length;i++){
          if(this.detailList[i].detail_id == id){
            this.datailItem = this.detailList[i]
          }
        }     
      }
    }
  } 
};
</script>

<style scoped>
.articleBox {
  width: 800px;
  background-color: #ffffff;
  margin-bottom: 30px;
}
.content {
  width: 740px;
  padding: 20px 30px 10px;
}
.content-header {
  height: 30px;
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
.content-footer {
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
}
.content-footer .tags {
  color: #7d4f18;
}
.content-footer .classify {
  font-size: 14px;
  float: right;
  color: #8d8d8d;
}
</style>
