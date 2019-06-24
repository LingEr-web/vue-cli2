<template>
    <div>
      <div class="uploadfile">
        <input type="file" @change="getText($event)">
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      methods:{
        getText(e){
            var reader=new FileReader();
            reader.onload=function () {
              if(reader.result){
                // 通过替换出回车
                var arr=reader.result.replace(/\r/g,'').split('\n');
                console.log(arr)
              }
            };
            reader.readAsText(e.target.files[0],"gb2312");
        }
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
