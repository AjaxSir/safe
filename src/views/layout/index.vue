<template>
  <div class="main">
    <div class="headerConten">
      <div class="header">
      <ul>
        <li class="menuItem activeItem">
          <router-link to='/home'>
            <i class="iconfont iconHomehomepagemenu"></i>
            <h5>首页</h5>
          </router-link>
        </li>
        <li class="menuItem">
          <router-link to='/monitor'>
            <i class="iconfont iconshexiangji"></i>
            <h5>实时监控</h5>
          </router-link>
        </li>
        <!-- <li class="menuItem">
          <router-link to='/layout/home'>
            <i class="iconfont iconshexiangji"></i>
            <h5>重点人员</h5>
          </router-link>
        </li>
        <li class="menuItem">
          <router-link to='/layout/home'>
            <i class="iconfont iconpaobu"></i>
            <h5>关注人员</h5>
          </router-link>
        </li>
        <li class="menuItem">
          <router-link to='/layout/home'>
            <i class="iconfont iconshexiangji"></i>
            <h5>身份库</h5>
          </router-link>
        </li>
        <li class="menuItem">
          <router-link to='/stranger'>
            <i class="iconfont iconsearch"></i>
            <h5>路人库</h5>
          </router-link>
        </li> -->
        <li class="menuItem">
            <i class="iconfont iconshexiangji"></i>
            <h5>人像库</h5>
            <div class="moreMenu">
              <ul>
                <li><router-link to='/stranger'>重点人员</router-link></li>
                <li><router-link to='/stranger'>关注人员</router-link></li>
                <li><router-link to='/stranger'>身份库</router-link></li>
                <li><router-link to='/stranger'>路人库</router-link></li>
              </ul>
            </div>
        </li>
        <li class="menuItem">
          <router-link to='/layout/home'>
            <i class="iconfont iconshexiangji"></i>
            <h5>车辆</h5>
          </router-link>
        </li>
        <li class="menuItem">
          <router-link to='/layout/home'>
            <i class="iconfont iconshexiangji"></i>
            <h5>摄像头管理</h5>
          </router-link>
        </li>
        <li class="menuItem">
          <router-link to='/layout/home'>
            <i class="iconfont iconxiezilou"></i>
          <h5>门禁通行</h5>
          </router-link>
        </li>
        <li class="menuItem">
          <router-link to='/layout/home'>
            <i class="iconfont iconshezhi"></i>
            <h5>系统设置</h5>
          </router-link>
        </li>
      </ul>
      <div class='info'>
        <i class="iconfont iconjingbao"></i>
        <span class="system">
          <el-tooltip effect="dark" content="admin111111" placement="bottom">
            <span> admin111111</span>
          </el-tooltip>
        </span>
        <div class="warnCount">1</div>
        <el-link class="out system" type='info'>退出<i class="el-icon-switch-button el-icon--right"></i> </el-link>
      </div>
    </div>
    </div>

    <div class='mainContent'>
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator'
@Component
export default class Layout extends Vue {

}
</script>

<style lang="less" scoped>
@import '../../less/common.less';
.mainContent{
  width: 98%;
  margin: 0 auto;
}
.main{
  color: black;
  padding-top: 122px;
  background: white;
  .headerConten{
    position: fixed;
    width: 100%;
    height: 93px;
    background: white;
    z-index: 999;
    left: 0px;
    top: 0px;
  }
  .header{
    width: 98%;
    height: 83px;
    background: @mainColor;
    margin: 10px auto;
    border-radius: 5px;
    ul{
      list-style: none;
      height: 83px;
      width: 1100px;
      float: left;
    }
    .menuItem{
      text-decoration: none;
      float: left;
      width: 100px;
      padding-top: 10px;
      height:73px;
      position: relative;
      a {
        i{
          font-size: 42px;
        }
        color: white;
        text-decoration: none;
      }
      i{
          font-size: 42px;
        }
        color: white;
      margin-left: 10px;
      &:hover{
        cursor: pointer;
      }
      &:hover .moreMenu{
        display: block;
      }
      .moreMenu{
        position: absolute;
        width: 100px;
        border: 1px solid gray;
        height: 120px;
        border-top: none;
        top: 83px;
        left: 0px;
        background: white;
        color: black;
        display: none;
        ul{
          list-style: none;
          width: 100px;
          li{
            a{
              color: black;
            }
            float: none;
            width: 100%;
            height: 30px;
            text-align: center;
            line-height: 30px;
            &:hover{
              background: #41C7DB;
              a{
                color: white;
              }
            }
          }
        }
      }
    }
    .activeItem{
      background: #003366;
    }
    .info{
      width: 220px;
      float: right;
      height: 100%;
      box-sizing: border-box;
      padding-top: 45px;
      font-size: 16px;
      .iconjingbao{
        font-size: 30px;
      }
      .system{
        &:nth-child(2){
          display: inline-block;
          width: 80px;;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        font-size: 16px;
        vertical-align: middle;
      }
      .warnCount{
        width: 15px;
        height: 15px;
        font-size: 12px;
        display: inline-block;
        border-radius: 15px;
        background: red;
        color: white;
        text-align: center;
        line-height: 15px;
        position: relative;
        left: -90px;
        top: -15px;
      }
    }
  }
}
</style>
