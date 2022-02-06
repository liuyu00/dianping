<template>
  <div>
    <work-bench />
    <el-row :gutter="20">
      <el-col :span="12">
        <operation-staff />
      </el-col>
      <el-col :span="12">
        <operation-staff />
      </el-col>
      <el-col :span="12">
        <operation-staff />
      </el-col>
      <el-col :span="12">
        <operation-staff />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import WorkBench from './components/WorkBench.vue'
import OperationStaff from './components/OperationStaff.vue'
export default {
  name: 'home',
  components: {
    WorkBench,
    OperationStaff
  }
}
</script>

<style lang="scss" scoped>

</style>
