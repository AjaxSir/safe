<template>
    <div>
      <el-dialog
        :width="showCompare ? '1038px' :'820px'"
        :visible="visible"
        title='通知详情'>
        <div class="content">
          <div v-if='showCompare' class="imgConten">
            <div class="pic">
              <h5>原图像</h5>
              <img src="../../assets/logo.png" alt="">
            </div>
            <div class="pic">
              <h5>抓拍图像</h5>
              <img src="../../assets/logo.png" alt="">
            </div>
            <h5>相似度: 高 (90%)</h5>
            <img class="bodyPic" src="../../assets/logo.png" alt="">
          </div>
          <div class="imgVideo">
            <img src="../../assets/logo.png" alt="">
            <el-button size='mini' type='primary'>历史告警</el-button>
            <el-button size='mini' @click='PersonVisible=true' type='primary'>人体特征</el-button>
            <el-button size='mini' type='primary'>查看视频</el-button>
            <el-button size='mini' @click='emitClose' type='primary'>关闭</el-button>
          </div>
          <div class="personDetail">
            <h2>人员详情:</h2>
            <el-row >
              <el-col :span='10' align='right'>姓名:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <el-row >
              <el-col :span='10' align='right'>国籍:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <el-row >
              <el-col :span='10' align='right'>电话:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <el-row >
              <el-col :span='10' align='right'>证件类型:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <el-row >
              <el-col :span='10' align='right'>证件号码:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <el-row >
              <el-col :span='10' align='right'>出生日期:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <el-row >
              <el-col :span='10' align='right'>学院:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <el-row >
              <el-col :span='10' align='right'>班级:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <el-row >
              <el-col :span='10' align='right'>宿舍:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <el-row >
              <el-col :span='10' align='right'>备注:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <h2>摄像头详情</h2>
            <el-row >
              <el-col :span='10' align='right'>抓拍摄像头:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <el-row >
              <el-col :span='10' align='right'>抓拍地址:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <el-row >
              <el-col :span='10' align='right'>摄像头分组:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
            <el-row >
              <el-col :span='10' align='right'>抓拍时间:</el-col>
              <el-col :span='14' align='left'>
                <span class="textIndent">张三</span> </el-col>
            </el-row>
          </div>
        </div>

      </el-dialog>
      <PersonDetails @toCloseDialog='closePsersonDialog'  :visible='PersonVisible' />
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import PersonDetails from '@/components/PersonDetails/index.vue'

@Component({
  components: {
    PersonDetails
  }
})
export default class AlarmDetails extends Vue {
  @Prop({ default: false }) visible:boolean
  @Prop({ default: false }) showCompare: boolean
  PersonVisible:boolean = false
  @Emit('toClose')
  emitClose () {
    return false
  }
  closePsersonDialog (flag: boolean) {
    this.PersonVisible = flag
  }
}
</script>
<style lang="less" scoped>
.content{
  width: 100%;
  height: 480px;
  display: flex;
  .imgConten{
    .bodyPic{
      width: 190px;
      height: 306px;
    }
    flex: none;
    width: 190px;
    .pic{
      width: 95px;
      float: left;
      height: 104px;
      img{
        width: 95px;
      }
    }
  }
  .imgVideo{
    width: 530px;
    height: 470px;
    padding-top: 10px;
    text-align: right;
    img{
      width: 530px;
      height: 440px;
    }
  }
  .personDetail{
    width: 310px;
    .el-row{
      margin: 7px 0px;
    }
    h2{
      text-align: left;
      text-indent: 1em;
    }
    .textIndent{
      margin-left: 10px;
    }
  }
}
</style>
