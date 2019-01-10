<template>
  <div class="tree">
    <el-input placeholder="输入关键字进行过滤" suffix-icon="el-icon-search" v-model="filterTexts"></el-input>

    <el-tree
      class="filter-tree"
      :data="data2"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree2"
    ></el-tree>
  </div>
</template>
<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import {ItreeData} from "../../service/jiekou";
 let data2s:Array<ItreeData> =[
    {
      id: 1,
      label: "商品移库管理",
      children: [
        {
          id: 4,
          label: "仓库间商品移库单"
        },
        {
          id: 5,
          label: "仓库间商品移库单"
        }
      ]
    },
    {
      id: 2,
      label: "商品停售管理",
      children: [
        {
          id: 5,
          label: "商品停售单"
        },
        {
          id: 6,
          label: "商品停售复查单"
        },
        {
          id: 6,
          label: "停售商品移库单"
        },
        {
          id: 6,
          label: "商品停售查询"
        }
      ]
    },
    {
      id: 3,
      label: "商品损益管理",
      children: [
        {
          id: 7,
          label: "商品报损报溢开票"
        },
        {
          id: 8,
          label: "报损开票单关闭"
        },
        {
          id: 8,
          label: "商品报损报溢审核"
        }
      ]
    }
  ]
@Component
export default class TrssClass extends Vue {
  filterTexts: string = "";
  filterNode(value, data) {
    if (!value) return true;
    return data.label.indexOf(value) !== -1;
  }
  @Watch("filterTexts")
  filterText(val) {
    let ss: any = this;
    ss.$refs.tree2.filter(val);
  }




  data2 = [
    {
      id: 1,
      label: "商品移库管理",
      children: [
        {
          id: 4,
          label: "仓库间商品移库单"
        },
        {
          id: 5,
          label: "仓库间商品移库单"
        }
      ]
    },
    {
      id: 2,
      label: "商品停售管理",
      children: [
        {
          id: 5,
          label: "商品停售单"
        },
        {
          id: 6,
          label: "商品停售复查单"
        },
        {
          id: 6,
          label: "停售商品移库单"
        },
        {
          id: 6,
          label: "商品停售查询"
        }
      ]
    },
    {
      id: 3,
      label: "商品损益管理",
      children: [
        {
          id: 7,
          label: "商品报损报溢开票"
        },
        {
          id: 8,
          label: "报损开票单关闭"
        },
        {
          id: 8,
          label: "商品报损报溢审核"
        }
      ]
    }
  ];
  defaultProps = {
    children: "children",
    label: "label"
  };
}
</script>
<style lang="less" scope="scope">
.tree {
  padding: 20px;

  .el-tree {
    background: #f9f9f9;
  }
}
</style>