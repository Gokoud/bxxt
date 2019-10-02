<template>
  <div id="container">
    <!--头部横栏-->
    <el-row>
      <el-col :xs="{span:24}">
        <div class="block_top">
          <span>维修单据</span>
        </div>
      </el-col>
    </el-row>

    <!--保修列表-->
    <el-row :gutter="50">
      <el-col :xs="{span:24}" :sm="{span:4,offset:0}">
        <div class="side_item">
          <div class="search-box">
            <el-input
              class="input-box"
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input_1"
            ></el-input>
            <el-input
              class="input-box"
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="input_2"
            ></el-input>
            <el-select v-model="dorm4" clearable placeholder="报修类型">
              <el-option v-for="item in types" :key="item.id" :label="item.type" :value="item.id"></el-option>
            </el-select>
          </div>
        </div>
      </el-col>

      <!-- 报修通道 -->
      <el-col :xs="{span:24,offset:0}" :sm="{span:20,offset:0}">
        <div>
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column fixed prop="stuId" label="学号" width="120" ></el-table-column>
            <el-table-column prop="causal" label="报修原因" width="350"></el-table-column>
            <el-table-column prop="time" label="报修时间" min-width="100"></el-table-column>
            <el-table-column prop="name" label="维修处理人" min-width="100"></el-table-column>
            <el-table-column fixed="right" prop="status" label="报修状态"></el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
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
  data() {
    return {
      tableData: [
        {
          stuId: "17050600123",
          causal: "网络连接错误",
          time: "2016-05-02",
          name: "李四",
          status: "待维修"
        },
        {
          stuId: "17050600123",
          causal: "网络连接错误",
          time: "2016-05-02",
          name: "张三",
          status: "待维修"
        },
        {
          stuId: "17050600123",
          causal: "网络连接错误",
          time: "2016-05-02",
          name: "王五",
          status: "待维修"
        },
        {
          stuId: "17050600123",
          causal: "网络连接错误",
          time: "2016-05-02",
          name: "翠花",
          status: "待维修"
        }
      ],
      input_1: "",
      input_2: "",
      types: [{ id: "1", type: "网络" }, { id: "2", type: "电话" }],
      dorm4: ""
    };
  }
};
</script>
<style lang="scss" scoped>
#container{
  margin: 0 auto;
  max-width: 1200px;
}
  .block_top {
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 2px solid #0075a9;
    span {
      color: #0075a9;
      font-weight: bold;
    }
  }
.page {
  margin: 10px auto;
}
  @media screen and (max-width: 768px){
    .search-box {
      display: flex;
      margin: 10px 0;
      .el-input {
        height: 20px;
        width: 100px;
        margin-left: 10px;
      }
      .el-select {
        margin:0 10px
      }
    }
  }
.el-pagination {
  white-space: nowrap;
  width: 280px;
  margin: 0 auto;
  color: #303133;
  font-weight: 700;
}
</style>