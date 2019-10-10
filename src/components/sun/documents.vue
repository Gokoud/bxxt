<template>
    <div id="container">
        <div class="title">
            报修列表 | 报修详情
        </div>
        <!--表单信息-->
        <div class="documents">
            <div class="info">
                <p>基本信息</p>
                <div class="tips">维修委任单位：后勤保障部-修建服务中心-新校区零修队</div>
                <div class="content">
                    <div class="list">
                        <span>维修时间：</span>
                        <span>网络环境：</span>
                        <span>端口状态：</span>
                        <span>WiFi状态：</span>
                        <span>测试结果：</span>
                        <span>状态显示：</span>
                    </div>
                    <div class="left">
                        <div v-for="(item ,name) in items" class="info_l">
                          <span>{{item}}</span>
                        </div>
                    </div>
                    <div class="list">
                        <span>错误码：</span>
                        <span>端口号：</span>
                        <span>学生号码：</span>
                        <span>手机号码：</span>
                        <span>维修地点：</span>
                    </div>
                    <div class="right">
                        <div v-for="item in items_1">
                            {{item}}
                        </div>
                    </div>
                </div>
                <p>维修动态</p>
                <div class="tips" style="line-height: 50px;color: #000000;">2019-09-26    维修单已派工</div>
            </div>
            <div class="button">
                <el-button  @click="open">撤销</el-button>
                <el-button type="primary"  @click="open2">催单</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items : {
                         times:'2019-09-25',//维修时间
                         network:'有线连接',//网络环境
                         port:'正常' ,//有线端口状态
                         young:'正常' ,//wifi下是否正常使用
                         test:'正常' ,//室友电脑测试是否正常
                         portinfo:'红' //端口状态显示
                },
                items_1 : {
                    errcode:'1XX',//错误码
                    portnum:'A54',//端口号
                    stuId:'123456',//学号
                    phone:'13800138000',//手机号码
                    didian:'9-506',//地点
                },
            };
        },
        methods: {
            open() {
                this.$confirm(' 是否需要撤销本次维修？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '撤销成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消撤销'
                    });
                });
            },
            open2() {
                this.$message({
                    showClose: true,
                    message: '催单成功',
                    type: 'success',
                    duration:'800'
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    #container {
        max-width: 1200px;
        margin: 0 auto;
        .title {
            margin: 10px 0;
            padding-left: 40px;
            line-height: 40px;
            background: #0075a9;
            color: #ffffff;
        }
        .documents {
            width: 95%;
            margin: 0 auto;
            padding: 20px 0;
            border: 1px solid #0075a9;
            line-height: 50px;
            .tips {
                width: 95%;
                margin: 10px auto;
                padding-left: 5px;
                color: #00c582;
                line-height: 30px;
                font-size: 0.85em;
                border:1px solid #E6E6E6;
                background: #f6f4f0;
            }
            p {
                padding-left: 20px;
                font-weight: bold;
                font-size: 0.9em;
            }
            .content {
                display: flex;
                width: 90%;
                margin: 0 auto;
                flex-wrap: wrap;
                .left {
                    margin-right: 350px;
                }
                .list {
                    display: flex;
                    flex-direction: column;
                }
                @media screen and (max-width: 768px) {
                    .left {
                        margin-right: 110px;
                    }
                }
            }
        }
        .button {
            width: 150px;
            margin: 0 auto;
        }
    }
</style>