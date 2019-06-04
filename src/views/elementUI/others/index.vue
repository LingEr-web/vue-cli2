<template>
    <div>
      <ebacktop></ebacktop>
      <ecalendar></ecalendar>
      <ecard></ecard>
      <ecarousel></ecarousel>
      <ecollapse></ecollapse>
      <edialog></edialog>
      <edivider></edivider>
      <eimage></eimage>
      <einfiniteScroll></einfiniteScroll>
      <epopover></epopover>
      <etimeline></etimeline>
      <etooltip></etooltip>
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
      }
    }
</script>

<style scoped>

</style>
