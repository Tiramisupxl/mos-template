const path = require('path')

module.exports = {
    publicPath:
        //部署应用包时的基本 URL
        process.env.NODE_ENV === 'production' ? './' : '',
    //  当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'static',
    // 生成的静态资源是否包含hash值
    filenameHashing: true,
    // 在开发环境下通过 eslint-loader 在每次保存时 lint 代码
    lintOnSave: process.env.NODE_ENV !== 'production',
    // 本地服务
    devServer: {
        // 让浏览器 overlay 同时显示警告和错误
        overlay: {
            warnings: true,
            errors: false
        },
        port: 8080,
        // 代理服务
        proxy: {
            '/api': {
                target: 'http://0.0.0.0', // 代理接口的域名
                ws: true,
                changeOrigin: true
            },
        },
        https: false
    },
    chainWebpack: config => {
        // 设置快捷路径，
        config.resolve.alias
            .set('@', path.resolve('src'))
            .set('_c', path.resolve('src/components'))
    },
    // source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false
}
