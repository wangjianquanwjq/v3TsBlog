<template>
    <div id="contentBox">
        <!-- 基本信息 -->
        <div class="essentialInformation">
            <h2 class="title">基本信息</h2>
            <ul class="ul">
                <li>王健全/男/汉/1995</li>
                <li>专科/计算机应用/四川工商职业技术学院</li>
                <li>13699004020/610743994@qq.com</li>
                <li>个人博客：<a target=“_blank” href="http://wangjianquan.love">http://wangjianquan.love</a></li>
                <li>职业专长：网页设计与开发，JavaScript/vue2/vue3/react</li>
            </ul>
        </div>
        <br>
        <!-- 工作经历 -->
        <div class="workExperience">
            <h2 class="title">工作经历</h2>
            <div class="lineTime">
                <el-timeline>
                    <el-timeline-item timestamp="2011-11~至今" placement="top">
                        <el-card>
                            <h3>大陆希望集团（希望银厥）</h3>
                            <p> 前端开发、产品设计参与（和产品撕逼）、保洁、火夫、搬运工等。</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2020/7~2011-11" placement="top">
                        <el-card>
                            <h3>北京腾信软创科技</h3>
                            <p>前端开发、产品设计参与（和产品撕逼）、保洁、火夫、搬运工等。</p>
                        </el-card>
                    </el-timeline-item>
                    <el-timeline-item timestamp="2017/8~2020/7" placement="top">
                        <el-card>
                            <h3>四川元玄科技科技</h3>
                            <p>前端开发、产品设计参与（和产品撕逼）、保洁、火夫、搬运工等。</p>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
            </div>


        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
#contentBox {
    padding: 80px;
    box-sizing: border-box;

    .title {
        margin-bottom: 40px;
    }

    // 基本信息
    .essentialInformation {
        .ul {
            padding-left: 40px;
            box-sizing: border-box;

            li {
                margin: 20px 0;
                padding-left: 40px;
                box-sizing: border-box;
                border-radius: 4px;
                color: #738a94;
                font-weight: bold;
                position: relative;
                background: url('assets/image/spot.png') no-repeat;
                background-position-y:center ;
                background-position-x: -20px;
            }
        }

    }

    // 工作经历
    .workExperience {
        .lineTime {
            padding-left: 40px;

            h3 {
                margin-bottom: 40px;
                font-size: 30px;
            }

            .introduce {
                margin-bottom: 40px;
            }

            /deep/ .el-timeline-item__timestamp.is-top {
                font-size: 40px;
                margin-bottom: 20px;
            }
        }

    }
}
</style>