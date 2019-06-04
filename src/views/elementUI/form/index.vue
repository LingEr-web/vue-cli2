<template>
  <div>
    <ecascader></ecascader>
    <echeckbox></echeckbox>
    <ecolorPicker></ecolorPicker>
    <edatePicke></edatePicke>
    <edateTimePicker></edateTimePicker>
    <eform></eform>
    <einput></einput>
    <einputNumber></einputNumber>
    <eRadio></eRadio>
    <erate></erate>
    <eselect></eselect>
    <eslider></eslider>
    <eswitch></eswitch>
    <etimePicker></etimePicker>
    <etransfer></etransfer>
    <eupload></eupload>
  </div>
</template>

<script>
    import ecascader from './cascader/index'
    import echeckbox from './checkbox/index'
    import ecolorPicker from './colorPicker/index'
    import edatePicke from './datePicke/index'
    import edateTimePicker from './dateTimePicker/index'
    import eform from './eform/index'
    import einput from './input/index'
    import einputNumber from './inputNumber/index'
    import eRadio from './Radio/index'
    import erate from './rate/index'
    import eselect from './select/index'
    import eslider from './slider/index'
    import eswitch from './switch/index'
    import etimePicker from './timePicker/index'
    import etransfer from './transfer/index'
    import eupload from './upload/index'
    export default {
        name: "index.vue",
        components:{
          ecascader,
          echeckbox,
          ecolorPicker,
          edatePicke,
          edateTimePicker,
          eform,
          einput,
          einputNumber,
          eRadio,
          erate,
          eselect,
          eslider,
          eswitch,
          etimePicker,
          etransfer,
          eupload,
       }
    }
</script>

<style scoped>

</style>
