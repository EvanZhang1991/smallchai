<template>
  <div class="nav-component-container">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="自助机" name="1">
        <div id="dragElement" draggable="true"></div>
      </el-collapse-item>
      <el-collapse-item title="掌上服务大厅" name="2">
      </el-collapse-item>
      <el-collapse-item title="综管平台" name="3">
      </el-collapse-item>
      <el-collapse-item title="其他" name="4">
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-component-container{
    width: 300px;
    #dragElement {
      width: 50px;
      height: 50px;
      background: red;
    }
  
}
</style>