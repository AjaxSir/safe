<template>
  <div>
    <div class="header">
      <h3>今日抓拍: 100 总抓拍: 999 <el-button @click='chartVisible = true' type='text'>分组统计</el-button></h3>
    </div>
    <div class="content">
      <div class="contentHeader">
        <div class="upload">
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false">
            <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
            <i class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="searchTerm">
          <div class="terms">
            <span>相似度:</span>
              <el-radio v-model="termsForm.similar" label="1">低</el-radio>
              <el-radio v-model="termsForm.similar" label="2">中</el-radio>
              <el-radio v-model="termsForm.similar" label="3">高</el-radio>
          </div>
          <div class="terms">
            <span>时间范围:</span>
            <el-select size="mini" v-model="termsForm.time" placeholder="请选择">
              <el-option
                label="当天"
                value="1">
              </el-option>
              <el-option
                label="近七日"
                value="2">
              </el-option>
              <el-option
                label="近一个月"
                value="3">
              </el-option>
              <el-option
                label="其他时间"
                value="4">
              </el-option>
            </el-select>
            <el-date-picker
            size="mini"
              v-if='termsForm.time === "4"'
              v-model="termsForm.timeRange"
              type="daterange"
              format="WW/dd/yyyy"
              value-format="yyyy dd WW"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="terms">
            <span>目标库:</span>
            <el-checkbox v-model="termsForm.library">路人库</el-checkbox>
          </div>
          <div class="terms">
            <el-button style="width:160px" type="primary" size="mini">开始搜索</el-button>
          </div>
        </div>
      </div>
      <div class="mainContent">
        <div class="sortSelect">
          <span v-if='activeName === "first"'>排序规则:</span>
          <el-select
           v-if='activeName === "first"'
          size="mini" class="selectTerm" v-model="sortForm.term">
            <el-option label="抓拍时间由近及远" value="1"> </el-option>
            <el-option label="相似度由高到低" value="2"> </el-option>
          </el-select>
          <i class="iconfont iconshezhi"></i>
        </div>
        <el-tabs v-model="activeName" >
          <el-tab-pane label="列表展示" name="first">
            <el-row :gutter="30">
              <el-col :span='6'>
                <div class="imgItem">
                  <img width="100%" src="../../assets/logo.png" alt="">
                  <h5><span>相似度:</span>  高(90%) <el-button class="itemBtn" @click='picVisible = true' type="text">详情</el-button></h5>
                  <h5><span>摄像头:</span>  西</h5>
                  <h5><span>抓拍地址:</span>   西</h5>
                  <h5><span>时间:</span>  2020/1/1</h5>
                </div>
              </el-col>
              <el-col :span='6'>
                <div class="imgItem">
                  <img width="100%" src="../../assets/logo.png" alt="">
                  <h5><span>相似度:</span>  高(90%) <el-button class="itemBtn" type="text">详情</el-button></h5>
                  <h5><span>摄像头:</span>  西</h5>
                  <h5><span>抓拍地址:</span>   西</h5>
                  <h5><span>时间:</span>  2020/1/1</h5>
                </div>
              </el-col>
              <el-col :span='6'>
                <div class="imgItem">
                  <img width="100%" src="../../assets/logo.png" alt="">
                  <h5><span>相似度:</span>  高(90%) <el-button class="itemBtn" type="text">详情</el-button></h5>
                  <h5><span>摄像头:</span>  西</h5>
                  <h5><span>抓拍地址:</span>   西</h5>
                  <h5><span>时间:</span>  2020/1/1</h5>
                </div>
              </el-col>
              <el-col :span='6'>
                <div class="imgItem">
                  <img width="100%" src="../../assets/logo.png" alt="">
                  <h5><span>相似度:</span>  高(90%) <el-button class="itemBtn" type="text">详情</el-button></h5>
                  <h5><span>摄像头:</span>  西</h5>
                  <h5><span>抓拍地址:</span>   西</h5>
                  <h5><span>时间:</span>  2020/1/1</h5>
                </div>
              </el-col>
            </el-row>
            <div style="text-align:left;margin-top:10px">
              <el-pagination
                background
                layout="total, prev, pager, next"
                :current-page="page.current"
                :page-size='page.size'
                :total="page.total">
              </el-pagination>
            </div>

          </el-tab-pane>
          <el-tab-pane label="地图展示" name="second">
            <div class="mapContent">
              <div class="mapList">
                <h3>搜索结果</h3>
                <div class="recordList">
                  <div class="location">
                    <i class="iconfont icondingwei"></i>
                    <span>1</span>
                  </div>
                  <div class="locationInfo">
                    <h4>启明公寓正门</h4>
                    <h4>相似度: 高(90%)</h4>
                    <h4>时间: 2020/1/1 1/1/1</h4>
                  </div>
                  <div class="recordImg">
                    <img @click='compareVisible = true' src="../../assets/logo.png" alt="">
                  </div>
                </div>
                <el-pagination
                  background
                  class="pagination"
                  layout="total, prev, pager, next"
                  :current-page="page.current"
                  :page-size='page.size'
                  :total="page.total">
                </el-pagination>
              </div>

              <div class="map">
                <BaiduMap height='700px' />
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- 列表展示详情 -->
    <el-dialog
      title="轨迹点详情"
      :visible.sync="picVisible"
      width="800px"
      >
      <PicDetails @toClose='closePic' />
    </el-dialog>
    <!-- 地图展示点击图片 -->
    <el-dialog
      :visible.sync="compareVisible"
      width="450px"
      >
      <div class="bodyPic">
        <div class="pic">
              <h5>原图像</h5>
              <img src="../../assets/logo.png" alt="">
            </div>
            <div class="pic">
              <h5>抓拍图像</h5>
              <img src="../../assets/logo.png" alt="">
            </div>
            <div class="imgItem">
                  <h5><span>相似度:</span>  高(90%) <el-button class="itemBtn" type="text">详情</el-button></h5>
                  <h5><span>摄像头:</span>  西 <el-button class="itemBtn" type="text">关闭</el-button></h5>
                  <h5><span>抓拍地址:</span>   西</h5>
                  <h5><span>时间:</span>  2020/1/1</h5>
                </div>
      </div>
    </el-dialog>
    <!-- 图表统计 -->
    <el-dialog
      :visible.sync="chartVisible"
      width="450px"
      >
      <h2 style="text-align:left">今日抓拍</h2>
      <BarChart id='today' text='' />
      <h2 style="text-align:left">总计抓拍</h2>
      <BarChart id='allRecord' />
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import BaiduMap from '@/components/BaiduMap/index.vue'
import BarChart from '@/components/echarts/bar.vue'
import PicDetails from '@/components/alarmDetails/picDetails.vue'

@Component({
  components: {
    BaiduMap,
    PicDetails,
    BarChart
  }
})
export default class PersonDetails extends Vue {
  termsForm: object = {
    similar: '1',
    time: '1',
    timeRange: [],
    library: true
  }
  picVisible: boolean = false
  compareVisible: boolean = false
  chartVisible: boolean = false
  activeName: string = 'first'
  sortForm: object = { // 排序条件
    term: '1'
  }
  page: object = {
    current: 1,
    total: 1,
    size: 10
  }
  closePic (flag: boolean) {
    this.picVisible = flag
  }
}
</script>
<style lang="less" scoped>
.header{
  width: 100%;
  height: 30px;
  text-align: left;
}
// 上传样式
.avatar-uploader{
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
  }
.content{
  margin-top: 10px;
  border: 1px solid gray;
  width: 100%;
  height: auto;
  .contentHeader{
    height: 140px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    .upload{
      flex: none;
      width: 120px;
      height: 120px;
      margin-right: 20px;
    }
    .searchTerm{
      flex: 1;
      .terms{
        text-align: left;
        height: 30px;
        span{
          width: 80px;;
          text-align: right;
          display: inline-block;
          height: 30px;
          line-height: 30px;
          margin-right: 10px;
        }
      }
    }
  }
}
.mainContent{
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  .sortSelect{
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 9;
    width: 280px;
    height: 30px;
    text-align: right;
    line-height: 30px;
    .iconfont{
      cursor: pointer;
    }
    .selectTerm{
      display: inline-block;
      width: 160px;
      margin: 0 10px;
    }
  }
  .imgItem{
    h5{
      text-align: left;
      .itemBtn{
        float:right;
        padding: 0px;
        margin-right: 20px;
        margin-top: 7px;
      }
      span{
        display: inline-block;
        width: 100px;
        text-align: right;
        height: 30px;
        line-height: 30px;
        margin-right: 10px;
      }
    }
  }
}
.mapContent{
  display: flex;
  width: 100%;
  height: auto;
  min-height: 700px;
  .mapList{
    flex: none;
    width: 250px;
    height: auto;
    text-align: left;
    position: relative;
    .pagination{
      position: absolute;
      bottom: 0px;
      left: 0px;
    }
    h3{
      color: #409EFF;
    }
    .recordList{
      margin-top: 10px;
      display: flex;
      height: 60px;
      width: 100%;
      .location{
        flex: none;
        width: 30px;
        height: 60px;
        box-sizing: border-box;
        padding-top: 20px;
        text-align: center;
        i{
          color: red;
          font-size: 24px;
        }
        span{
          position: relative;
          top: -5px;
          color: white;
          left: -17px;
        }
      }
      .locationInfo{
        flex: 1;
        h4{
          font-size: 14px;
          height: 20px;
          font-weight: 600;
        }
      }
      .recordImg{
        flex: none;
        width: 60px;
        height: 60px;
        margin-right: 10px;
        img{
          width: 60px;
          height: 60px;
        }
      }
    }
  }
  .map{
    flex: 1;
  }
}
.bodyPic{
  width: 420px;
  height: 360px;
  .pic{
      width: 200px;
      float: left;
      &:nth-child(2){
        margin-left: 10px;
      }
      img{
        width: 200px;
      }
    }
}
</style>
