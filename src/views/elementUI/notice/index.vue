<template>
    <div>
      <ealert></ealert>
      <eloading></eloading>
      <emessage></emessage>
      <emessageBox></emessageBox>
      <enotification></enotification>
    </div>
</template>

<script>
    import ealert from './alert/index'
    import eloading from './loading/index'
    import emessage from './message/index'
    import emessageBox from './messageBox/index'
    import enotification from './notification/index'
    export default {
        name: "index",
        components:{
          ealert,
          eloading,
          emessage,
          emessageBox,
          enotification
        }
    }
</script>

<style scoped>

</style>
