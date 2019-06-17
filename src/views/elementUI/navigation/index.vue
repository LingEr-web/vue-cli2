<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="ebreadcrumb" name="ebreadcrumb"><ebreadcrumb></ebreadcrumb></el-tab-pane>
      <el-tab-pane label="edropdown" name="edropdown"><edropdown></edropdown></el-tab-pane>
      <el-tab-pane label="enavMenu" name="enavMenu"><enavMenu></enavMenu></el-tab-pane>
      <el-tab-pane label="epageHeader" name="epageHeader"><epageHeader></epageHeader></el-tab-pane>
      <el-tab-pane label="esteps" name="esteps"><esteps></esteps></el-tab-pane>
      <el-tab-pane label="etabs" name="etabs"><etabs></etabs></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import ebreadcrumb from './breadcrumb/index'
    import edropdown from './dropdown/index'
    import enavMenu from './navMenu/index'
    import epageHeader from './pageHeader/index'
    import esteps from './steps/index'
    import etabs from './tabs/index'
    export default {
        name: "index",
        components:{
          ebreadcrumb,
          edropdown,
          enavMenu,
          epageHeader,
          esteps,
          etabs
        },
      data() {
        return {
          activeName: 'ebreadcrumb'
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
