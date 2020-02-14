<template>
    <baidu-map
    :center="{lng: '116.404', lat: '39.915'}"
    :zoom="10"
    :scroll-wheel-zoom="true"
    :style="{ height: height }"
    class="map">
      <bm-marker v-for="(item, index) in PointLists"
      :key='index'
      :position="item"
      :dragging="true"
      @click="infoWindowOpen(item)">
        <bm-info-window
        :show="item.show"
        @close="infoWindowClose(item)"
        @open="infoWindowOpen(item)">摄像头点地点</bm-info-window>
      </bm-marker>
  </baidu-map>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class BaiduMaps extends Vue {
  @Prop({ default: () => {
    return [
      {
        lng: 116.404, lat: 39.915, show: false
      }
    ]
  } }) PointLists: Array<object>
  @Prop({ default: '300px' }) height: string
  infoWindowOpen (item: any) {
    item['show'] = true
  }
  infoWindowClose (item: any) {
    item['show'] = false
  }
}
</script>
<style lang="less" scoped>
</style>
