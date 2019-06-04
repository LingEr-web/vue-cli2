<template>
    <div>
      <badge></badge>
      <pagination></pagination>
      <progressed></progressed>
      <tabled></tabled>
      <tag></tag>
      <tree></tree>
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
        }
    }
</script>

<style scoped>

</style>
