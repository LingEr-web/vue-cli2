<template>
  <div class="app-container">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="border" name="border"><border></border></el-tab-pane>
    <el-tab-pane label="buttoned" name="buttoned"><buttoned></buttoned></el-tab-pane>
    <el-tab-pane label="color" name="color"><color></color></el-tab-pane>
    <el-tab-pane label="containe" name="containe"><containe></containe></el-tab-pane>
    <el-tab-pane label="icon" name="icon"><icon></icon></el-tab-pane>
    <el-tab-pane label="layout" name="layout"><layout></layout></el-tab-pane>
    <el-tab-pane label="linked" name="linked"><linked></linked></el-tab-pane>
    <el-tab-pane label="typography" name="typography"><typography></typography></el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
    import border from './border/index'
    import buttoned from './button/index'
    import color from './color/index'
    import containe from './containe/index'
    import icon from './icon/index'
    import layout from './layout/index'
    import linked from './link/index'
    import typography from './typography/index'
    export default {
        name: "index",
        components:{
            border,
            buttoned,
            color,
            containe,
            icon,
            layout,
            linked,
            typography
         },
        data() {
          return {
            activeName: 'border'
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
