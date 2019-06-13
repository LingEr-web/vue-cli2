<template>
  <div class="app-container">
    <!--文件上传-->
    <div class="uploadfile">
      <input type="file" @change="getExcel($event)">
    </div>
    <!--表单验证-->
     <div>
       <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
         <el-form-item label="年龄" prop="age">
           <el-input v-model.number="ruleForm.age"></el-input>
         </el-form-item>
         <el-form-item>
           <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
         </el-form-item>
       </el-form>
       <el-upload
         class="avatar-uploader"
         action="https://jsonplaceholder.typicode.com/posts/"
         :show-file-list="false"
         :on-success="handleAvatarSuccess"
         :before-upload="beforeAvatarUpload">
         <img v-if="imageUrl" :src="imageUrl" class="avatar">
         <i v-else class="el-icon-plus avatar-uploader-icon"></i>
       </el-upload>
     </div>
    <!--雷达图-->
    <div class="drawRadar">
        <div id="radar"></div>
    </div>


    <div>
      <el-form  label-width="80px" :model="dots">
        <el-form-item label="度">
          <el-input v-model="dots.hour"></el-input>
        </el-form-item>
        <el-form-item label="分">
          <el-input v-model="dots.minture"></el-input>
        </el-form-item>
        <el-form-item label="秒">
          <el-input v-model="dots.second"></el-input>
        </el-form-item>
        <el-button type="success" @click="toDot">提交转换</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {str2Date} from '@/utils/date';
  import XLSX from 'xlsx'
  import jszip from 'jszip'
  const DATA_FROM_BACKEND = {
    columns: ['date', 'orderCount','orderAmount'],
    rows: [
      {date: '2018-11-01', orderCount: 10, orderAmount: 1093},
      {date: '2018-11-02', orderCount: 20, orderAmount: 2230},
      {date: '2018-11-03', orderCount: 33, orderAmount: 3623},
      {date: '2018-11-04', orderCount: 50, orderAmount: 6423},
      {date: '2018-11-05', orderCount: 80, orderAmount: 8492},
      {date: '2018-11-06', orderCount: 60, orderAmount: 6293},
      {date: '2018-11-07', orderCount: 20, orderAmount: 2293},
      {date: '2018-11-08', orderCount: 60, orderAmount: 6293},
      {date: '2018-11-09', orderCount: 50, orderAmount: 5293},
      {date: '2018-11-10', orderCount: 30, orderAmount: 3293},
      {date: '2018-11-11', orderCount: 20, orderAmount: 2293},
      {date: '2018-11-12', orderCount: 80, orderAmount: 8293},
      {date: '2018-11-13', orderCount: 100, orderAmount: 10293},
      {date: '2018-11-14', orderCount: 10, orderAmount: 1293},
      {date: '2018-11-15', orderCount: 40, orderAmount: 4293}
    ]
  };
  export default {
    name: 'home',
    data() {
      var checkAge=(rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入整数值'));
          } else {
            if(value<0 || value>60 ||  obj%1 !== 0){
              callback(new Error('必须为0到60之间的整数'));
            }else {
              callback();
            }
          }
        }, 1000);
      };
      return {
        dots: {
          hour: '',
          minture: '',
          second: ''
        },
        labelPosition: 'right',
        ruleForm: {
          age: ''
        },
        imageUrl: '',
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              let start = new Date();
              start.setFullYear(2018);
              start.setMonth(10);
              start.setDate(1);
              end.setTime(start.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一月',
            onClick(picker) {
              const end = new Date();
              let start = new Date();
              start.setFullYear(2018);
              start.setMonth(10);
              start.setDate(1);
              end.setTime(start.getTime() + 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        orderCountDate: '',
        chartSettings: {
          xAxisType: 'time',
          area:true,
          axisSite: { right: ['orderAmount']},
        labelMap: {'orderCount': '订单数量', 'orderAmount': '订单金额'}},
        chartData: {
          columns: [],
          rows: []
        },
        loading: false,
        dataEmpty: false,
        rules: {
          age: [ { validator: checkAge, trigger: 'blur' }]
        }
      }
    },
    mounted(){
      this.drawLine();
    },
    created(){
      this.initOrderCountDate();
      this.getData();
    },

    methods:{
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.imageUrl)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
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
      handleDateChange(){
        this.getData();
      },
      initOrderCountDate(){
        let start = new Date();
        start.setFullYear(2018);
        start.setMonth(10);
        start.setDate(1);
        const end = new Date();
        end.setTime(start.getTime() + 1000 * 60 * 60 * 24 * 7);
        this.orderCountDate=[start,end];
      },
      getData(){
        setTimeout(() => {
          this.chartData = {
            columns: ['date', 'orderCount','orderAmount'],
            rows: []
          };
          for(let i=0;i<DATA_FROM_BACKEND.rows.length;i++){
            let item=DATA_FROM_BACKEND.rows[i];
            let currDate=str2Date(item.date);
            let start=this.orderCountDate[0];
            let end=this.orderCountDate[1];
            if(currDate.getTime()>=start.getTime()&&currDate.getTime()<=end.getTime()){
              this.chartData.rows.push(item);
            }
          }
          this.dataEmpty = false;
          this.loading = false
        }, 1000)
      },
      getExcel(e){
        var zzexcel,dataobj={};
        if(!e.target.files){return;}
        var file=e.target.files[0];
        var reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function(e) {
          var data = e.target.result;
          zzexcel = XLSX.read(data, {
            type: 'binary'
          });
          for(var i=0;i<zzexcel.SheetNames.length;i++){
            dataobj.name=zzexcel.SheetNames[i];
            dataobj.data=[];
            var datason=XLSX.utils.sheet_to_json(zzexcel.Sheets[zzexcel.SheetNames[i]]);
            console.log(zzexcel.Sheets[zzexcel.SheetNames[i]])
            var rank,clas,front,behind;
            datason.forEach(function (v) {
              rank=v['场次']?v['场次']:rank;
              clas=v['班级']
              front=v['前']
              behind=v['后']
              if(rank===''||clas===''||front===''||behind===''){
                alert('数据结构错误，请补全或规范数据');
                return false
              }
              dataobj.data.push({rank,clas,front,behind})
            })
          }
          console.log(dataobj)
        }
      },

      drawLine(){
        let myChart = this.$echarts.init(document.getElementById('radar'))
        var option = {
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            x: 'center',
            data:['某软件','某主食手机','某水果手机','降水量','蒸发量']
          },
          radar: [
            {
              indicator: [
                {text: '品牌', max: 100},
                {text: '内容', max: 100},
                {text: '可用性', max: 100},
                {text: '功能', max: 100}
              ],
              center: ['25%','40%'],
              radius: 80
            },
            {
              indicator: [
                {text: '外观', max: 100},
                {text: '拍照', max: 100},
                {text: '系统', max: 100},
                {text: '性能', max: 100},
                {text: '屏幕', max: 100}
              ],
              radius: 80,
              center: ['50%','60%'],
            },
            {
              indicator: (function (){
                var res = [];
                for (var i = 1; i <= 12; i++) {
                  res.push({text:i+'月',max:100});
                }
                return res;
              })(),
              center: ['75%','40%'],
              radius: 80
            }
          ],
          series: [
            {
              type: 'radar',
              tooltip: {
                trigger: 'item',
                formatter: function(a){
                  var name=['外观','拍照','系统','性能'];
                  var str = a.name+'<br>'
                  var data = a.value;
                  var value = data.reduce(function(a,b){
                    return a+b;
                  })
                  for(var i=0;i<name.length;i++){
                    str += name[i]+' ' + ((data[i]/value) * 100).toFixed(2) + '% <br>'
                  }
                  return str
                }
              },
              itemStyle: {
                normal: {areaStyle: {type: 'default'}},
                label: {
                  show: true,
                  position: 'top',
                }
              },
              data: [
                {
                  value: [60,73,85,40],
                  name: '某软件'
                }
              ]
            },
            {
              type: 'radar',
              radarIndex: 1,
              data: [
                {
                  value: [85, 90, 90, 95, 95],
                  name: '某主食手机'
                },
                {
                  value: [95, 80, 95, 90, 93],
                  name: '某水果手机'
                }
              ]
            },
            {
              type: 'radar',
              radarIndex: 2,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data: [
                {
                  name: '降水量',
                  value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
                },
                {
                  name:'蒸发量',
                  value:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
                }
              ]
            }
          ]
        };
        myChart.setOption(option,true);
      },
      toDot(){
        const {hour,minture,second}=this.dots;
        var dataed=Number(hour)+Number(minture/60)+Number(second/3600);
        var data=dataed.toFixed(6);
        var ahour=Math.round(data);
        var floatseq1=data-ahour;
        var aminute=Math.round(floatseq1*60);
        var asecond=Math.round((floatseq1*60-aminute)*60);
        var adata=ahour+","+aminute+","+asecond;
      }
    }
  }
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .app-container {
    margin-top: 40px;
    margin-left: 120px;
    margin-right: 120px;
  }

  .address-layout {
  }

  .total-layout {
    margin-top: 20px;
  }

  .total-frame {
    border: 1px solid #DCDFE6;
    padding: 20px;
    height: 100px;
  }

  .total-icon {
    color: #409EFF;
    width: 60px;
    height: 60px;
  }

  .total-title {
    position: relative;
    font-size: 16px;
    color: #909399;
    left: 70px;
    top: -50px;
  }

  .total-value {
    position: relative;
    font-size: 18px;
    color: #606266;
    left: 70px;
    top: -40px;
  }

  .un-handle-layout {
    margin-top: 20px;
    border: 1px solid #DCDFE6;
  }

  .layout-title {
    color: #606266;
    padding: 15px 20px;
    background: #F2F6FC;
    font-weight: bold;
  }

  .un-handle-content {
    padding: 20px 40px;
  }

  .un-handle-item {
    border-bottom: 1px solid #EBEEF5;
    padding: 10px;
  }

  .overview-layout {
    margin-top: 20px;
  }

  .overview-item-value {
    font-size: 24px;
    text-align: center;
  }

  .overview-item-title {
    margin-top: 10px;
    text-align: center;
  }

  .out-border {
    border: 1px solid #DCDFE6;
  }

  .statistics-layout {
    margin-top: 20px;
    border: 1px solid #DCDFE6;
  }
  /*雷达图*/
  .drawRadar{
   width: 100%;
    height: 500px;
    padding: 20px;
    box-sizing: border-box;
  }
  #radar{
    width: 980px;
    height: 400px;
    margin: 0 auto;
    /*background-color: #1e6abc;*/
  }
</style>
