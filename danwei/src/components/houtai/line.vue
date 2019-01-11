<template>
  <div class="Html">
      <!-- {{childMsg}} -->
    <!-- 上面两块 -->
    <div class="shangmian">
      <div class="top">
        <el-card class="box-card tody">
          <div slot="header" class="clearfix">
            <span>
              <i class="el-icon-caret-right"></i>今日交通流量分布图
            </span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <div class="text">
            <div id="main"></div>
          </div>
        </el-card>
        <div class="Card">
          <el-card shadow="hover">
            <div class="CardTop">
              <span>
                <i class="fa fa-bar-chart"></i>路况事件
              </span>
            </div>
            <h1>67</h1>
          </el-card>
          <div class="kongxi"></div>
          <el-card shadow="hover">
            <div class="CardTop">
              <span>
                <i class="fa fa-pie-chart"></i>道路违章事件
              </span>
            </div>
            <h1>5</h1>
          </el-card>

          <div class="kongxi2"></div>
          <el-card shadow="hover">
            <div class="CardTop">
              <span>
                <i class="fa fa-taxi"></i>交通事故事件
              </span>
            </div>
            <h1>8</h1>
          </el-card>
          <div class="kongxi"></div>
          <el-card shadow="hover">
            <div class="CardTop">
              <span>
                <i class="fa fa-calendar-check-o"></i>道路施工计划
              </span>
            </div>
            <h1>12</h1>
          </el-card>
        </div>
      </div>
    </div>
    <!-- 下面两块 -->
    <div class="bottom">
      <div class="top">
        <el-card class="box-card tody">
          <div slot="header" class="clearfix">
            <span>
              <i class="el-icon-caret-right"></i>交通事故分布图
            </span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <div class="text">
            <div id="hengCharts"></div>
          </div>
        </el-card>
        <div class="shuxian"></div>
        <el-card class="box-card tody">
          <div slot="header" class="clearfix">
            <span>
              <i class="el-icon-caret-right"></i>高速施工地点分布图
            </span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <div class="text">
            <div id="shuCharts"></div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import {Prop ,Watch} from "vue-property-decorator";

@Component
export default class LineClass extends Vue {
    //  childMsg:Array<number>=[10, 52, 200, 334, 390, 330, 220];//竖向柱状图数据



    //  props: {
    //     childMsg: {
    //         type: Array<number>,    //传入的类型
    //         default: [10, 52, 200, 334, 390, 330, 220] //这样可以指定默认的值
    //     }
    // }

    // 改造接受参数
    @Prop({default:[10, 52, 200, 334, 390, 330, 220]})
    childMsg:Array<number>;
    //监听竖向柱状图的数据变化
    @Watch("childMsg")
    Change(val,oldval){
        this.AddLine();
    }

  mounted() {
    this.AddLine();
  }
AddLine(){
    let aa: any = this;
    // 基于准备好的dom，初始化echarts实例
    let myChart1 = aa.$echarts.init(document.getElementById("main"));
    let myChart2 = aa.$echarts.init(document.getElementById("hengCharts"));
    let myChart3 = aa.$echarts.init(document.getElementById("shuCharts"));
    this.drawLine1(myChart1);
    this.drawLine2(myChart2);
    this.drawLine3(myChart3);
     window.onresize = function() {
      myChart1.resize();
      myChart2.resize();
      myChart3.resize();
    };
};
  drawLine1(myChart1) {
    //    alert(66666);
    let bb = myChart1;

    // 绘制图表
    bb.setOption({
      title: {
        text: "客户端分析 趋势图",
        subtext: "纯属虚构",
        show: false
      },
      tooltip: {
        trigger: "axis"
      },
      grid: {
        //图标大小
        x: 25,
        y: 5,
        x2: 5,
        y2: 20,
        borderWidth: 1
      },
      legend: {
        data: ["sin(x)", "cos(x)"],
        show: true,
        orient: "vertical",
        bottom: "80px",
        right: "20px"
      },
      toolbox: {
        show: false,
        feature: {
          dataZoom: {},
          dataView: { readOnly: false },
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["0", "1", "2", "3", "4", "5", "6"]
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} "
        }
      },
      series: [
        {
          name: "sin(x)",
          type: "line",
          data: [11, 11, 15, 13, 12, 13, 10],
          itemStyle: {
            normal: {
              color: "#DE6D4B",
              lineStyle: {
                width: 2
                // type: 'dashed'
              }
            }
          }
        },
        {
          name: "cos(x)",
          type: "line",
          data: [1, 3, 2, 5, 3, 2, 0],
          itemStyle: {
            normal: {
              color: "#5BC4F4",
              lineStyle: {
                width: 2
                // type: 'dashed'
              }
            }
          }
        }
      ]
    });
    //  window.onresize = function() {
    //   myChart1.resize();
    // };
  }
  drawLine2(myChart2) {
    //横向折线图
    myChart2.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value"
      },
      yAxis: {
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      series: [
        {
          name: "直接访问",
          type: "bar",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "insideRight"
            }
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: "邮件营销",
          type: "bar",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "insideRight"
            }
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "联盟广告",
          type: "bar",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "insideRight"
            }
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "视频广告",
          type: "bar",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "insideRight"
            }
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: "搜索引擎",
          type: "bar",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "insideRight"
            }
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    });
    //根据窗口的大小变动图表 --- 重点
    // window.onresize = function() {
    //   myChart2.resize();
    // };
  }

  //竖向柱状图
  drawLine3(myChart3) {

    myChart3.setOption({
      color: ["#3398DB"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "8%",
        top: "2%"
        // containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          barWidth: "60%",
          data: this.childMsg
        }
      ]
    });
    //根据窗口的大小变动图表 --- 重点
    // window.onresize = function(){
    //     myChart3.resize();
    // }
  }
}
</script>
<style lang="less">
#main {
  width: 100%;
  height: 222px;
}

.Html {
  height: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  overflow-y: auto;
  .el-icon-caret-right {
    font-size: 18px;
  }
  .top {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    .tody .el-card__body {
      background: #f9f9f9;
    }
    .el-card {
      flex-grow: 2;
      border: 1px solid #e1e1e1;
      .el-card__header {
        padding: 8px 10px;
        background: #ebebeb;
      }
    }
    .Card {
      flex-basis: 282px;
      // width: 282px;
      margin-left: 10px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      .el-card {
        width: 110px;
        height: 138px;
        .el-card__body {
          padding: 10px;
          padding-top: 26px;
        }
        .CardTop {
          font-size: 14px;
          color: white !important;
          cursor: pointer;

          i {
            margin-right: 10px;
          }
        }
        h1 {
          font-size: 50px;
          font-family: "宋体";
          line-height: 90px;
          text-align: center;
          color: white !important;
          cursor: pointer;
        }
      }
      .el-card:nth-of-type(1) {
        background: #38435f;
      }
      .el-card:nth-of-type(3) {
        background: #3598d9;
      }
      .el-card:nth-of-type(5) {
        background: #1bbc9b;
      }
      .el-card:nth-of-type(7) {
        background: #f4ad41;
      }
      .kongxi {
        width: 10px;
      }
      .kongxi2 {
        width: 100%;
        height: 10px;
      }
    }
  }
}
.bottom {
  margin-top: 10px;
  // background: red;
  height: calc(100% - 310px);
  min-height: 400px;
  .shuxian {
    width: 10px;
  }
  .top {
    width: 100%;
    height: 100%;
    .tody {
      width: 50%;
      height: 100%;
      .el-card__body {
        height: calc(100% - 60px);
        .text {
          height: 100%;
        }
      }
    }
  }
}
#hengCharts,
#shuCharts {
  min-height: 300px;
  height: 100%;
}
</style>
