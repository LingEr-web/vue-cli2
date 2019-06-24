<template>
  <div class="pdf">
    <button
      @click="logContent"
    >log content
    </button>
    <pdf
      ref="pdf"
      :src="pdfUrl">
    </pdf>
  </div>
</template>
<script>
  import pdf from 'vue-pdf'
  export default {
    name: 'Pdf',
    components: {
      pdf
    },
    data() {
      return {
        pdfUrl: "http://file.dakawengu.com/file/2018-05-29/20180527-tianfeng.pdf",
      }
    },
    methods:{
      logContent(){
        this.$refs.pdf.pdf.forEachPage(function(page) {

          return page.getTextContent()
            .then(function(content) {

              var text = content.items.map(item => item.str);
              console.log(text);
            })
        });
      }
    }
  }
</script>

<style scoped>
.uploadfile{
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
