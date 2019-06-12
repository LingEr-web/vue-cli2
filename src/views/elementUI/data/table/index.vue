<template>
  <div>
    <h4>排序(sortable为基数排序 :default-sort = "{prop: 'name', order: 'descending'}"默认降序)</h4>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort = "{prop: 'name', order: 'descending'}"
    >
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        :formatter="formatter">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: 'a',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: 'b',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: 'd',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: 'c',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods: {
        formatter(row, column) {
          return row.address+"123456789";
        }
      }
    }
</script>

<style scoped>

</style>
