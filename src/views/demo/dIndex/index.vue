<template>
     <div class="main">
         <div class="">
         <el-header>
           <div style="margin-top: 20px">
             <el-radio-group v-model="radio4" size="mini">
               <el-radio-button label="上海"></el-radio-button>
               <el-radio-button label="北京"></el-radio-button>
               <el-radio-button label="广州"></el-radio-button>
               <el-radio-button label="深圳"></el-radio-button>
             </el-radio-group>
           </div>
         </el-header>



           <!--树形-->
           <div class="block">
             <el-tree
               :data="data"
               show-checkbox
               node-key="id"
               default-expand-all
               :expand-on-click-node="false">
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                         <span>{{ node.label }}</span>
                    </span>
             </el-tree>





           </div>
     </div>




       <!--加载动画框-->
       <div class="loding-box" @click="lodingSH" v-show="lodings">
         <div class="l-wrapper">
           <svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
             <g id="circle" class="g-circles g-circles--v1">
               <circle id="12" transform="translate(35, 16.698730) rotate(-30) translate(-35, -16.698730) " cx="35" cy="16.6987298" r="10"></circle>
               <circle id="11" transform="translate(16.698730, 35) rotate(-60) translate(-16.698730, -35) " cx="16.6987298" cy="35" r="10"></circle>
               <circle id="10" transform="translate(10, 60) rotate(-90) translate(-10, -60) " cx="10" cy="60" r="10"></circle>
               <circle id="9" transform="translate(16.698730, 85) rotate(-120) translate(-16.698730, -85) " cx="16.6987298" cy="85" r="10"></circle>
               <circle id="8" transform="translate(35, 103.301270) rotate(-150) translate(-35, -103.301270) " cx="35" cy="103.30127" r="10"></circle>
               <circle id="7" cx="60" cy="110" r="10"></circle>
               <circle id="6" transform="translate(85, 103.301270) rotate(-30) translate(-85, -103.301270) " cx="85" cy="103.30127" r="10"></circle>
               <circle id="5" transform="translate(103.301270, 85) rotate(-60) translate(-103.301270, -85) " cx="103.30127" cy="85" r="10"></circle>
               <circle id="4" transform="translate(110, 60) rotate(-90) translate(-110, -60) " cx="110" cy="60" r="10"></circle>
               <circle id="3" transform="translate(103.301270, 35) rotate(-120) translate(-103.301270, -35) " cx="103.30127" cy="35" r="10"></circle>
               <circle id="2" transform="translate(85, 16.698730) rotate(-150) translate(-85, -16.698730) " cx="85" cy="16.6987298" r="10"></circle>
               <circle id="1" cx="60" cy="10" r="10"></circle>
             </g>
           </svg>
         </div>
       </div>
     </div>
</template>

<script>
    export default {
        name: "index",

      data () {
        const data = [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }];
        return {
          radio1: '上海',
          radio2: '上海',
          radio3: '上海',
          radio4: '上海',
          lodings:false,
          data: JSON.parse(JSON.stringify(data)),
          data: JSON.parse(JSON.stringify(data))
        };
      },
      methods:{
          lodingSH(){
             let _this=this;
             setTimeout(()=>{
                _this.lodings=false;
             },1500)
          },
        append(data) {
          const newChild = { id: id++, label: 'testtest', children: [] };
          if (!data.children) {
            this.$set(data, 'children', []);
          }
          data.children.push(newChild);
        },

        remove(node, data) {
          const parent = node.parent;
          const children = parent.data.children || parent.data;
          const index = children.findIndex(d => d.id === data.id);
          children.splice(index, 1);
        },
        renderContent(h, { node, data, store }) {
          return (
            <span class="custom-tree-node">
            <span>{node.label}</span>
          <span>
          <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
          <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
          </span>
          </span>);
        }

      }
    }
</script>

<style>
  .block .el-tree-node__content{
    height: auto;
  }
</style>
<style scoped>
  @import "../../../assets/css/style.css";
  .block .el-tree-node__content{
    height: auto;
  }
  .main{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .loding-box{
    width: 100%;
    height:600px;
    background-color:rgba(255,255,255,0.7);
    position:absolute;
    left: 0;
    top: 0;
   }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
