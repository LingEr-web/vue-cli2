<template>
  <div>
    <h4>排序(sortable为基数排序 :default-sort = "{prop: 'name', order: 'descending'}"默认降序)</h4>
    <h4>筛选(filters数组写筛选的多选内容，filter-method写筛选的逻辑直接返回true和false就可以控制显示隐藏)</h4>
    <h4>formatter(格式化数据，可以动态修改数据)</h4>
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
        sortable
        :filters="[{text: 'a', value: 'a'}, {text: 'b', value: 'b'}, {text: 'c', value: 'c'}, {text: 'd', value: 'd'}]"
        :filter-method="filterName"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        :formatter="formatter">
      </el-table-column>
    </el-table>
    <!--表格样式大小-->
    <template>
      <el-table
        :data="tableData2"
        border
        size="mini"
        cell-class-name="gjl"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180" class="gjl">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </template>

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
          }],
          tableData2:[
            {
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
            }
          ]
        }
      },
      methods: {
        formatter(row, column) {
          return row.address+"123456789";
        },
        filterName(value, row,column){
          const property = column['property'];
          return row[property] === value;
        }
      }
    }
</script>

<style>
  .gjl{
    font-size: 18px;
  }
</style>
