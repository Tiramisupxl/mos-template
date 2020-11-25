/**
* 左边菜单
*/
<template>
   <mos-nav name="系统名称" :menu="menu" @select="handleSelect"></mos-nav>
</template>
<script>

export default {
    name: 'LeftNav',
    data() {
        return {
            menu: [
                {
                    name: '导航一',
                    route: '',
                    children: [
                        {
                            name: '选项1',
                            route: '/'
                        },
                        {
                            name: '选项2',
                            route: '/'
                        }
                    ]
                },
                {
                    name: '导航二',
                    route: '/2',
                    children: [
                        {
                            name: '选项1',
                            route: '/'
                        },
                        {
                            name: '选项2',
                            route: '/'
                        }
                    ]
                },
                {
                    name: '导航三',
                    route: '/3',
                    children: [
                        {
                            name: '选项1',
                            route: '/'
                        },
                        {
                            name: '选项2',
                            route: '/'
                        }
                    ]
                }
            ]
        }
    },
    watch: {

    },
    computed: {

    },
    created() {

    },
    mounted() {},
    components: {

    },
    methods: {
        handleSelect(index) {
            console.log(index)
        }
    },
    beforeMount() {},
}
</script>
<style lang="scss" scoped>
.menu-box {
    border: 0;
    background-color: var(--menu-bg-color);
}
/deep/ {
    .el-menu {

        background-color: var(--menu-bg-color);
    }
}

</style>