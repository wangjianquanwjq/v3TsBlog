<template>
    <div id="contentBox">
        <div class="title">
            <h2> 深拷贝浅拷贝的原理</h2>
        </div>
        <!-- 什么是深浅拷贝 -->
        <div class="whatIsCopy">
            <div class="deep mt20px textIndent40px">
                <span class="title"> [深拷贝]:</span>
                深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象（新旧对象不共享同一块内存）,且修改新对象不会影响原对象（深拷贝采用了在堆内存中申请新的空间来存储数据，这样每个可以避免指针悬挂）
            </div>
            <div class="shallow mt20px textIndent40px">
                <span class="title"> [浅拷贝]:</span>
                如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址（新旧对象共享同一块内存），所以如果其中一个对象改变了这个地址，就会影响到另一个对象（只是拷贝了指针，使得两个指针指向同一个地址，这样在对象块结束，调用函数析构的时，会造成同一份资源析构2次，即delete同一块内存2次，造成程序崩溃）；
            </div>
        </div>
        <br>
        <!-- 介绍基本类型和应用类型 -->
        <div class="typeIntroduce">
            <h3>&emsp;1,基本类型和引用类型</h3>
            <div class="basicType mt20px">
                &emsp; &emsp;1，String,Number,Boolean,Null,Undefined,Symbol（按值访问的）
            </div>
            <div class="quoteType mt20px">
                &emsp; &emsp;2，Object,Function,Array（按引用访问的）
            </div>
        </div>
        <br>
        <div class="hljs-container" codetype="JavaScript" v-code>
            <!-- 把数据绑定到 `code` 属性-->
            <highlightjs autodetect :code="code" />
            <!--或者直接将显示的代码写到 `code`中 -->
            <!-- <highlightjs language='javascript' code="var x = 5;" /> -->
        </div>

    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import vCode from '@/utils/CopyCode'
const code = ref(`let a = 1;

import hljs-containerVuePlugin from '@highlightjs/vue-plugin';import hljs-containerVuePlugin from '@highlightjs/vue-plugin';import hljs-containerVuePlugin from '@highlightjs/vue-plugin';

import hljs-containerVuePlugin from '@highlightjs/vue-plugin';

<div class="hljs-container" codetype="JavaScript" v-code>

    <highlightjs language="JavaScript" :autodetect="false" :code="code"></highlightjs>

</div>`)
</script>
<style lang="less" scoped>
.whatIsCopy {
    .title{
        font-size: 40px;
        font-weight: bold;
        color: #916dd5;
    }
}








.typeIntroduce {
    .basicType {
        text-align: justify;
        word-break: break-all; //英文断行
    }
}
</style>