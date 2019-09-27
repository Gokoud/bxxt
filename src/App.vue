<template>
  <div id="app">
    <!-- 顶部header区域 -->
    <el-row>
      <el-col :span="24">
        <div class="header">
          <p>广东青年职业学院网络数据中心</p>
          <p>
            <router-link to="/login">登录</router-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <!-- 导航栏 -->
    <div class="max-nav">
      <el-row :gutter="0">
        <el-col :xs="{span:24,offset:0}" :sm="{span:8,offset:0}">
          <div class="gqing"></div>
        </el-col>
        <el-col :xs="{span:24,offset:0}" :sm="{span:10,offset:6}">
          <div class="nav">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1">
                <router-link to="/home">首页</router-link>
              </el-menu-item>
              <el-menu-item index="2">
                <router-link to="/notice">公告通知</router-link>
              </el-menu-item>
              <el-menu-item index="3">
                <router-link to="/table">保修大厅</router-link>
              </el-menu-item>
              <el-menu-item index="4">
                <router-link to="/help">帮助中心</router-link>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- banner -->
    <el-row>
      <el-col class="banner-top" :span="24">
        <img class="banner" src="./assets/images/banner.jpg" />
      </el-col>
      <el-col class="bar" :span="24">
        <p>广东青年职业学院|网络数据中心服务平台为你提供优质的服务</p>
      </el-col>
    </el-row>

    <!-- 中间路由展示区域 -->
    <router-view></router-view>

    <!-- 底部footer区域 -->
    <el-row>
      <el-col :span="24">
        <div class="footer">
          <ul>
            <li>
              <a href="#">友情链接</a>|
            </li>
            <li>
              <a href="#">友情链接</a>|
            </li>
            <li>
              <a href="#">友情链接</a>|
            </li>
            <li>
              <a href="#">友情链接</a>|
            </li>
            <li>
              <a href="#">友情链接</a>
            </li>
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

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
a {
  color: black;
  text-decoration: none;
}
img {
  width: 100%;
  height: auto;
}
.gqing{
  width: 100%;
  height: 60px;
  background:url(./assets/images/gqing.jpg) 100% 50% /contain no-repeat scroll ;
}
#app {
  overflow-x: hidden;
  font-family: "微软雅黑";
}
.header {
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
  p {
    a {
      color: #909399;
    }
    a:hover {
      color: black;
    }
  }
}
/*导航栏移动端响应式*/
.max-nav {
  max-width: 1200px;
  margin: 0 auto;
}
.nav {
  margin-bottom: 2px;
  width: 100%;
  ul {
    li {
      width: 24%;
      padding: 0;
      text-align: center;
      a {
        font-size: 1.15em;
      }
    }
  }
}
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
  display: flex;
  flex-flow: nowrap;
}
.banner-top {
  margin-top: -4px;
}
.bar {
  background-color: #eee;
  font-size: 12px;
  line-height: 26px;
  margin-top: -4px;
  padding-left: 4%;
  color: #909399;
}
.footer {
  width: 100%;
  height: 80px;
  background-color: #0075a9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  color: #fff;
  ul {
    margin: 0 auto;
    li {
      float: left;
      list-style: none;
      a {
        margin: 4px;
        color: #fff;
      }
    }
  }
  p {
    margin-top: 4px;
  }
}
</style>
