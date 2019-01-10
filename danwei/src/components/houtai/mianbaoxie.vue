<template>
    <div class="Gaojing">
        <!-- 顶部二级导航 -->
        <div class="TopMenu">
            <i class="el-icon-setting"></i>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/houtai' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>
</template>
<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Mianbaoxie extends Vue {
    
}
</script>

<style lang="less" scope="scope">
//   @import '../../style/public.less';
 
    .Gaojing{
        width: 100%;
        // background: yellow;
        .TopMenu{
            
            width: 100%;
            height: 20px;
            // background: red;
            border: 2px soild gray;
            .el-icon-setting{
                font-size: 20px;
            }
            .el-breadcrumb{
                display: inline-block;
            }
        }
    }
</style>