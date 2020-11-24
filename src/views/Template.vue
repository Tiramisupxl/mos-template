<template>
    <div>1221</div>
</template>

<script>
export default {
    // 数据相关
    props: {}, // 外部传入数据，组件使用，务必使用对象形式以及设置每个属性的默认值
    data() {
        // 数据存放
        return {
            msg: '121',
        }
    },

    computed: {}, // 计算属性
    watch: {}, // 监听属性 // 钩子函数
    created() {
        console.log(1111)
    },
    mounted() {},
    destroyed() {}, // 方法逻辑处理
    methods: {}, // 组件相关
    components: {}, // 组件
    directives: {}, // 指令
    mixins: [] // 混入
}
</script>

<style lang="scss" scoped></style>
