import { Loading } from 'element-ui'
// loading
let loading
// 当前正在请求的数量
let needLoadingRequestCount = 0
// 显示loading
function showLoading(target) {
    // 后面这个判断很重要，因为关闭时加了抖动，此时loading对象可能还存在，
    // 但needLoadingRequestCount已经变成0.避免这种情况下会重新创建个loading
    if (needLoadingRequestCount === 0 && !loading) {
        loading = Loading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(255, 255, 255, 0.5)',
            target: target || 'body',
        })
    }
    needLoadingRequestCount++
}

// 隐藏loading
function hideLoading() {
    needLoadingRequestCount--
    needLoadingRequestCount = Math.max(needLoadingRequestCount, 0) // 做个保护
    if (needLoadingRequestCount === 0) {
        // 关闭loading
        toHideLoading()
    }
}

// 防抖：将 300ms 间隔内的关闭 loading 便合并为一次。防止连续请求时， loading闪烁的问题。
var toHideLoading = _.debounce(() => {
    loading && loading.close()
    loading = null
}, 300)

export default { showLoading, hideLoading }