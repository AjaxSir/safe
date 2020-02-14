<template>
  <div :id="id" :style="{width: '100%', height: '300px'}"></div>
</template>
<script lang="ts">
import echarts from 'echarts'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({})
export default class Bar extends Vue {
  @Prop({ default: () => () => [] }) dataTitle: Array<string>
  @Prop({ default: () => () => [] }) data: Array<object>
  @Prop({ default: '摄像头状态' }) name:string
  @Prop({ default: 'myChartBar' }) id:string
  myChart: any
  drawLine () {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById(this.id) as HTMLDivElement)
    // 绘制图表
    this.myChart.setOption({
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220],
          label: {
            show: true,
            position: 'top'
          }
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
  }
}
</script>
