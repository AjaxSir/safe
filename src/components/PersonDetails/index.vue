<template>
  <el-dialog
  width="550px"
  title='人体特征'
  :visible="visible">
  <div class="itemContent">
    <div class="title">面部特征</div>
    <el-row>
      <el-col class="faceDetails" :span='6'>
        <div>性别:</div><div>男</div>
        <div>遮挡:</div><div>有</div>
        <div>戴眼镜:</div><div>有</div>
        <!-- <el-divider direction="vertical"></el-divider> -->
      </el-col>
      <el-col class="faceDetails"  :span='6'>
        <div>疑似年龄:</div><div>28</div>
        <div>面部表情:</div><div>微笑</div>
      </el-col>
    </el-row>
  </div>
  <div class="itemContent">
    <div class="title">身体特征</div>
    <el-row>
      <el-col class="faceDetails" :span='6'>
        <div>上装款式:</div><div>长袖</div>
        <div>上装颜色:</div><div>黑</div>
        <div>上装纹理:</div><div>有</div>
        <div>上装纹理:</div><div>有</div>
        <!-- <el-divider direction="vertical"></el-divider> -->
      </el-col>
      <el-col class="faceDetails"  :span='6'>
        <div>下装款式:</div><div>长袖</div>
        <div>下装颜色:</div><div>黑</div>
        <div>体型:</div><div>有</div>
        <div>发型:</div><div>有</div>
      </el-col>
      <el-col class="faceDetails"  :span='6'>
        <div>背包:</div><div>长袖</div>
        <div>斜挎包:</div><div>黑</div>
        <div>胸前背包:</div><div>有</div>
        <div>行李箱:</div><div>有</div>
      </el-col>
      <el-col class="faceDetails"  :span='6'>
        <div>携带雨伞:</div><div>长袖</div>
        <div>行进方向:</div><div>黑</div>
        <div>行进速度:</div><div>有</div>
      </el-col>
    </el-row>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" size='mini' @click="emitClose">关闭</el-button>
  </span>
  </el-dialog>
</template>
<script lang="ts">
import { Prop, Component, Vue, Emit } from 'vue-property-decorator'
@Component({})
export default class PersonDetails extends Vue {
  @Prop({ default: false }) visible: boolean
  @Emit('toCloseDialog')
  emitClose () {
    return false
  }
}
</script>
<style lang="less" scoped>
.itemContent{
  width: 100%;
  height: auto;
  &:nth-child(2){
    margin-top: 20px;
  }
  position: relative;
  border: 1px solid black;
  padding-top: 20px;
  padding-bottom: 10px;
  .faceDetails{
    &:nth-last-child(1){
      border-right: none;
    }
    height: auto;
    border-right: 1px solid black;
    div{
      width: 65%;
      height: 20px;
      text-align: center;
      line-height: 20px;
      float: left;
      text-align: right;
      &:nth-child(2),&:nth-child(4),&:nth-child(6),&:nth-child(8){
        width: 35%;
        text-align: left;
        text-indent: .3em;
      }
      &:nth-child(1),&:nth-child(2){
        line-height: 15px;
      }
      &:nth-last-child(1),&:nth-last-child(2){
        // line-height: 40px;
        line-height: 25px;
        height: 25px;
      }
    }
  }
  .title{
    position: absolute;
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    left: 30px;
    top: -15px;
    background-color: white;
  }
}
</style>
