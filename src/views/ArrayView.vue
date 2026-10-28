<template>
    <div>
        <div>
            <span>原数组</span>
        </div>
        <div>
            <span>{{ array }}</span>
        </div>
        <div>
            <span>返回的值</span>
            <span>{{ result }}</span>
        </div>
    </div>
    <div>
        <button @click="addItem">push</button>
        <button @click="removeItem">pop</button>
        <button @click="shiftItem">shift</button>
        <button @click="unshiftItem">unshift</button>

        <button @click="reverseArray">reverse</button>
        <button @click="sortArray">sort</button>
        <button @click="clearArray">clear</button>

        <button @click="mapArray">map</button>
        <button @click="filterArray">filter</button>    
        <button @click="reduceArray">reduce</button>
        <button @click="foreach">foreach</button>

        <button @click="findArray">find</button>
        <button @click="findIndexArray">findIndex</button>
        <button @click="includesArray">includes</button>

        <button @click="everyArray">every</button>
        <button @click="someArray">some</button>
        <button @click="joinArray">join</button>

        <button @click="sliceArray">slice</button>
        <button @click="spliceArray">splice</button>
        <button @click="concatArray">concat</button>

        <button @click="copyWithinArray">copyWithin</button>
        <button @click="fillArray">fill</button>
        <button @click="isArrayArray">isArray</button>
        <button @click="lengthArray">length</button>

        <button @click="toStringArray">toString</button>
        <button @click="valueOfArray">valueOf</button>



    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const array = ref([1, 2, 3, 4, 5])
const result = ref('')
const addItem = () => {
    result.value = ''
    result.value = array.value.push(6)
    // 返回的是数组的长度
}
const removeItem = () => {
    result.value = ''
    result.value = array.value.pop()
    // 返回的是被删除的元素
}
const shiftItem = () => {
    result.value = ''
    result.value = array.value.shift()
    // 返回的是被删除的元素
}
const unshiftItem = () => {
    result.value = ''
    result.value = array.value.unshift(0)
    // 返回的是数组的长度
}
const reverseArray = () => {    
    result.value = ''
    result.value = array.value.reverse()
    // 返回的是反转后的数组
}
const sortArray = () => {
    result.value = ''
    result.value = array.value.sort()
    // 返回的是排序后的数组
}
const clearArray = () => {
    result.value = ''
    result.value = array.value.length = 0
    array.value = []
}
const mapArray = () => {
    result.value = ''
    result.value = array.value.map(item => item * 2)
    // 返回的是新数组
}
const filterArray = () => {
    result.value = ''
    result.value = array.value.filter(item => item > 3)
    // 返回的是新数组
}
const reduceArray = () => {
    result.value = ''
    result.value = array.value.reduce((acc, item) => acc + item, 0)
    // 返回的是累加后的值
}
const foreach = () => {
    result.value = ''
    array.value.forEach(item => {
        result.value += item
    })
    // 返回的是每个underfind
}
const findArray = () => {
    result.value = ''
    result.value = array.value.find(item => item > 3)
    // 返回的是第一个满足条件的元素
}
const findIndexArray = () => {
    result.value = ''
    result.value = array.value.findIndex(item => item > 3)
    // 返回的是第一个满足条件的元素的索引
}
const includesArray = () => {
    result.value = ''
    result.value = array.value.includes(3)
    // 返回的是是否包含该元素
}
const everyArray = () => {
    result.value = ''
    result.value = array.value.every(item => item > 3)
    // 返回的是是否所有元素都满足条件
}   
const someArray = () => {
    result.value = ''
    result.value = array.value.some(item => item > 3)
    // 返回的是是否至少有一个元素满足条件
}
const joinArray = () => {
    result.value = ''
    result.value = array.value.join(',')
    // 返回的是连接后的字符串
}
const sliceArray = () => {
    result.value = ''
    result.value = array.value.slice(0, 3)
    // 返回的是截取后的数组，包括前不包括后
}
const spliceArray = () => {
    result.value = ''
    result.value = array.value.splice(1, 3)
    // 返回的是截取后的数组
}
const concatArray = () => {
    result.value = ''
    result.value = array.value.concat([6, 7, 8])
    // 返回的是连接后的数组
}
const copyWithinArray = () => {
    result.value = ''
    result.value = array.value.copyWithin(1, 3, 5)
    // 返回的是复制后的数组
}
const fillArray = () => {
    result.value = ''
    result.value = array.value.fill(0)
    // 返回的是填充后的数组
}
const isArrayArray = () => {
    result.value = ''
    result.value = Array.isArray(array.value)
    // 返回的是是否是数组
}
const lengthArray = () => {
    result.value = ''
    result.value = array.value.length
    // 返回的是数组的长度
}
const toStringArray = () => {
    result.value = ''
    result.value = array.value.toString()
    // 返回的是连接后的字符串
}
</script>