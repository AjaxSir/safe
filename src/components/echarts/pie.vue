<template>
  <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
</template>
<script lang="ts">
import echarts from 'echarts'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({})
export default class Pie extends Vue {
  @Prop({ default: () => () => [] }) dataTitle: Array<string>
  @Prop({ default: () => () => [] }) data: Array<object>
  @Prop({ default: '摄像头状态' }) name:string
  myChart: any
  drawLine () {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById('myChart') as HTMLDivElement)
    // 绘制图表
    this.myChart.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      color: ['green', 'red'],
      legend: {
        orient: 'vertical',
        left: 10,
        data: ['正常', '异常']
      },
      series: [
        {
          name: this.name,
          type: 'pie',
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: '正常' },
            { value: 10, name: '异常' }
          ]
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
