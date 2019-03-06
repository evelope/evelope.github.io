<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
// CoreUI Icons Set
@import "~@coreui/icons/css/coreui-icons.min.css";
/* Import Font Awesome Icons Set */
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/scss/font-awesome.scss";
/* Import Simple Line Icons Set */
$simple-line-font-path: "~simple-line-icons/fonts/";
@import "~simple-line-icons/scss/simple-line-icons.scss";
/* Import Flag Icons Set */
@import "~flag-icon-css/css/flag-icon.min.css";
/* Import Bootstrap Vue Styles */
@import "~bootstrap-vue/dist/bootstrap-vue.css";
// Import Main styles for this application
@import "assets/scss/style";
.cursor {
  cursor: pointer;
}
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #6e6e6e;
}
::-webkit-scrollbar-thumb:active {
  background: #535353;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ececec;
}
</style>
