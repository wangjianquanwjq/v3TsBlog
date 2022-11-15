<template>
    <div id="contentBox">
        <div class="title">
            <h2>项目经验</h2>
        </div>
        <div class="content">
            <div class="name">
                <span>项目名称：</span><span>智慧康养平台</span>
            </div>
            <div class="describe">
                <span>项目描述：</span><span>针对医院养老院等机构开发的康养平台，包含运营端，企业端，物联网端，小程序，大屏等</span>
            </div>
        </div>
        <div class="technology">
            <span>技术栈：</span><span class="break-all">react+antdesign+antdesignPro+hooks+typeScript+antVG2Plot</span>
        </div>
        <div class="responsibility">
            <span>企业端：</span> <a target=“_blank”
                href="http://test-member.hopekoruit.com">http://test-member.hopekoruit.com</a>
            <ul>
                <li>1，长者生理参数展示，通过选择的不同时间，展示不同格式的数据报表，横坐标为时间段，纵坐标为对应的值。包括睡眠，呼吸，体温，心率，血压，血糖，血脂等。</li>
                <li>2，预警策略配置，包括呼吸，体温，心率，血压，血糖，血脂等等。设置预警值，最低值和最高值等等</li>
                <li>3，入住费用的分类配置（床位费，其他费），对表格进行拖拽排序。照护等级，用户自定义等级字段颜色。查看相关服务（医疗护理，基础生活护理），并通过tree树进行相关配置</li>
                <li>4，服务管理，配置相关的服务项，包括类型，智能监测，频次，费用等配置。</li>

            </ul>
        </div>


        <div class="responsibility">
            <span>运营端：</span> <a target=“_blank”
                href="http://test-operation.hopekoruit.com">http://test-operation.hopekoruit.com</a>
            <ul>
                <li>1，设备，对设备监测类型进行绑定，对设备进行逻辑的配置。</li>
                <li>2，设备库存，批量导入，根据不通的设备查出设备的库存信息，实现左右表格的联动，配置设备库存的相关信息</li>
                <li>3，检测类型，配置设备的检测类型，包括监测的一些单位。实现与设备的绑定等等</li>
                <li>4，字典，语言包，菜单管理的管理配置等等。</li>
            </ul>
        </div>


        <div class="responsibility">
            <span>小程序（希望智能康养云）：</span>
            <ul>
                <li>1， 小程序请求封装 echarts封装 顶部anv封装 健康档案的公用组件封装。</li>
                <li>2， 健康档案的首页 睡眠分析的Pie图。还包括基础信息，档案记录，设备绑定等等</li>
                <li>3， 健康档案的详情页 通过饼图，环形图，瀑布图，折线图等等，展示包括心率 呼吸 体温 血氧 血糖 血压的详细信息</li>
                <li>4， 小程序扫码硬件设备绑定，扫码通过无线网络进行硬件的绑定，体检一体机的pdf预览</li>
            </ul>
        </div>


        <div class="responsibility">
            <span>大屏项目：</span>
            <a target=“_blank” href="http://test-operatingscreen.hopekoruit.com">运营大屏（react）</a>
            &nbsp;
            <a target=“_blank” href="http://test-healthcenter-bigscreen.hopekoruit.com">机构预警大屏（vue3）</a>
            <ul>
                <li>1， 大屏的数据统计，包括机构统计，健康大数据，长者统计，智能设备，长者列表等等</li>
                <li>2， 和机构中心后台，app配合实现二维码扫描登录，根据登陆者显示对应的数据大屏，使用高德地图对所有养老机构位置进行标点，
                    判断当前机构是否有报警，根据类型显示不同的label，对报警点进行实时的语音播报，并通过屏幕弹幕的方式对报警点进行展示。
                </li>

            </ul>
        </div>





    </div>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
#contentBox {
    .title {
        border-bottom: 8px solid #916dd5;
        margin-bottom: 20px;


        h2 {
            display: inline;
            padding: 0 10px;
            border-radius: 4px;
            background: #916dd5;
            color: #fff;
            line-height: 0;
        }
    }

    .content {
        .name {
            font-size: 40px;
            font-weight: bold;
        }

        .describe {
            margin: 10px 0;
        }
    }

    .responsibility {
        margin: 20px 0;

        span {
            font-size: 40px;
            font-weight: bold;
        }

        ul {
            margin: 20px 0;
        }
    }
}
</style>