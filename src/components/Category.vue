<template>
  <div class="category">
    <div class="category-header">CATEGORY</div>
    <div class="category-nav">
      <ul>
        <li>网页 WEB</li>
        <li>应用 APP</li>
        <li>微信 WECHAT</li>
        <li>软件 SOFTWARE</li>
        <li>收集 COLLECT</li>
        <li>作品 WORKS</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.category{
    width:320px;
    height:400px;
}
.category-header{
  padding-left:10px;
  padding-bottom:10px;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 8px solid #94ade4;
  margin-bottom:30px;
}
.category-nav li{
  padding: 15px;
  color: #8d8d8d;
  border-bottom:1px solid #8d8d8d;
}
</style>