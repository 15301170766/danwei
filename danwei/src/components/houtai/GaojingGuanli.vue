<template>
    <div class="GaoJing">
      <el-button type="info" class="ChuanZhi" icon="el-icon-message" circle @click="ChuanZhi()"></el-button>
      <!-- {{Data2}} -->
      <div class="nav">
          <Mianbaoxie></Mianbaoxie>
      </div>
      <div class="mian">
                <div class="left">
                    <Tree @test="ZiChuanfu" ></Tree>
                </div>
            <div class="right">
                    <MainLine :child-msg="Datas"></MainLine>
            </div>
      </div>
    </div>
</template>
<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import Mianbaoxie from "./mianbaoxie.vue";
import Tree from "./tree.vue";
import MainLine from "./line.vue";
import {Watch} from "vue-property-decorator";

import qs from 'qs';//引用qs，下方axios方法里，才能在使用qs.stringify（）；
@Component({
    components:{
        Mianbaoxie,
        Tree,
        MainLine
    }
})
export default class GaojingGuanli extends Vue {
     Datas:Array<number>=[10, 52, 200, 334, 390, 330, 220];//竖向柱状图数据
    Data2:number=6;
    mounted () {
        this.testQarphql();
    }
    ChuanZhi(){
     this.Datas=[50, 52, 50, 50, 50, 50, 50];//竖向柱状图数据
    }
    ZiChuanfu(val){
        this.Data2=val;
    }

    testQarphql(){

// console.log(recommendList)
        
        let aa: any = this;
        	aa.$ajax({
                        method: 'POST',
                        ContentType: "application/json",
                        url: "http://localhost:4000/graphql",
                        data:qs.stringify({
                            query:"{random}"
                            })
                    }).then(function(res){
                        console.log(res);				
                        //console.log(res.data.res[0]._id);
                    
                        
                    })
                    .catch(function(err){
                        console.log(err);
                    })	


                        }


    @Watch("Data2")
    haha(val:any,oldVal:any):any{
        if(val===4){
            this.Datas=[80, 82, 80, 80, 80,80, 80];//竖向柱状图数据
            
        }else if(val===5){
            this.Datas=[20, 22, 20, 20, 20,20, 20];//竖向柱状图数据

        }else{
            this.Datas=[10, 52, 200, 334, 390, 330, 220];//竖向柱状图数据

        }
    }

}
</script>

<style lang="less" scope="scope">
.ChuanZhi{
    position: fixed;
    right: 0;
}
.GaoJing{
    height: 100%;
    // overflow: hidden;
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
        // overflow-y: auto;
        .left{
            flex-basis: 300px;
            background: #F9F9F9;
        }
        .right{
            flex-grow:2;
            background: #EBEBEB;
            // background: yellow;
        }
    }
}
 
</style>