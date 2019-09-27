<template>
  <div id="formbx">
    <h2>报修信息</h2>
    <span></span>
    <el-form
      :label-position="'right'"
      label-width="auto"
      :model="formdata"
      :rules="rules"
      ref="formdata"
      class="form"
    >
      <el-form-item label="网络环境" prop="network">
        <el-select v-model="formdata.network" placeholder="请选择网络环境">
          <el-option label="有线连接" value="有线连接"></el-option>
          <el-option label="无线Young" value="无线Young"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="其它设备" prop="young">
        <el-select v-model="formdata.young" placeholder="请选择能否正常使用">
          <el-option label value="正常"></el-option>
          <el-option label value="无法使用"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="端口状态" prop="port">
        <el-select v-model="formdata.port" placeholder="请选择端口状态">
          <el-option label value="正常"></el-option>
          <el-option label value="错误(红/黄)"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="更换电脑测试" prop="test">
        <el-select v-model="formdata.test" placeholder="请选择测试结果">
          <el-option label value="正常"></el-option>
          <el-option label value="异常"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="端口状态详情" prop="portinfo">
        <el-select v-model="formdata.portinfo" placeholder="请选择端口状态">
          <el-option label value="红"></el-option>
          <el-option label value="黄"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="端口模块情况" prop="portmoudle">
        <el-select v-model="formdata.portmoudle" placeholder="请选择端口模块情况">
          <el-option label value="模块1"></el-option>
          <el-option label value="模块2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="错误信息" prop="errcode">
        <el-select v-model="formdata.errcode" placeholder="请选择错误代码">
          <el-option label value="1xx"></el-option>
          <el-option label value="其它错误"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="端口编号" prop="portnum">
        <el-input v-model.number="formdata.portnum"></el-input>
      </el-form-item>
      <el-form-item label="其他错误信息" prop="desc">
        <el-input type="textarea" v-model="formdata.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formdata')">提交</el-button>
        <el-button @click="resetForm('formdata')">重置</el-button>
      </el-form-item>
    </el-form>
   
  </div>
</template>

<script>
export default {
  data() {
    // 自定义验证规则,需放return前面
    var validateNumber = (rule, value, callback) => {
      if (this.formdata.portnum === "") {
        callback(new Error("请输入端口号"));
      } else if (
        this.formdata.portnum.toString().length < 3 || this.formdata.portnum.toString().length > 8
      ) {
        callback(new Error("字符长度应在3~8之间"));
      } else {
        callback();
      }
    };
    return {
      formdata: {
        network: '', //网络环境
        young: '', //Young wifi下其他设备能否使用
        port: '', //有线端口状态
        test: '', //有线更换电脑的测试结果
        portinfo: '', //端口状态详情
        portmodule: '', //端口模块情况
        errcode: '', //错误码
        portnum: '', //端口号
        desc: '' //其他错误信息
      },
      rules: {
        portnum: [{ required: true, validator: validateNumber, trigger: "blur" }],
        desc: [{ required: true, message: "请填写错误详情", trigger: "blur" }]
      }
    };   
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.$refs[formName].resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
#formbx {
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    color: #0739a9;
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
  }
  .form {
    margin: 0 auto;
    max-width: 320px;
  }
}
</style>