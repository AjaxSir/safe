<template>
  <div class="appMain">
    <el-row :gutter="20">
      <el-col :span='6' align='left'>
        <h1>摄像头状态</h1>
        <Pie />
        <h1>摄像头分布</h1>
        <BaiduMap />
      </el-col>
      <el-col style="border-right: 1px solid gray;border-left:1px solid gray" align='left' :span='12'>
        <h1>概览</h1>
          <el-row>
            <el-col :span='10' align='left'>
              <h3 class="num">17</h3>
              <h3 class="num">今日通知</h3>
            </el-col>
            <el-col :span='10' align='left'>
              <h3 class="num">10</h3>
              <h3 class="num">总通知</h3>
            </el-col>
          </el-row>
        <h1>抓拍统计</h1>
        <div style="text-align:right;margin-bottom:10px;">
          <span>统计粒度:</span>
          <el-select size="mini" v-model="statistics" placeholder="请选择">
            <el-option label="每小时" value="hour"></el-option>
            <el-option label="每天" value="day"></el-option>
            <el-option label="每周" value="week"></el-option>
          </el-select>
        </div>

          <LineChart text='抓拍统计' id='catchPhoto' />
        <h1>库统计</h1>
          <BarChart />
      </el-col>
      <el-col :span='6' align='left'>
        <h1>重点人员</h1>
        <el-row>
          <el-col :span='8' align='left'>
            <h3 class="num">3</h3>
            <h3 class="num">今日通知</h3>
          </el-col>
          <el-col :span='8' align='left'>
            <h3 class="num">10</h3>
            <h3 class="num">总通知</h3>
          </el-col>
          <el-col :span='8' align='left'>
            <h3 class="num">10</h3>
            <h3 class="num">重点人员</h3>
          </el-col>
        </el-row>
        <div class="imgInfo">
          <img src="../../assets/logo.png" alt="">
          <img src="../../assets/logo.png" alt="">
          <div class="textInfo">
            <h5>100%</h5>
            <h5>张三</h5>
            <h5><el-button class="morebtn" @click='visible = true, showCompare = true' type='text'>详情</el-button></h5>
          </div>
        </div>
        <h1>重点车辆  </h1>
        <el-row>
          <el-col :span='8' align='left'>
            <h3 class="num">3</h3>
            <h3 class="num">今日通知</h3>
          </el-col>
          <el-col :span='8' align='left'>
            <h3 class="num">10</h3>
            <h3 class="num">总通知</h3>
          </el-col>
          <el-col :span='8' align='left'>
            <h3 class="num">10</h3>
            <h3 class="num">重点车辆</h3>
          </el-col>
        </el-row>
        <div class="imgInfo">
          <img src="../../assets/logo.png" alt="">
          <div class="textInfo">
            <h5>川A 12345</h5>
            <h5>2012 12 21</h5>
            <h5><el-button class="morebtn" @click='visible = true, showCompare = false' type='text'>详情</el-button></h5>
          </div>
        </div>
      </el-col>
    </el-row>
    <AlarmDetails :showCompare='showCompare' @toClose='closeAlarm' :visible='visible' />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Pie from '@/components/echarts/pie.vue'
import LineChart from '@/components/echarts/line.vue'
import BarChart from '@/components/echarts/bar.vue'
import AlarmDetails from '@/components/alarmDetails/index.vue'
import BaiduMap from '@/components/BaiduMap/index.vue'
@Component({
  components: {
    Pie,
    LineChart,
    BarChart,
    AlarmDetails,
    BaiduMap
  }
})
export default class Home extends Vue {
  visible: boolean = false
  statistics: string = 'hour'
  showCompare: boolean = true
  closeAlarm (flag: boolean) {
    this.visible = flag
  }
}
</script>
<style lang="less" scoped>

.num{
  margin: 10px 0px;
  font-size: 24px;
  text-indent: 1em;
  font-weight: 400;
}
h1{
  margin: 10px 0px;
}
.imgInfo{
  width: 100%;
  height: 80px;
  img{
    margin-left: 20px;
    width: 30%;
    height: 80px;;
  }
  .textInfo{
    display: inline-block;
    height: 80px;
    width: 30%;
    line-height: 30px;
    vertical-align: top;
    &:nth-child(2){
      width: 60%;
    }
    h5{
      height: 24px;
      font-size: 16px;
      text-indent: 1em;
      .morebtn{
        font-size: 16px;
      }
    }
  }
}
</style>
