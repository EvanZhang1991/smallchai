<template>
    <div class="application-list-page-container">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card>1</el-card>
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

<script>
export default {

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