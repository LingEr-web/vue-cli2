<template>
  <div class="block">
    <h4>props更改对应的数据(props中设置multiple为true时为多选,checkStrictly为可以选取任意点)</h4>
    <el-cascader
      v-model="value"
      :options="options"
      :props="props"
      clearable
      checkStrictly
      collapse-tags
      :show-all-levels="false"
      @change="handleChange">
    </el-cascader>
    <h4>自定义文字结构：低版本elementui不支持</h4>
    <el-cascader :options="optionsed">
      <template slot-scope="{ node, data }">
        <span>{{ data.label }}</span>
        <span>111111111111111111111111</span>
      </template>
    </el-cascader>
    <h4>动态加载</h4>
    <el-cascader :props="propsed"></el-cascader>
  </div>
</template>

<script>
    let id=0;
    export default {
        name: "index",
        data(){
          return{
            options:[
              {id:"1",label:"郭金玲1",children:[{id:"1-1",label:"郭金玲1-1"},{id:"1-2",label:"郭金玲1-2"},{id:"1-3",label:"郭金玲1-3"}]},
              {id:"2",label:"郭金玲2",children:[{id:"2-1",label:"郭金玲2-1"},{id:"2-2",label:"郭金玲2-2"},{id:"2-3",label:"郭金玲2-3"}]},
              {id:"3",label:"郭金玲3",children:[{id:"3-1",label:"郭金玲3-1"},{id:"3-2",label:"郭金玲3-2"},{id:"3-3",label:"郭金玲3-3"}]},
              {id:"4",label:"郭金玲4",children:[{id:"4-1",label:"郭金玲4-1"},{id:"4-2",label:"郭金玲4-2"},{id:"4-3",label:"郭金玲4-3"}]},
              {id:"5",label:"郭金玲5",children:[{id:"5-1",label:"郭金玲5-1"},{id:"5-2",label:"郭金玲5-2"},{id:"5-3",label:"郭金玲5-3"}]},
              {id:"6",label:"郭金玲6",children:[{id:"6-1",label:"郭金玲6-1"},{id:"6-2",label:"郭金玲6-2"},{id:"6-3",label:"郭金玲6-3"}]},
              {id:"7",label:"郭金玲7",children:[{id:"7-1",label:"郭金玲7-1"},{id:"7-2",label:"郭金玲7-2"},{id:"7-3",label:"郭金玲7-3"}]},
              {id:"8",label:"郭金玲8",children:[{id:"8-1",label:"郭金玲8-1"},{id:"8-2",label:"郭金玲8-2"},{id:"8-3",label:"郭金玲8-3"}]},
              {id:"9",label:"郭金玲9",children:[{id:"9-1",label:"郭金玲9-1"},{id:"9-2",label:"郭金玲9-2"},{id:"9-3",label:"郭金玲9-3"}]},
              {id:"10",label:"郭金玲10"},
              ],
            optionsed:[
              {id:"1",value:"1",label:"郭金玲1",children:[{id:"1-1",value:"1-1",label:"郭金玲1-1"},{id:"1-2",value:"1-2",label:"郭金玲1-2"},{id:"1-3",value:"1-3",label:"郭金玲1-3"}]},
              {id:"2",value:"2",label:"郭金玲2",children:[{id:"2-1",value:"2-1",label:"郭金玲2-1"},{id:"2-2",value:"2-2",label:"郭金玲2-2"},{id:"2-3",value:"2-3",label:"郭金玲2-3"}]},
              {id:"3",value:"3",label:"郭金玲3",children:[{id:"3-1",value:"3-1",label:"郭金玲3-1"},{id:"3-2",value:"3-2",label:"郭金玲3-2"},{id:"3-3",value:"3-3",label:"郭金玲3-3"}]},
              {id:"4",value:"4",label:"郭金玲4",children:[{id:"4-1",value:"4-1",label:"郭金玲4-1"},{id:"4-2",value:"4-2",label:"郭金玲4-2"},{id:"4-3",value:"4-3",label:"郭金玲4-3"}]},
              {id:"5",value:"5",label:"郭金玲5",children:[{id:"5-1",value:"5-1",label:"郭金玲5-1"},{id:"5-2",value:"5-2",label:"郭金玲5-2"},{id:"5-3",value:"5-3",label:"郭金玲5-3"}]},
              {id:"6",value:"6",label:"郭金玲6",children:[{id:"6-1",value:"6-1",label:"郭金玲6-1"},{id:"6-2",value:"6-2",label:"郭金玲6-2"},{id:"6-3",value:"6-3",label:"郭金玲6-3"}]},
              {id:"7",value:"7",label:"郭金玲7",children:[{id:"7-1",value:"7-1",label:"郭金玲7-1"},{id:"7-2",value:"7-2",label:"郭金玲7-2"},{id:"7-3",value:"7-3",label:"郭金玲7-3"}]},
              {id:"8",value:"8",label:"郭金玲8",children:[{id:"8-1",value:"8-1",label:"郭金玲8-1"},{id:"8-2",value:"8-2",label:"郭金玲8-2"},{id:"8-3",value:"8-3",label:"郭金玲8-3"}]},
              {id:"9",value:"9",label:"郭金玲9",children:[{id:"9-1",value:"9-1",label:"郭金玲9-1"},{id:"9-2",value:"9-2",label:"郭金玲9-2"},{id:"9-3",value:"9-3",label:"郭金玲9-3"}]},
              {id:"10",value:"10",label:"郭金玲10"},
            ],
            value:[],
            props:{value:'label',children:'children',label:'label',multiple: true,checkStrictly:true},
            propsed:{
              lazy: true,
              lazyLoad (node, resolve) {
                const { level } = node;
                setTimeout(() => {
                  // Array.from把类数组对象转换为真正的数组
                  const nodes = Array.from({ length: level + 1 }).map(item => ({
                    value: ++id,
                    label: `选项${id}`,
                    leaf: level >= 2
                  }));
                  resolve(nodes);
                }, 1000);
              }}
          }
        },
        methods:{
          handleChange(val){
          }
        }
    }
</script>

<style scoped>

</style>
