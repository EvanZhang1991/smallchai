<template>
  <div class="index-page-container">
    <el-container>
      <chai-header></chai-header>
    </el-container>
    <el-container>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import ChaiHeader from '@/components/ChaiHeader.vue'
</script>

<style>

</style>