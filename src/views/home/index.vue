<template>
  <div class="home" id="contentBox">
    <!-- <video class="video" src="../../assets/video/a.mp4" initial-time="0" autoplay="false" loop="false" muted="false" direction="0" 
            bindplay="" bindpause="" bindended="" bindtimeupdate="" bindwaiting="" binderror="">
            
        </video> -->
    <videoPlay
      v-bind="options"
      @play="onPlay"
      @pause="onPause"
      @timeupdate="onTimeupdate"
      @canplay="onCanplay"
    />
  </div>
</template>
<script lang="ts" setup>
import "vue3-video-play/dist/style.css";
import { videoPlay } from "vue3-video-play";
import { reactive } from "vue";
const options = reactive({
  width: '800px', //播放器高度
  height: '450px', //播放器高度
  color: "#409eff", //主题色
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false,  //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制器
  title: '', //视频名称
  src: "https://vd3.bdstatic.com/mda-maunc8q8gpwgjts8/sc/cae_h264_nowatermark/1611907885/mda-maunc8q8gpwgjts8.mp4?v_from_s=hkapp-haokan-hbf&auth_key=1660703434-0-0-645160ca4ccdbc9c0c2088e7d56dd8b9&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=0034644783&vid=11220038343555649881&abtest=103890_1-103579_2&klogid=0034644783", //视频源
  poster: '', //封面
})
const onPlay = (ev: any) => {
  console.log('播放')
}
const onPause = (ev: any) => {
  console.log(ev, '暂停')
}
 
const onTimeupdate = (ev: any) => {
  console.log(ev, '时间更新')
}
const onCanplay = (ev: any) => {
  console.log(ev, '可以播放')
}

</script>
<style lang="less" scoped>
.home {
  height: 1800px;
  .video {
    width: 100%;
    height: 100%;
  }
}
</style>
