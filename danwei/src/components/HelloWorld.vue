<template>
  <div class="hello">
    <div class="header">
      <h1>单位体制内管理系统</h1>
    </div>
    <div class="Login">
      <div class="top">
        <h3>登录</h3>
      </div>
      <el-form
        :model="rulesForm"
        status-icon
        :rules="rules"
        ref="rulesForm"
        label-width="60px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="count">
          <el-input v-model.number="rulesForm.count"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" autocomplete="off" v-model.number="rulesForm.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('rulesForm')">提交</el-button>
          <el-button @click="resetForm('rulesForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue" ;
import Component from "vue-class-component";
import { Loading } from "element-ui";

@Component
export default class Hello extends Vue {
    name:string= "HelloWorld";
     CountValid = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.rulesForm.count !== "") {
          if (!Number(value)) {
            callback(new Error("请输入数字值"));
          }
          callback();
        }
        callback();
      }
    };
      PassWordValid = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (!Number(value)) {
          callback(new Error("请输入数字值"));
        }
        callback();
      }
    };

    rulesForm ={
        count:null,
        password: null
      };
      //定义规则
      rules= {
        count: [
          { validator: this.CountValid, trigger: "blur" } //定义规则
        ],
        password: [
          { validator: this.PassWordValid, trigger: "blur" } //定义规则
        ]
      };
          mounted () {}
            resetForm(resetForm:string):any {
                let ss:any= this;
                ss.$refs[resetForm].resetFields();
              }

        submitForm(formName) {
          let ss:any =this;
                ss.$refs[formName].validate(valid => {
                  if (valid) {
                    if (this.rulesForm.count === 666666 ||this.rulesForm.password === 666666) {
                      let LoadingLogin = Loading.service({
                        lock: true,
                        text: "登录成功请稍等",
                        spinner: "el-icon-loading",
                        background: "rgba(0, 0, 0, 0.7)"
                      });
                      setTimeout(() => {
                        this.$router.push({ path: "/Houtai" }); //页面跳转
                        LoadingLogin.close(); //loading 关闭
                      }, 2000);
                    }
                  } else {
                    console.log("error submit!!");
                    return false;
                  }
                });
              };
      };
</script>

<style scoped lang="less">
.hello {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background: url(../assets/timg2.jpg) no-repeat;
  background-size: 100%;
}
.header {
  text-align: center;
  padding-top: 16vh;
  h1 {
    letter-spacing: 20px;
    color: green;
  }
}
.Login {
  margin-top: 10vh;
  float: right;
  border: 1px solid pink;
  width: 400px;
  // height: 400px;
  border-radius: 20px;
  margin-right: 180px;
  background: rgba(255, 255, 255, 0.5);
  padding: 20px;
  padding-right: 40px;
  box-sizing: border-box;
  .top {
    text-align: center;
    margin-bottom: 20px;
    .el-input {
      width: 80%;
      margin-top: 20px;
    }

    .el-button {
      margin-top: 20px;
    }
  }
  h5 {
    margin-top: 20px;
    text-align: center;
    color: red;
  }
}
</style>
