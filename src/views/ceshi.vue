<template>
<el-table-column prop="status" label="状态"></el-table-column>
</template>

<script>
    export default {
        name: "ceshi",
      created(){
          this.$nextTick(()=>{this.init()})
      },
      methods:{
          beforeInit(){
             this.url="fkdsjfl";
             return true
          }
      }
    }
</script>

<style scoped>

</style>
