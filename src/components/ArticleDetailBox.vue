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
          <p>
            3位淘系技术前端工程师，精心筛选出 26
            个难度层层递进，好玩且实用的前端项目，比如动画制作、文字识别、可视化图表、H5制作等等，甚至还能把云音乐灰色歌曲解锁播放（嘘！）本篇内容按难度分为【初级篇：8个】、【中级篇：9个】、【高级篇：9个】项目，不同水平不同学习瓶颈的同学可按需选择~（点击头像关注我们账号，别错过更多阿里工程师一线技术干货）—————————————————————————————————————初级篇这里一般适用于刚入门前端的同学，一般入门前端都是从html和css开始的，应该让这些同学提起对前端的兴趣，因此初级篇选用几个比较有趣的css库来让同学入门前端。animateanimate是一个css动画库，动画内容一般也是我们所熟悉的，例如渐入、渐出、弹跳、旋转、抖动等特效。ppt里面的许多特效在animate都能找到。而且使用简单，只需引入库并添加相关css即可。CSS-InspirationCSS-Inspiration涵盖了css的许多常见的特效，例如布局方式、border、伪元素、滤镜、背景3d等。这些都是css里面十分重要的知识点，当我们学习完css基础之后，可以利用此项目来制作一些常用的特效，也可以巩固基础知识。Bootstrap是Twitter推出的一个用于前端开发的开源工具包。它由Twitter的设计师Mark Otto和Jacob Thornton合作开发，是一个CSS/HTML框架。Bootstrap是可以直接应用到我们平常的项目里的，而且非常方便、功能特别多，也是我们常用的前端UI框架。

作者：阿里巴巴淘系技术
链接：https://www.zhihu.com/question/30470886/answer/2068242772
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
          </p>
        </div>
        <div class="content-footer">
          <span class="tags">vue</span>
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
