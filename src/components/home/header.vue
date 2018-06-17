<template>
    <el-header id="fixed">
            <el-row>
                <el-col :span="13">
                    <div class="log-style">
                        <h2>万里达驾校</h2>
                    </div>
                </el-col>
                <el-col :span="11">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-menu-item index="1">网站首页</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">培训项目</template>
                            <el-menu-item index="2-1">驾驶培训</el-menu-item>
                            <el-menu-item index="2-2">学员须知</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="3">收费标准</el-menu-item>
                        <el-menu-item index="4">在线报名</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>
</template>

<script>
export default {
    props:{
        activeIndex:{
            default:1
        }
    },
    methods:{
        handleSelect(key,item){

        }
    }
}
</script>

<style lang="scss">
#fixed{
    .log-style{
        >h2{
            font-size: 25px;
            color: #0ba1e4;
        }
    }
}
</style>
