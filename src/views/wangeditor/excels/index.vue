<template>
    <div>
      <!--文件上传-->
      <div class="uploadfile">
        <input type="file" @change="getExcel($event)">
      </div>
    </div>
</template>

<script>
  import {str2Date} from '@/utils/date';
  import XLSX from 'xlsx'
  import jszip from 'jszip'
    export default {
        name: "index",
        methods:{
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
                console.log(datason)
            }
          }
        },
      }
    }
</script>

<style scoped>
.uploadfile{
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
