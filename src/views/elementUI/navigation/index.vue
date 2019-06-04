<template>
  <div>
    <ebreadcrumb></ebreadcrumb>
    <edropdown></edropdown>
    <enavMenu></enavMenu>
    <epageHeader></epageHeader>
    <esteps></esteps>
    <etabs></etabs>
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
        }
    }
</script>

<style scoped>

</style>
