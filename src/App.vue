<template>
  <div id="app">
    <!-- 顶部header区域 -->
    <el-row>
      <el-col :span="24">
        <div class="header">
          <p>广东青年职业学院网络数据中心</p>
          <p>
            <a href="#">登录</a>|
            <a href="#">注册</a>&nbsp;&nbsp;
            <a href="#">管理员登录</a>
          </p>
        </div>
        </el-col>
    </el-row>
    <!-- 导航栏 -->
    <el-row :gutter="0">
      <el-col :xs="{span:24,offset:0}" :sm="{span:8,offset:2}"><img src="./assets/images/gqing.png" alt=""></el-col>
      <el-col :xs="{span:24,offset:0}" :sm="{span:11,offset:3}">
        <div class="nav">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1"><router-link to="/home">首页</router-link></el-menu-item>
            <el-menu-item index="2"><a>公告通知</a></el-menu-item>
            <el-menu-item index="3"><a>保修大厅</a></el-menu-item>
            <el-menu-item index="4"><a>帮助中心</a></el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
    <!-- banner -->
    <el-row>
      <el-col :span="24"><div class="top"></div></el-col>
      <el-col class="banner-top" :span="24"><div class="banner"></div></el-col>
      <el-col class="bar" :span="24"><p>广东青年职业学院|网络数据中心服务平台为你提供优质的服务</p></el-col>
    </el-row>

    <!-- 中间路由展示区域 -->
    <router-view></router-view>
    
    <!-- 底部footer区域 -->
    <el-row>
      <el-col :span="24">
        <div class="footer">
            <ul>
              <li><a href="#">友情链接</a>|</li>
              <li><a href="#">友情链接</a>|</li>
              <li><a href="#">友情链接</a>|</li>
              <li><a href="#">友情链接</a>|</li>
              <li><a href="#">友情链接</a></li>
            </ul>
            <p>Copyright ©2019 by 广东青年职业学院</p>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect() {}
  }
};
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
a{
  color: black;
  text-decoration: none;
}
img{
  width: 100%;
  height: 100%;
}

.header{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding-left: 4%;
  padding-right: 4%;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  height: 20px;
  line-height: 20px;
  color: #909399;
}
.nav{
  margin-bottom: 2px; 
  width:100%;
  ul{
    li{
      margin-right:-10px;
    }
  }
}
.el-menu.el-menu--horizontal {
    border-bottom:none !important;
    display:flex;
     flex-flow:nowrap;
}
.top{
  background: url(./assets/images/top.jpg) 50% 50% / cover no-repeat;
  width: 100%;
  height: 46px;
}
.banner-top{
  margin-top: -4px;
}
.banner{
  background: url(./assets/images/banner.jpg) 50% 70% / cover no-repeat;
  width: 100%;
  height: 280px;
  transform: scale(1);
}
.bar{
  background-color: #eee;
  font-size: 12px;
  height: 26px;
  line-height: 26px;
  margin-top: -4px;
  padding-left: 4%;
  color: #909399;
}
.footer{
  width: 100%;
  height: 60px;
  background-color: #0075a9;
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  font-size:14px;
  color:#fff;
  ul{
    margin:0 auto;
    li{
      float:left;
      list-style:none;
      a{
        margin:4px;
        color:#fff;
      }
  }
  } 
  p{
    margin-top:4px;
  }
}

</style>
