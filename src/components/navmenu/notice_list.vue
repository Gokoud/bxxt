<template>
    <div id="container">
        <!--公告通知-->
        <div  class="notice">
            <div class="title hidden-xs-only">公告通知</div>
            <span>维修通知</span>
            <span>维修通知</span>
            <span>维修通知</span>
            <span>维修通知</span>
            <span>维修通知</span>
            <span>维修通知</span>
        </div>
        <!--维修通知-->
        <div class="repair_notice">
            <div class="title">维修通知</div>
            <div class="table">
            <ul>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
                <li><a href="">生活就像海洋，只有意志坚强的人才能到达彼岸</a>
                    <p>2019-09-25</p>
                </li>
            </ul>
            </div>
        </div>
        <!--分页组件-->
        <el-row class="page">
            <el-col  :sm="{span:10,offset:8}">
                <el-pagination small background layout="prev ,pager,next" :total="100"></el-pagination>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "notice_list"
    }
</script>

<style lang="scss" scoped>
    #container {
        display: flex;
        max-width: 1200px;
        margin: 10px auto;
        flex-wrap: wrap;
        /*公告通知*/
        .notice {
            display: flex;
            flex-direction: column;
            width: 20%;
            border: 1px solid #b9f6bd;
            span {
                display: block;
                margin: 10px 10px;
                text-align: center;
                background: #b9f6bd;
                color: #0075a9;
                line-height: 50px;
                font-weight: bold;
                cursor: pointer;
            }
            span:hover {
                background: #0075a9;
                color: #ffffff;
            }
        }
        /*维修通知*/
        .repair_notice {
            width: 75%;
            margin-left:20px ;
            border: 1px ;
            .table {

                li:nth-child(even){
                    background: #f8f6f2;
                }
                li:hover{
                    background: #fcfaf6;
                }
                margin:0 30px;
                line-height: 40px;
                p {
                    float: right;
                }
                a {
                    width: 70%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                a:active {
                    color: #0075a9;
                }
            }
        }
        /*分页组件*/
        .page {
            margin: 10px auto;
        }
    }
    .title {
        line-height: 50px;
        color: #0075a9;
        font-weight: bold;
        border-bottom: 3px solid #0075a9;
        background: #f6f4f0;
        padding-left: 20px;
    }
    @media screen and (max-width: 768px) {
        #container {
            margin: 0;
            .notice {
                width: 100%;
                flex-direction: row;
                border: none;
                span {
                    margin:2px;
                    width: 100%;
                    line-height: 30px;
                    font-size: 0.75em;
                }
            }
            .repair_notice {
                margin: 0;
                width: 100%;
                li {
                    display: flex;
                }
            }
        }
    }
</style>