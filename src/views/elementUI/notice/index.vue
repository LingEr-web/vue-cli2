<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="ealert" name="ealert"><ealert></ealert></el-tab-pane>
      <el-tab-pane label="eloading" name="eloading"><eloading></eloading></el-tab-pane>
      <el-tab-pane label="emessage" name="emessage"><emessage></emessage></el-tab-pane>
      <el-tab-pane label="emessageBox" name="emessageBox"><emessageBox></emessageBox></el-tab-pane>
      <el-tab-pane label="enotification" name="enotification"><enotification></enotification></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import ealert from './alert/index'
    import eloading from './loading/index'
    import emessage from './message/index'
    import emessageBox from './messageBox/index'
    import enotification from './notification/index'
    export default {
        name: "index",
        components:{
          ealert,
          eloading,
          emessage,
          emessageBox,
          enotification
        },
      data() {
        return {
          activeName: 'ealert'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>

</style>
