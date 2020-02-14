<template>
  <div class="picContent">
    <div class="imgConten">
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
            <el-button size='mini' @click='PersonVisible=true' type='primary'>人体特征</el-button>
            <el-button size='mini' type='primary'>查看视频</el-button>
            <el-button size='mini' @click='emitClose' type='primary'>关闭</el-button>
          </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
@Component
export default class picDetail extends Vue {
  @Emit('toClose')
  emitClose () {
    return false
  }
}
</script>
<style lang="less" scoped>
.picContent{
  display: flex;
  width: 100%;
}
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
    flex: 1;
    width: 530px;
    height: 470px;
    padding-top: 10px;
    text-align: right;
    img{
      width: 530px;
      height: 440px;
    }
  }
</style>
