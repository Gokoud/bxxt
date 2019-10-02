<template>
    <div id="container">
        <!--公告通知-->
        <div style="height: 700px;" >
            <div class="l_title">公告通知</div>
            <div class="repair-notice">
                <span>维修公告</span>
                <span>维修公告</span>
                <span>维修公告</span>
                <span>维修公告</span>
                <span>维修公告</span>
                <span>维修公告</span>
                <span>维修公告</span>
                <span>维修公告</span>
            </div>
        </div>
        <!--内容部分-->
        <div class="content" >
            <h1>标题</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur deleniti ducimus eaque eos incidunt nesciunt nulla reprehenderit saepe sint velit. At, dignissimos, rem. Aliquid architecto asperiores ipsum minima quam sint!</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "notice"
    }
</script>

<style lang="scss" scoped>
    #container {
        display: flex;
        flex-wrap: wrap;
    }
    .l_title {
        width: 200px;
        line-height: 50px;
        text-align: center;
        font-weight: bold;
        font-size: 1.25em;
        color: #0075a9;
    }
    .repair-notice {
        display: flex;
        flex-direction:column;
        padding: 10px;
        span{
            display: block;
            height: 50px;
            line-height: 50px;
            text-align: center;
            cursor: Pointer;
        }
        span:hover {
            background: #0075a9;
            color: #ffffff;
        }
    }
    .content {
        margin: 0 auto;
        width: 900px;
        height: 800px;
        text-align: center;
    }
    @media screen and (max-width: 768px){
        .repair-notice {
            flex-direction: row;
        }
    }
</style>