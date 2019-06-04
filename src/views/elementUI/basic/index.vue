<template>
   <div>
      <border></border>
      <buttoned></buttoned>
      <color></color>
      <containe></containe>
      <icon></icon>
      <layout></layout>
      <linked></linked>
     <typography></typography>
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
         }
    }
</script>

<style scoped>

</style>
