<template>
    <div class="app-container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="ecascader" name="ecascader"><ecascader></ecascader></el-tab-pane>
        <el-tab-pane label="eupload" name="eupload"><eupload></eupload></el-tab-pane>
        <el-tab-pane label="echeckbox" name="echeckbox"><echeckbox></echeckbox></el-tab-pane>
        <el-tab-pane label="ecolorPicker" name="ecolorPicker"><ecolorPicker></ecolorPicker></el-tab-pane>
        <el-tab-pane label="edatePicke" name="edatePicke"><edatePicke></edatePicke></el-tab-pane>
        <el-tab-pane label="edateTimePicker" name="edateTimePicker"><edateTimePicker></edateTimePicker></el-tab-pane>
        <el-tab-pane label="eform" name="eform"><eform></eform></el-tab-pane>
        <el-tab-pane label="einput" name="einput"><einput></einput></el-tab-pane>
        <el-tab-pane label="einputNumber" name="einputNumber"><einputNumber></einputNumber></el-tab-pane>
        <el-tab-pane label="eRadio" name="eRadio"><eRadio></eRadio></el-tab-pane>
        <el-tab-pane label="erate" name="erate"><erate></erate></el-tab-pane>
        <el-tab-pane label="eselect" name="eselect"><eselect></eselect></el-tab-pane>
        <el-tab-pane label="eslider" name="eslider"><eslider></eslider></el-tab-pane>
        <el-tab-pane label="eswitch" name="eswitch"><eswitch></eswitch></el-tab-pane>
        <el-tab-pane label="etimePicker" name="etimePicker"><etimePicker></etimePicker></el-tab-pane>
        <el-tab-pane label="etransfer" name="etransfer"><etransfer></etransfer></el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
    import ecascader from './cascader/index'
    import echeckbox from './checkbox/index'
    import ecolorPicker from './colorPicker/index'
    import edatePicke from './datePicke/index'
    import edateTimePicker from './dateTimePicker/index'
    import eform from './eform/index'
    import einput from './input/index'
    import einputNumber from './inputNumber/index'
    import eRadio from './Radio/index'
    import erate from './rate/index'
    import eselect from './select/index'
    import eslider from './slider/index'
    import eswitch from './switch/index'
    import etimePicker from './timePicker/index'
    import etransfer from './transfer/index'
    import eupload from './upload/index'
    export default {
        name: "index",
        components:{
          ecascader,
          echeckbox,
          ecolorPicker,
          edatePicke,
          edateTimePicker,
          eform,
          einput,
          einputNumber,
          eRadio,
          erate,
          eselect,
          eslider,
          eswitch,
          etimePicker,
          etransfer,
          eupload,
       },
      data() {
        return {
          activeName: 'eupload'
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
