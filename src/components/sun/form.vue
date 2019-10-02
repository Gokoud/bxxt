<template>
  <div id="formbx">
    <h2>报修信息</h2>
    <span></span>
    <el-form
            :label-position="'top'"
            label-width="auto"
            :model="formdata"
            :rules="rules"
            ref="formdata"
            class="form"
    >
      <el-form-item id="network" label="网络环境" prop="network">
        <el-select v-model="formdata.network" placeholder="请选择网络环境">
          <el-option label="有线连接" value="有线连接"></el-option>
          <el-option label="无线Young" value="无线Young"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item id="young" label="请问您宿舍的其他手机电脑用wifi能否正常上网？" prop="young" v-if="formdata.network=='无线Young'">
        <el-select v-model="formdata.young" placeholder="请选择能否正常使用">
          <el-option label value="正常"></el-option>
          <el-option label value="无法使用"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item id="port" label="请选择端口状态图：" prop="port" v-if="formdata.network=='有线连接'">
        <el-radio-group v-model="formdata.port">
          <el-radio label="正常"></el-radio>
          <el-radio label="红"></el-radio>
          <el-radio label="黄"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item id="test" label="请使用您的网口连接您舍友电脑进行测试，能否进行上网：" prop="test" v-if="formdata.port=='红'||formdata.port=='黄'">
        <el-select v-model="formdata.test" placeholder="请选择测试结果">
          <el-option label value="正常"></el-option>
          <el-option label value="异常"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item id="portinfo" label="端口状态详情" prop="portinfo" v-if="formdata.test=='异常'">
        <el-select v-model="formdata.portinfo" placeholder="请选择端口状态">
          <el-option label value="红"></el-option>
          <el-option label value="黄"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item id="errcode" label="错误代码" prop="errcode" v-if="formdata.young=='正常'||formdata.port=='正常'||formdata.portinfo=='黄'">
        <el-select v-model="formdata.errcode" placeholder="请选择错误代码">
          <el-option label value="1xx"></el-option>
          <el-option label value="其它错误"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item id="portnum" label="请根据下面图示输入网口编号的信息" prop="portnum" v-if="formdata.errcode=='1xx'||formdata.portinfo=='红'">
        <img src="" alt="提示图">
        <el-input v-model.number="formdata.portnum"></el-input>
      </el-form-item>
      <el-form-item id="desc" label="其它信息" prop="desc" v-if="formdata.young=='无法使用'">
        <el-input type="textarea" v-model="formdata.desc"></el-input>
      </el-form-item>
      <el-form-item id="norange" v-if="formdata.errcode=='其它错误'||formdata.test=='正常'">
        <p style="color:#0075a9;font-size:20px;">抱歉，该维修不在范围内!</p>
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
                    this.formdata.portnum.toString().length < 3 || this.formdata.portnum.toString().length > 6
                ) {
                    callback(new Error("字符长度应在3~6之间"));
                } else {
                    callback();
                }
            };
            return {
                hidden: ['young','port','test','portinfo','portmodule','errcode','portnum','desc','norange'], //存放需隐藏的表单项
                formdata: {
                    network: '', //网络环境："有线连接"or"无线Young"
                    young: '', //Young wifi下其他设备能否使用："正常"or"无法使用"
                    port: '', //有线端口状态："正常"or"红"or"黄"
                    test: '', //有线更换舍友电脑的测试结果："正常"or"异常"
                    portinfo: '', //端口状态详情："红"or"黄"
                    errcode: '', //错误码："1xx"or"其它错误"
                    portnum: '', //端口号："A51"
                    desc: '' //其它信息："字符串"
                },
                rules: {
                    portnum: [{ required: true, validator: validateNumber, trigger: "blur" }],
                    network: [{ required: true, message: '请选择'}],
                    young: [{ required: true, message: '请选择'}],
                    port: [{ required: true, message: '请选择'}],
                    test: [{ required: true, message: '请选择'}],
                    portinfo: [{ required: true, message: '请选择'}],
                    errcode: [{ required: true, message: '请选择'}],
                    desc: [{ required: true, message: "请填写错误详情", trigger: "blur" }]
                }
            };
        },
        updated(){  //生命周期函数：更新后
            for(var i=0;i<this.hidden.length;i++){
                this.check(this.hidden[i]);
            }
        },
        methods: {
            // 将v-if隐藏的表单项的数据值清空，即可隐藏之前显示的表单项，避免表单项错误重复显示
            check(id){
                if(!document.getElementById(id)){
                    this.formdata[id]='';
                    //注：不能写this.formdata.id=''，这样js会把id作为一个新的属性值，而不是匹配
                }
            },
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        alert("提交成功");
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