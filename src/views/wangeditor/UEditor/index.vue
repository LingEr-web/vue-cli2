<template>
    <div>
         <!--<div style="margin: 12px 50px;font-size: 16px;font-weight: bold;color: #696969;">HTML渲染如下:</div>-->
         <!--<div class="editor-content" v-html="editorContent"></div>-->
         <!--<div ref="editor" style="text-align: left;margin: 5px;"></div>-->
    </div>
</template>

<script>
  // import textract from 'textract'
    export default {
        name: "index",
        data(){
          return{
             // editorContent:'eweew'
          }
        },
        mounted(){
          // var that=this;
          // var editor=new E(this.$refs.editor);
          // editor.customConfig.menus = [
          //   'head',
          //   'bold',
          //   'italic',
          //   'underline'
          // ]
          // editor.customConfig.onchange = function (html) {
          //   that.editorContent=html
          // }
          // editor.create()
        }
    }
</script>

<style scoped>

</style>
