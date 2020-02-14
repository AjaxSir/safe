<template>
  <div>
    <el-row :gutter="20">
      <el-col align='left' :span='4'>
        <h2>摄像头列表</h2>
        <div class="searchItem">
          <div>
            <el-input placeholder="请输入关键字" size="mini" v-model='deviceName'></el-input>
          </div>
          <div class="searchBtn">
            <el-button size="mini">搜索</el-button>
          </div>
        </div>
        <el-tree
          :data="data"
          :props="defaultProps"
          >
        </el-tree>
      </el-col>
      <el-col class="center" :span='16'>
        <h4>摄像头1</h4>
        <h5>名称: 西路口</h5>
        <h5>地址: 浙师大大兴元</h5>
        <img src="../../assets/logo.png" alt="">
      </el-col>
      <el-col align='left' class="right" :span='4'>
        <h2>通知</h2>
        <el-row :gutter="10">
          <el-col :span='12'> <img @click='visible = true' src="../../assets/logo.png" alt=""> </el-col>
          <el-col :span='12'> <img src="../../assets/logo.png" alt=""> </el-col>
          <el-col :span='8'>100%1是</el-col>
          <el-col :span='8' align='center'>张三</el-col>
          <el-col :span='8' align='right'> <el-button type='text'>详情</el-button> </el-col>
          <el-col :span='24'> 2012 1 1 </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span='12'> <img src="../../assets/logo.png" alt=""> </el-col>
          <el-col :span='12'> <img src="../../assets/logo.png" alt=""> </el-col>
          <el-col :span='8'>100%1是</el-col>
          <el-col :span='8' align='center'>张三</el-col>
          <el-col :span='8' align='right'> <el-button type='text'>详情</el-button> </el-col>
          <el-col :span='24'> 2012 1 1 </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span='12'> <img src="../../assets/logo.png" alt=""> </el-col>
          <el-col :span='12'> <img src="../../assets/logo.png" alt=""> </el-col>
          <el-col :span='8'>100%1是</el-col>
          <el-col :span='8' align='center'>张三</el-col>
          <el-col :span='8' align='right'> <el-button type='text'>详情</el-button> </el-col>
          <el-col :span='24'> 2012 1 1 </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="bottomMap">
      <el-col align='left' :span='4'>
        <h2>摄像头位置</h2>
        <BaiduMap height='240px' />
      </el-col>
      <el-col align='left' :span='20'>
        <h2>人脸抓拍</h2>
        <div class="imgItem">
          <img src="../../assets/logo.png" alt="">
          <h5>2012 12 12</h5>
        </div>
        <div class="imgItem">
          <img src="../../assets/logo.png" alt="">
          <h5>2012 12 12</h5>
        </div>
      </el-col>
    </el-row>
    <!-- 通知点击图片 -->
    <el-dialog
      :visible.sync="visible"
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
            <div class="imgItemDia">
              <h5>
                <el-button class="itemBtn" type="text">查看报警详情</el-button>
              </h5>
            </div>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import BaiduMap from '@/components/BaiduMap/index.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  components: {
    BaiduMap
  }
})
export default class Monitor extends Vue {
  deviceName: string = ''
  visible: boolean = false
  data: Array<object> = [{
    label: '一级 1',
    children: [{
      label: '二级 1-1'
    }]
  }, {
    label: '一级 2',
    children: [{
      label: '二级 2-1'
    }, {
      label: '二级 2-2'
    }]
  }]
  defaultProps: object = {
    children: 'children',
    label: 'label'
  }
}
</script>
<style lang="less" scoped>
.searchItem{
  display: flex;
  div {
    &:first-child{
      flex: 1;
    }
    &:nth-child(2) {
      flex: none;
      width: 90px;
      text-align: right;
    }
  }
}
.el-tree{
  min-height: 600px;
  border: 1px solid gray;
  margin-top: 10px;
}
.center{
  h4{
     background: #003366;
     color: white;
     text-align: left;
     height: 40px;
     line-height: 40px;
     text-indent: 2em;
  }
  h5{
    text-align: left;
    height: 30px;
    line-height: 30px;
  }
  img{
    height: 570px;
  }
}
.right{
  .el-row{
    margin-top: 20px;
  }
  img{
    width: 100%;
  }
  button{
    padding: 2px;
    font-size: 16px;
  }
}
.bottomMap{
  h2{
    margin: 10px 0px;
  }
  .imgItem{
    float: left;
    margin-left: 10px;
    text-align: center;
    &:first-child{
      margin-left: 0px;
    }
  }
}
  .imgItemDia{
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
  .bodyPic{
    width: 420px;
    height: 230px;
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
