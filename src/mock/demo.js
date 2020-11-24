import Mock from 'mockjs';
import commonConfig from '@/tool/config';
const baseURL = commonConfig.prefixServer; //接口前缀
Mock.setup({ timeout: '100-1000' });
/**
 * 已分配任务列表
 */
Mock.mock(`${baseURL}/task/assigned`, "get", (params) => {
    console.log('param', JSON.parse(params.body))
    return Mock.mock({
        code: 0,
        msg: 'Mock接口模拟数据',
        data: {
            "asc": true,
            "column": "createTime",
            "current": 1,
            "pages": 2,
            "total": 10,
            "records|10": [{
                "dataReader": function() {
                    return [`主题${this.dataReadTimes}`];
                },
                "dataReadTimes|30-500": 100,
                "createTime": "2020-09-08 16:28:52",
                "lastReadTime": "2020-10-13 10:22:15",
                'topic': '@name'
            }]
        }
    })
});

/**
 * 完成任务(类似删除接口)
 */
Mock.mock('/workflow/task/complete', "post", (params) => {
    console.log('param', JSON.parse(params.body))
    return Mock.mock({
        code: 0,
        msg: '操作成功'
    })
});












Mock.mock(`${baseURL}/topic/queryalltopic`, "get", (params) => {
    console.log('param', JSON.parse(params.body))
    return Mock.mock({
        code: 0,
        msg: 'Mock接口模拟数据',
        data: {
            "asc": true,
            "column": "createTime",
            "current": 1,
            "pages": 2,
            "total": 10,
            "records|10": [{
                "dataReader": function() {
                    return [`主题${this.dataReadTimes}`];
                },
                "dataReadTimes|30-500": 100,
                "createTime": "2020-09-08 16:28:52",
                "lastReadTime": "2020-10-13 10:22:15",
                'topic': '@name'
            }]
        }
    })
});

Mock.mock(`${baseURL}/task/complete`, "post", (params) => {
    console.log('param', JSON.parse(params.body))
    return Mock.mock({
        code: 0,
        msg: 'Mock接口模拟数据',
        data: {
            "asc": true,
            "column": "createTime",
            "current": 1,
            "pages": 2,
            "total": 10,
            "records|10": [{
                "dataReader": function() {
                    return [`主题${this.dataReadTimes}`];
                },
                "dataReadTimes|30-500": 100,
                "createTime": "2020-09-08 16:28:52",
                "lastReadTime": "2020-10-13 10:22:15",
                'topic': '@name'
            }]
        }
    })
});