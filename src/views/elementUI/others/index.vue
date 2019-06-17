<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="ebacktop" name="ebacktop"><ebacktop></ebacktop></el-tab-pane>
      <el-tab-pane label="ecalendar" name="ecalendar"><ecalendar></ecalendar></el-tab-pane>
      <el-tab-pane label="ecard" name="ecard"><ecard></ecard></el-tab-pane>
      <el-tab-pane label="ecarousel" name="ecarousel"><ecarousel></ecarousel></el-tab-pane>
      <el-tab-pane label="ecollapse" name="ecollapse"><ecollapse></ecollapse></el-tab-pane>
      <el-tab-pane label="edialog" name="edialog"><edialog></edialog></el-tab-pane>
      <el-tab-pane label="edivider" name="edivider"><edivider></edivider></el-tab-pane>
      <el-tab-pane label="eimage" name="eimage"><eimage></eimage></el-tab-pane>
      <el-tab-pane label="einfiniteScroll" name="einfiniteScroll"><einfiniteScroll></einfiniteScroll></el-tab-pane>
      <el-tab-pane label="epopover" name="epopover"><epopover></epopover></el-tab-pane>
      <el-tab-pane label="etimeline" name="etimeline"><etimeline></etimeline></el-tab-pane>
      <el-tab-pane label="etooltip" name="etooltip"><etooltip></etooltip></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import ebacktop from './backtop/index'
    import ecalendar from './calendar/index'
    import ecard from './card/index'
    import ecarousel from './carousel/index'
    import ecollapse from './collapse/index'
    import edialog from './dialog/index'
    import edivider from './divider/index'
    import eimage from './image/index'
    import einfiniteScroll from './infiniteScroll/index'
    import epopover from './popover/index'
    import etimeline from './timeline/index'
    import etooltip from './tooltip/index'
    export default {
        name: "index",
      components:{
        ebacktop,
        ecalendar,
        ecard,
        ecarousel,
        ecollapse,
        edialog,
        edivider,
        eimage,
        einfiniteScroll,
        epopover,
        etimeline,
        etooltip
      },
      data() {
        return {
          activeName: 'ebacktop'
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
