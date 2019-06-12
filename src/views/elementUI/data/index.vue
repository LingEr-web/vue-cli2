<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="badge" name="badge"><badge></badge></el-tab-pane>
      <el-tab-pane label="pagination" name="pagination"><pagination></pagination></el-tab-pane>
      <el-tab-pane label="progressed" name="progressed"><progressed></progressed></el-tab-pane>
      <el-tab-pane label="tabled" name="tabled"><tabled></tabled></el-tab-pane>
      <el-tab-pane label="tag" name="tag"><tag></tag></el-tab-pane>
      <el-tab-pane label="tree" name="tree"><tree></tree></el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
    import badge from './badge/index'
    import pagination from './pagination/index'
    import progressed from './progress/index'
    import tabled from './table/index'
    import tag from './tag/index'
    import tree from './tree/index'
    export default {
        name: "index",
        components:{
          badge,
          pagination,
          progressed,
          tabled,
          tag,
          tree
        },
        data() {
          return {
            activeName: 'badge'
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
