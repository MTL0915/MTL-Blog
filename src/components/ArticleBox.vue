<template>
  <div>
    <div class="articleBox">
      <div class="content">
        <div class="content-header">
          <span class="title">我的网站作品一</span>
          <span class="createTime">2021/08/18</span>
          <span class="author">马天乐</span>
        </div>
        <div class="content-body">
          <img
            src="https://img.zcool.cn/ad_manager/location/abfb61151e5b1101c43350048100.png"
          />
        </div>
        <div class="content-footer">
          <a href="http://www.baidu.com" class="more">READ MORE ></a>
          <span class="comment">0 COMMENTS</span>
          <span class="classify">网页 WEB</span>
        </div>
      </div>
    </div>
    <div class="articleBox">
      <div class="content">
        <div class="content-header">
          <span class="title">我的网站作品一</span>
          <span class="createTime">2021/08/18</span>
          <span class="author">马天乐</span>
        </div>
        <div class="content-body">
          <img
            src="https://img.zcool.cn/ad_manager/location/abfb61151e5b1101c43350048100.png"
          />
        </div>
        <div class="content-footer">
          <a href="http://www.baidu.com" class="more">READ MORE ></a>
          <span class="comment">0 COMMENTS</span>
          <span class="classify">网页 WEB</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
