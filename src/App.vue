/** 主页 */
<template>
		<el-container class="index-con">

				<el-aside class="menu-page" width="248">
					<el-scrollbar>
						<leftNav></leftNav>
					</el-scrollbar>
				</el-aside>
        <el-container class="container-page">
          <el-header>
            <headerNav></headerNav>
          </el-header>
          <el-main>

					<div class="main-page">
						<el-breadcrumb
							separator-class="el-icon-arrow-right"
						>
							<el-breadcrumb-item>标题1</el-breadcrumb-item>
							<el-breadcrumb-item>标题2</el-breadcrumb-item>
						</el-breadcrumb>
						<router-view class="main-content"></router-view>
					</div>
				</el-main>

			</el-container>
		</el-container>
</template>
<script>
// 导入组件
import headerNav from './components/header.vue'
import leftNav from './components/leftNav.vue'
// import Cookies from 'js-cookie'
export default {
    name: 'Index',
    data() {
        return {
            showclass: 'asideshow',
            showtype: false,
            isShowleft: true,
        }
    },
    // 注册组件
    components: {
        headerNav,
        leftNav,
    },
    methods: {},
    created() {},
    mounted() {
        // let url = Cookies.get('RedirectUrl')
        // if (url && url.includes('nodata')) {
        //     this.isShowleft = false
        // } else {
        //     this.isShowleft = true
        // }
    },
    beforeUpdate() {},
    // 挂载前状态(里面是操作)
    beforeMount() {},
    destroyed() {},
}
</script>
<style lang="scss">
@import './assets/css/common.scss';
html,
body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  /*左右居中*/
  justify-content: center;
  /*上下居中*/
  // align-items: center;
}
.container-page {
	display: flex;
	overflow: hidden;
}
.menu-page {
	width: 248px;
	background-color: var(--menu-bg-color);
	color: #fff;
}

.index-con {
	height: 100%;
	width: 100%;
	box-sizing: border-box;
}
.el-main {
	background-color: var(--bg-color);
}
.main-page {
	display: flex;
	flex-direction: column;
	// flex: 1;
	height: 100%;

	// overflow: hidden;
}
.main-content {
	margin-top: 18px;
	flex: 1;
	background-color: #fff;
}
</style>
