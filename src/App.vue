<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  min-width: 1366px;
}
div,span,tr,td,th,p,input,ul,li{
  font-family: "Microsoft YaHei";
}
#app {
  font-family: "Microsoft YaHei",FreeSans,Arimo,"Droid Sans","wenquanyi micro hei","Hiragino Sans GB","Hiragino Sans GB W3","FontAwesome",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  font-size: 14px;
  background-color: #ffffff;
}
</style>
