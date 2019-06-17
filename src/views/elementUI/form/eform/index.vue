<template>
<div>
  <el-form :model="numberValidateForm" :rules="rules" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
    <el-form-item
      label="年龄"
      prop="age"
    >
      <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
      <el-button @click="resetForm('numberValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
    export default {
        name: "index",
      data() {
        const validateAcquaintance = (rule, value, callback) => {
          if (value < 0 || value > 100) {
            callback(new Error('熟悉程度在 0 至 100 之间'))
          } else {
            callback()
          }
        }

        return {
          numberValidateForm: {
            age: ''
          },
          rules: {
            age:[
              { required: true, message: '年龄不能为空',trigger: 'blur'},
              { type: 'number', message: '年龄必须为数字值'},
              {
                validator: validateAcquaintance, // 自定义验证
                trigger: 'blur'
              }]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
