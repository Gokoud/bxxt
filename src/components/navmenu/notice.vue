<template>
    <div id="container">
        <el-container>
            <el-header class="header hidden-sm-and-down">
                <div class="h2">维修公告</div>
                <!--面包屑导航-->
                <div class="breadcrumb ">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path:'/notice' }">公告通知</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <!--指南选项-->
            <el-tabs  class="tab hidden-sm-and-down" :tab-position="tabPosition" v-model="activeName"  @tab-click="handleClick" >
                <h1  class="title-header ">这是一个标题</h1>
                <el-tab-pane :span="24" :offset="0" label="维修公告" name="1"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dignissimos dolor ea error, inventore iusto necessitatibus officia officiis quasi, saepe sapiente sint. Eos excepturi expedita inventore odio provident voluptatibus.</p></el-tab-pane>
                <el-tab-pane :span="24" :offset="0" label="维修公告" name="2"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cupiditate deserunt dolor dolorem eveniet id illo laudantium sunt velit voluptate! Deserunt eum, ex fugit nostrum numquam placeat ullam ut voluptatum.</p></el-tab-pane>
                <el-tab-pane :span="24" :offset="0" label="维修公告" name="3"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis cumque minus porro quod repellat, reprehenderit suscipit. Accusantium error iure quidem repudiandae? Accusantium culpa in, minima nam officiis reprehenderit voluptatem.</p></el-tab-pane>
                <el-tab-pane :span="24" :offset="0" label="维修公告" name="4"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet asperiores, atque dignissimos est facere iure placeat quod temporibus! Aspernatur beatae cupiditate, excepturi molestiae rem sapiente sed sequi velit?</p></el-tab-pane>
            </el-tabs>
            <!--sm尺寸-->
            <el-tabs  class="phone-tab hidden-md-and-up  "  v-model="activeName"  @tab-click="handleClick" >
                <h1  class="title-header ">这是一个标题</h1>
                <el-tab-pane  label="维修公告" name="1"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dignissimos dolor ea error, inventore iusto necessitatibus officia officiis quasi, saepe sapiente sint. Eos excepturi expedita inventore odio provident voluptatibus.</p></el-tab-pane>
                <el-tab-pane  label="维修公告" name="2"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, cupiditate deserunt dolor dolorem eveniet id illo laudantium sunt velit voluptate! Deserunt eum, ex fugit nostrum numquam placeat ullam ut voluptatum.</p></el-tab-pane>
                <el-tab-pane  label="维修公告" name="3"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem corporis cumque minus porro quod repellat, reprehenderit suscipit. Accusantium error iure quidem repudiandae? Accusantium culpa in, minima nam officiis reprehenderit voluptatem.</p></el-tab-pane>
                <el-tab-pane  label="维修公告" name="4"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet asperiores, atque dignissimos est facere iure placeat quod temporibus! Aspernatur beatae cupiditate, excepturi molestiae rem sapiente sed sequi velit?</p></el-tab-pane>
            </el-tabs>
        </el-container>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeName:'1',
                tabPosition:'left',
            };
        },
        methods: {
            handleClick(tab,event) {
            }
        }
    }
</script>

<style lang="scss">
    #container {
        max-width: 1200px;
        margin: 20px auto;
        border: 1px solid #f6f4f0;
        .header {
            display: flex;
            width: 100%;
            height: 20px;
            justify-content: space-between;
            .h2 {
                color: #0075a9;
                border-bottom: 5px double #0075a9 ;
                margin: 10px 0;
                font-size: 1.25rem;
                font-weight: bold;
            }
            .breadcrumb {
                margin: 20px 0;
            }
        }
        .tab {
            display: flex;
            width: 100%;
            height: 700px;
            margin: 0 auto;
            .el-tabs__item:hover {
                background: #0075a9;
                color: #ffffff;
            }
            .el-tabs__item.is-active{
                background: #0075a9;
                color: #ffffff;
            }
            .el-tabs__active-bar{
                background-color:#0075a9 ;
            }
            .title-header {
                font-weight: bold;
                text-align: center;
            }
            p {
                margin: 100px;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .el-container {
            width: 100%;
            margin: 0;
            .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
                padding-left: 20px;
            }
            .el-tabs--top .el-tabs__item.is-top:last-child {
                padding-right: 20px;
            }
            .phone-tab {
                width: 100%;
                .title-header{
                    text-align: center;
                }
                height: 500px;
                p {
                    margin: 20px 5px;
                }
                .el-tabs__item:hover {
                    background: #0075a9;
                    color: #ffffff;
                }
                .el-tabs__item.is-active{
                    background: #0075a9;
                    color: #ffffff;
                }
                .el-tabs__active-bar{
                    background-color:#0075a9 ;
                }
            }
        }
    }
</style>