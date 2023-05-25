<template>
    <div class="application-list-page-container">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card @click="handleAddApplication()">1</el-card>
            </el-col>
            <el-col :span="6">
                <el-card>2</el-card>
            </el-col>
            <el-col :span="6">
                <el-card>3</el-card>
            </el-col>
            <el-col :span="6">
                <el-card>4</el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleAddApplication = () => {
    console.log(123)
    router.push({name: 'addapplication' })
}
</script>

<style>
.application-list-page-container {
    width: 100%;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>