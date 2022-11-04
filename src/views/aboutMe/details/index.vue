<template>
    <div id="contentBox">
        <div class="title">
            <h2>项目经验</h2>
        </div>
        <div class="content">
            <div class="name">
                <span>项目名称：</span><span>智慧康养sass平台</span>
            </div>
            <div class="describe">
                <span>项目描述：</span><span>针对医院养老院等机构开发的康养平台，包含运营端，企业端，物联网端，小程序，大屏等</span>
            </div>
        </div>
        <div class="technology">
            <span>技术栈：</span><span>react+antdesign+antdesignPro+hooks+typeScript+antVG2Plot</span>
        </div>
        <div class="responsibility">
            <span>责任描述：</span>企业端 <a target=“_blank”
                href="http://test-member.hopekoruit.com">http://test-member.hopekoruit.com</a>
            <ul>
                <li>1，长者生理参数展示，通过选择的不同时间，展示不同格式的数据报表，横坐标为时间段，纵坐标为对应的值。包括睡眠，呼吸，体温，心率，血压，血糖，血脂等。</li>
                <li>2，预警策略配置，包括呼吸，体温，心率，血压，血糖，血脂等等。设置预警值，最低值和最高值等等</li>
                <li>3，入住费用的分类配置（床位费，其他费），对表格进行拖拽排序。照护等级，用户自定义等级字段颜色。查看相关服务（医疗护理，基础生活护理），并通过tree树进行相关配置</li>
                <li>4，服务管理，配置相关的服务项，包括类型，智能监测，频次，费用等配置。</li>

            </ul>
        </div>

    </div>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
#contentBox {
    .title {
        border-bottom: 8px solid #916dd5;

        h2 {
            display: inline;
            padding: 0 10px;
            border-radius: 4px;
            background: #916dd5;
            color: #fff;
            line-height: 0;
        }
    }
}
</style>