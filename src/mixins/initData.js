import {initData} from "../api/data";
export default {
  data(){
    return {
      loading:true, data:[], page:0, size:10, total:0, url:"", params:{}, query:{}, time:""
    }
  },
  methods:{
    async init(){
      if(!await this.beforeInit()){
        return;
      }
      return new promise((resolve,reject)=>{
        this.loading=true
        initData(this.url,this.params).then(res=>{
          this.total=res.totalElements;
          this.data=res.content;
          setTimeout((c)=>{
            this.loading=false
          },this.time)
          resolve(res)
        })
      })
    },
    beforeInit(){
      return true
    }
  }
}
