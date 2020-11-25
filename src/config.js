const isDevelopment = process.env.NODE_ENV === 'development'

/**
 * 公共配置
 */
const commonConfig = {
    // 系统id
    systemId: 101,
    // #token
    baseToken: '616cef86-68ca-424d-80ea-19cdc39bb222',
    // #ip
    baseHost: isDevelopment ? '10.38.2.12:30090' : '10.38.2.12:30090', // development
    webHost: isDevelopment ? '10.38.2.12:30090' : '10.38.2.12:30090', // websocket-ip
    prefixServer: isDevelopment ? '/databus' : '/workflow', // 接口前缀
}

export default commonConfig