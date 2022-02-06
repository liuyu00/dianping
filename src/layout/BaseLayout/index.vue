<template>
  <el-container class="base-layout">
    <header-bar />
    <el-container>
      <menu-aside />
      <el-main class="content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MenuAside from './components/MenuAside.vue'
import HeaderBar from './components/HeaderBar.vue'
export default {
  name: 'base-layout',
  components: {
    HeaderBar,
    MenuAside
  }
}
</script>

<style lang="scss" scoped>
.base-layout {
  @include wh(100vw, 100vh);
  overflow: hidden;
  .content {
    background-color: #f7f7f7;
  }
}
</style>
