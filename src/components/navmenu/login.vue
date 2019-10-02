<template>
    <el-row>
    <div class="cont ">
        <div class="l_c hidden-xs-only">
            <img src="../../assets/images/show.jpg" alt="展示图">
        </div>
        <div class="r_c">
            <div class="login">
                <div class="r_head"></div>
                <div class="r_main">
                    <div>
                        <input  name="username_1" type="text" class="input_name" placeholder="请输入用户名">
                    </div>
                    <div>
                        <input name="password" type="text" class="input_psw" placeholder="请输入密码">
                    </div>
                    <p></p>
                    <a class="button" href="#"></a>
                </div>
            </div>
        </div>
    </div>
    </el-row>
</template>


<script>
</script>

<style lang="scss" scoped>
    /*标签*/
    * {
        border: 0 none;
        margin: 0;
        padding: 0;
        font-size: 100%;
    }

    #container {
        max-width: 1200px;
        margin: 0 auto;
    }

    input {
        width: 200px;
        height: 50px;
        line-height: 50px;
        padding: 0 0 0 48px;
        outline: none;
        cursor: text;
    }

    /*class*/
    .cont {
        width: 1000px;
        margin: 20px auto ;
    }
    /*左边图片*/
    .l_c {
        float: left;
        padding: 8px 0 0 0;
    img {
        border-radius: 8px;
        box-shadow: 0 0 8px black;
    }
    }

    /*login部分*/
    .r_c {
        float: right;
        width: 324px;
        height: 404px;
        background: url(../../assets/images/dl_bg.jpg) 0 0 no-repeat;
    }

    .login {
        margin: 8px;
        float: right;
        width: 305px;
        height: 385px;
        background: #ffffff;
        border:1px solid #023a62;
        .r_head {
            background: url(../../assets/images/dl_li.png) 0 0 no-repeat;
            height: 63px;
            border-bottom: 1px solid #023a62;
        }
        .r_main {
            width: 230px;
            margin: 50px auto;
            div {
                margin-bottom: 10px;
            }
            .input_name {
                background: url(../../assets/images/dl_li.png) -37px -122px no-repeat;
            }
            .input_psw {
                background: url(../../assets/images/dl_li.png) -37px -180px no-repeat;
            }
            p {
                margin: 0 0 35px 0;
                padding: 0 0 0 34px;
            }
            .button {
                background: url(../../assets/images/dl_li.png) -37px -306px no-repeat;
                display:  inline-block;
                width: 234px;
                height: 48px;
            }
        }
    }
    /*响应式*/
    @media screen and (max-width:768px) {
        .cont {
            width: 324px;
            margin: 20px auto;
        }
        .r_c {
            display: block;
            margin:0 auto;
            float: none;
        }
    }
</style>