<template>
  <div class="work-bench">
    <el-row  :gutter="50">
      <el-col :span="12">
        <h1 class="title">河南贝程教育</h1>
      </el-col>
    </el-row>
    <el-row  :gutter="50">
      <el-col :span="12">
        <h2 class="samll-title">快捷验券</h2>
        <el-input placeholder="请输入内容">
          <el-button slot="append" type="primary">验证</el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <h2 class="samll-title">常用功能</h2>
        <div class="server-group">
          <router-link to="/hoem">
            <img src="https://p1.meituan.net/dpmerchantpic/6cc4adc31881aacaefc519babb1bb77a3724.png%40200w_200h_1e_1l%7Cwatermark%3D0" />
            <span>我的推广</span>
          </router-link>
          <router-link to="/hoem">
            <img src="https://p0.meituan.net/dpmerchantpic/1cf50673ddc83665820ddebfd042d3f83573.png%40200w_200h_1e_1l%7Cwatermark%3D0" />
            <span>评价管理</span>
          </router-link>
          <router-link to="/hoem">
            <img src="https://p0.meituan.net/dpmerchantpic/1b39333c7acccef36a283e615c3eac7b4417.png%40200w_200h_1e_1l%7Cwatermark%3D0" />
            <span>财务账单</span>
          </router-link>
          <router-link to="/hoem">
            <img src="https://p1.meituan.net/dpmerchantpic/f7d2871abe9d3d2adf122ee4fab085d35908.png%40200w_200h_1e_1l%7Cwatermark%3D0" />
            <span>消费数据</span>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'work-bench'
}
</script>

<style lang="scss" scoped>
.work-bench {
  background: url(https://awp-assets.meituan.net/dianpingbmw/merchant-workbench/img/head-bg.a0c46567.png) 50% no-repeat;
  background-size: cover;
  padding: 25px;
  padding-bottom: 50px;
  .title {
    font-size: 24px;
    color: #fff;
    padding: 15px 0 25px;
    line-height: 44px;
  }
  .samll-title {
    font-size: 14px;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .server-group {
    @include flex(row);
    a {
      @include wh(69px, 69px);
      @include flex(column, center, center);
      margin-right: 10px;
      img {
        @include wh(28px, 28px);
        margin-bottom: 10px;
      }
      font-size: 12px;
      color: #fff;
      text-decoration: none;
    }
  }
  /deep/ .el-input__inner {
    height: 60px;
    line-height: 60px;
  }
}
</style>
