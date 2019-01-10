<template>
    <div class="GaoJing">
      
      <div class="nav">
          <Mianbaoxie></Mianbaoxie>
      </div>
      <div class="mian">
                <div class="left">
                    <Tree></Tree>
                </div>
            <div class="right">右侧图标</div>
      </div>
    </div>
</template>
<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import Mianbaoxie from "./mianbaoxie.vue";
import Tree from "./tree.vue";
@Component({
    components:{
        Mianbaoxie,
        Tree
    }
})
export default class GaoJing extends Vue {
    
}
</script>

<style lang="less" scope="scope">
.GaoJing{
    height: 100%;
    // background: pink;
   .nav{
      border-bottom: 1px solid #DDDDDD;
      box-sizing: border-box;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
    }
    .mian{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        height: calc(100% - 40px);
        .left{
            flex-basis: 300px;
            background: #F9F9F9;
        }
        .right{
            flex-grow:2;
            background: #EBEBEB;
        }
    }
}
 
</style>