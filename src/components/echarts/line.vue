<template>
  <div :id="id" :style="{width: '100%', height: '300px'}"></div>
</template>
<script lang="ts">
import echarts from 'echarts'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({})
export default class LineChart extends Vue {
  @Prop({ default: () => () => [] }) dataTitle: Array<string>
  @Prop({ default: () => () => [] }) data: Array<object>
  @Prop({ default: '摄像头状态' }) name:string
  @Prop({ default: 'myChartLine' }) id:string
  @Prop({ default: '人像总数统计' }) text:string
  myChart: any
  drawLine () {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById(this.id) as HTMLDivElement)
    // 绘制图表
    this.myChart.setOption({
      title: {
        text: this.text
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: [this.text]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2月1日', '2月2日', '2月3日', '2月4日', '2月5日', '2月6日', '2月7日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: this.text,
          type: 'line',
          data: [120, 132, 101, 134, 90, 230, 210]
        }
      ]
    })
  }
  handle () {
    this.myChart.resize()
  }
  mounted () {
    this.drawLine()
    window.addEventListener('resize', this.handle, true)
    const content = document.getElementById(this.id) as HTMLDivElement
    content.style.border = '1px solid black'
  }
}
</script>
<style lang="less" scoped>
// #myChartLine{
//   border: 1px solid black;
// }
</style>
