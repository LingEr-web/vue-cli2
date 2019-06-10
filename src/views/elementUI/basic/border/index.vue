<template>
    <div>
      <div class="box1">
         <div class="box1-1" border></div>
      </div>
      <div class="box2"></div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  .box1>>>.box1-1{
    /*width: 100px;*/
    /*height: 100px;*/
    /*background-color: blueviolet;*/
  }
.box1 .box1-1{
  width: 100px;
  height: 100px;
  /*background-color: darkred;*/
}

</style>
