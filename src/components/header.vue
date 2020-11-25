/**
* 头部菜单
*/
<template>
    <nav class="flex-box nav-page">
        <div class="nav-right flex-box">
            <div class="sys-name">
                系统
                <small>V1.0</small>
            </div>
            <div class="sys-action">
                <el-dropdown class="adminInfo flex-box">
                    <span class="el-dropdown-link">
                        <i class="iconfont icon-person"></i>
                        admin
                        <i
                            class="el-icon-arrow-down el-icon--right"
                        ></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>账户详情</el-dropdown-item>
                        <el-dropdown-item>账户设置</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <!-- <el-dropdown-item divided  @click="exit()">退出</el-dropdown-item> -->
                    </el-dropdown-menu>
                </el-dropdown>
                <div class="btn-exit flex-box">
                    <i class="iconfont icon-exit"></i>
                    <span>退出</span>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>


export default {
    name: 'HeaderNav',
    // 注册组件
    components: {
    },
    data() {
        return {
            loginInfo: null,
            collapsed: true,
        }
    },
    // 创建完毕状态(里面是操作)
    created() {
        // getLoginInfo().then(res => {
        //   if (res.message === "OK") {
        //     //如果请求成功就让他2秒跳转路由
        //     this.loginInfo = res.data;
        //   } else {
        //     this.$message.error(res.msg);
        //   }
        // });
    },
    methods: {

    }
}
</script>
<style lang='scss' scoped>
.nav-page {
    height: 48px;
    color: var(--theme-color);
    .nav-left {
        width: 248px;
        text-align: center;
        background-color: var(--theme-color);
        .logo {
            margin-top: 13px;
            width: 98px;
            height: 22px;
        }
    }
    .nav-right {
        flex: 1;
        justify-content: space-between;
        align-items: center;
    }
    .sys-name {
        margin-left: 17px;
        font-size: 18px;
        font-weight: bold;
        small {
            font-size: 10px;
            margin-left: 10px;
        }
    }
    .sys-action {
        display: flex;
        align-items: center;
        padding-right: 12px;
    }
    /deep/ .el-dropdown {
        color: var(--theme-color);
        cursor: pointer;
    }
    .iconfont {
        margin-right: 5px;
        font-size: 27px;
    }
    .btn-exit {
        margin-left: 10px;
        align-items: center;
        cursor: pointer;
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    border: none;
}
.submenu {
    float: right;
}
.buttonimg {
    height: 60px;
    background-color: transparent;
    border: none;
}

.el-menu--horizontal > .el-menu-item {
    float: right;
    height: 60px;
    line-height: 60px;
    margin: 0;
}

.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid #409eff;
}
.el-dropdown-link {
    line-height: 48px;
    display: flex;
    align-items: center;
}

// .el-dropdown-menu__item:hover {
//     background-color: transparent;
// }

.box-card {
    width: 300px;
    border: none;
    box-shadow: none;
}
.clearfix {
    height: 5px;
    line-height: 5px;
    color: #409eff;
    font-size: 14px;
}
.text {
    font-size: 12px;
    margin-bottom: 5px;
}
.infoValue {
    margin-left: 10px;
    font-size: 12px;
    color: #666666;
}
.loginInfo {
    display: flex;
    flex-direction: column;
}
.infoName {
    display: inline-block;
    width: 90px;
    text-align: right;
}
</style>