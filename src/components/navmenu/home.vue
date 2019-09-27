<template>
  <div id="container">
    <el-row :gutter="40">
      <!-- 报修通道 -->
      <el-col :xs="{span:24,offset:0}" :sm="{span:9,offset:0}">
        <div class="left">
          <div class="baoxiu">
            <p>
              <span>
                <img src="../../assets/images/bxtd.png" alt />
              </span>报修通道
            </p>
            <el-button type="primary" @click="goform()">我要报修</el-button>
          </div>

          <div class="phone">
            <p>
              <span>
                <img src="../../assets/images/phone.png" alt />
              </span>服务电话
            </p>
            <ul>
              <li>
                维修中心电话
                <span>123456789</span>
              </li>
              <li>
                维修中心电话
                <span>123456789</span>
              </li>
              <li>
                维修中心电话
                <span>123456789</span>
              </li>
              <li>
                维修中心电话
                <span>123456789</span>
              </li>
              <li>
                维修中心电话
                <span>123456789</span>
              </li>
              <li>
                维修中心电话
                <span>123456789</span>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
      <!-- 公告通知 -->
      <el-col :xs="{span:24,offset:0}" :sm="{span:15,offset:0}">
        <div class="right">
          <p>
            <span>
              <img src="../../assets/images/bxlist.png" alt />
            </span>公告通知
            <a href="#">更多&gt;&gt;</a>
          </p>
          <div class="info">
            <div class="biaoti">
              <h3>标题</h3>
              <h3>日期</h3>
            </div>
            <hr size="2px" color="#0075a9" />
            <div class="news">
              <p>这是一条新的公告通知...</p>
              <p class="date">09-18</p>
            </div>
            <div class="news">
              <p>这是一条新的公告通知...</p>
              <p class="date">09-18</p>
            </div>
            <div class="news">
              <p>这是一条新的公告通知...</p>
              <p class="date">09-18</p>
            </div>
            <div class="news">
              <p>这是一条新的公告通知...</p>
              <p class="date">09-18</p>
            </div>
            <div class="news">
              <p>这是一条新的公告通知...</p>
              <p class="date">09-18</p>
            </div>
            <div class="news">
              <p>这是一条新的公告通知...</p>
              <p class="date">09-18</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 报修列表 -->
    <el-row>
      <el-col :span="24" :offset="0" :xs="{span:24,offset:0}">
        <div class="bx-list">
          <p>
            <span>
              <img src="../../assets/images/pepo.png" alt />
            </span>日常报修
            <a href="#">更多&gt;&gt;</a>
          </p>
          <!-- 列表组件 -->
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="报修编号" width="100" fixed></el-table-column>
            <el-table-column prop="desc" label="报修内容" width="400"></el-table-column>
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="name" label="报修人"></el-table-column>
            <el-table-column prop="state" label="状态" fixed="right"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

    <!-- echart统计图 -->
    <el-row>
      <el-col :span="24" :offset="0" :xs="{span:24,offset:0}" @open="open()">
        <div class="echart">
          <p>
            <span>
              <img src="../../assets/images/bxlist.png" alt />
            </span>维修统计
          </p>
          <h2>2019-2020学年数据统计</h2>
        </div>
        <div id="chartmain" style="width:100%;height:400px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          desc: "漏水漏电",
          date: "2019-09-18",
          name: "小白",
          state: "待处理"
        },
        {
          id: 1,
          desc: "漏水漏电",
          date: "2019-09-18",
          name: "小白",
          state: "待处理"
        },
        {
          id: 1,
          desc: "漏水漏电",
          date: "2019-09-18",
          name: "小白",
          state: "待处理"
        },
        {
          id: 1,
          desc: "漏水漏电",
          date: "2019-09-18",
          name: "小白",
          state: "待处理"
        },
        {
          id: 1,
          desc: "漏水漏电",
          date: "2019-09-18",
          name: "小白",
          state: "待处理"
        },
        {
          id: 1,
          desc: "漏水漏电",
          date: "2019-09-18",
          name: "小白",
          state: "待处理"
        },
        {
          id: 1,
          desc: "漏水漏电",
          date: "2019-09-18",
          name: "小白",
          state: "待处理"
        },
        {
          id: 1,
          desc: "漏水漏电",
          date: "2019-09-18",
          name: "小白",
          state: "待处理"
        }
      ]
    };
  },
  mounted() {
    this.drawEchart();
  },
  methods: {
    //解决在elementui布局中使用echarts统计图不显示问题，elementui中dialog组件是懒渲染的，要在open事件里面初始化echarts
    open() {
      const t = this;
      setTimeout(() => {
        //  执行echarts画图方法
        t.drawLine();
      }, 0);
    },
    //echart统计图
    drawEchart() {
      var option = {
        title: {
          text: "",
          subtext: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["物业管理中心", "生活服务中心"]
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { show: false, type: ["line", "bar"] },
            restore: { show: false },
            saveAsImage: { show: false }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "物业管理中心",
            type: "bar",
            data: [2, 4, 7, 23, 25, 76, 35, 62, 32, 20, 6, 3],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "生活服务中心",
            type: "bar",
            data: [2, 5, 9, 26, 28, 70, 75, 82, 48, 18, 6, 2],
            // markPoint: {
            //   data: [
            //     { name: "年最高", value: 82, xAxis: 7, yAxis: 83 },
            //     { name: "年最低", value: 2, xAxis: 11, yAxis: 3 }
            //   ]
            // },
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      };
      var myChart = this.$echarts.init(document.getElementById("chartmain"));
      myChart.setOption(option);
      // 窗口大小改变立马重新渲染自适应
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    //路由跳转formbx表单
    goform() {
      this.$router.push({ name: "form" });
    }
  }
};
</script>

<style lang="scss" scoped>
#container {
  margin: 0 auto;
  max-width: 1200px;
}
p {
  span {
    display: inline-block;
    vertical-align: middle;
    width: 28px;
    height: 28px;
    margin: 10px;
    margin-top: 4px;
  }
}
.left {
  margin-top: 10px;
  margin-bottom: 30px;
  .baoxiu {
    text-align: center;
    p {
      text-align: left;
      background-color: #eee;
      font-size: 20px;
      line-height: 40px;
      height: 40px;
      color: #0075a9;
    }
    button {
      width: 220px;
      height: 50px;
      background-color: #0075a9;
      margin: 10px;
      font-size: 20px;
    }
  }
  .phone {
    background-color: #eee;
    font-size: 20px;
    line-height: 40px;
    height: 40px;
    p {
      color: #0075a9;
    }
    ul {
      float: left;
      text-align: center;
      li {
        font-size: 14px;
        list-style: none;
        float: left;
        padding-left: 10px;
        width: 46%;
      }
    }
  }
}
.right {
  margin-top: 10px;
  margin-bottom: 30px;
  p {
    background-color: #eee;
    font-size: 20px;
    line-height: 40px;
    height: 40px;
    color: #0075a9;
    a {
      float: right;
      margin-right: 20px;
      font-size: 14px;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .info {
    .biaoti {
      display: flex;
      justify-content: space-between;
      h3 {
        margin: 6px 50px 6px 50px;
      }
    }
  }
  .news {
    display: flex;
    justify-content: space-between;
    p {
      background-color: #fff;
      color: #383838;
      font-size: 16px;
      padding: 0 20px;
      height: 30px;
    }
    .date {
      font-size: 12px;
      padding: 0;
      margin-right: 40px;
    }
  }
}
.bx-list {
  margin-bottom: 30px;
  p {
    background-color: #eee;
    font-size: 20px;
    line-height: 40px;
    height: 40px;
    color: #0075a9;
    a {
      float: right;
      margin-right: 20px;
      font-size: 14px;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}
.echart {
  p {
    text-align: left;
    background-color: #eee;
    font-size: 20px;
    line-height: 40px;
    height: 40px;
    color: #0075a9;
  }
  h2 {
    width: 100%;
    margin: 16px auto;
    text-align: center;
  }
}
</style>