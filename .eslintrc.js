/**
 * "off" 或 0 - 关闭规则
 * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 * https://cn.eslint.org/docs/rules/
 */
module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true
    },
    // extends: ["plugin:vue/essential", "@vue/prettier"],
    extends: ['plugin:vue/essential'],
    plugins: ['vue'], // 检测vue文件
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)'],
            env: {
                mocha: true
            }
        }
    ],

    // add your custom rules here
    rules: {
        // //////////////////
        // /// vue.规范 /////
        // /////////////////
        'vue/name-property-casing': [1, 'PascalCase'],    // JS/JSX中的组件名应该始终是帕斯卡命名法
        'vue/prop-name-casing': [1, 'camelCase'],         // 在声明prop的时候，其命名应该始终使用驼峰命名
        // //////////////////
        // /// js.规范 /////
        // /////////////////
        // 生产环境禁止使用console 和debugger
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: [2, 4], // 4个空格的缩进
        quotes: [2, 'single'], // js使用单引号
        'linebreak-style': [0, 'error', 'windows'], // 允许windows开发环境
        semi: [2, 'never'], // 语句强制分号结尾
        'no-unused-vars': [1], // 声明了变量但是没有使用检测
        'space-unary-ops': [1, { words: true, nonwords: false }], // 一元运算符的前/后要不要加空格
        'brace-style': [2, '1tbs', { allowSingleLine: false }], // 大括号风格
        'comma-spacing': [2, { before: false, after: true }], // 逗号后有空格，前没有空格
        'comma-style': [2, 'last'], // 逗号跟在结尾
        'eqeqeq': [0, 'always', { 'null': 'ignore' }], // 是否使用全等
        'key-spacing': [2, { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
        'lines-around-comment': [
            // 行前/行后备注
            2,
            {
                beforeBlockComment: false, // 段注释的前后
                beforeLineComment: false, // 行注释的前面
                afterBlockComment: false, // 块注释的后面
                afterLineComment: false, // 行注释的后面
                allowBlockStart: true,
                allowObjectStart: true,
                allowArrayStart: true
            }
        ],
        'max-depth': [2, 4], // 代码最多允许4层嵌套
        'max-len': [0, 80, 2], // 一行的长度为80  ，tab制表符为2长度
        'max-nested-callbacks': [2, 3], // 回调嵌套深度
        'max-statements': [1, 100], // 单个函数最多100条语句
        'no-array-constructor': [2], // 禁止使用数组构造器
        'no-lonely-if': 2, // // 禁止else语句内只有if语句
        'no-multiple-empty-lines': [2, { max: 3, maxEOF: 1 }], // 空行最多不能超过2行
        'no-nested-ternary': 2, // 不使用嵌套的三元表达式
        'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
        'no-trailing-spaces': 2, // 一行结束后面不要有空格
        'no-unneeded-ternary': 2, // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;简单的判断用三元表达式代替
        'object-curly-spacing': [
            2,
            'always',
            {
                // 大括号内是否允许不必要的空格 always始终允许；never始终不允许
                objectsInObjects: false,
                arraysInObjects: false
            }
        ],
        'arrow-spacing': 2, // =>的前/后括号
        'block-scoped-var': 2, // 块语句中使用var
        'no-dupe-class-members': 2,
        'no-var': 1, // 禁用var，用let和const代替
        'object-shorthand': [1, 'always'], // 强制对象字面量缩写语法
        'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
        'operator-linebreak': [2, 'after'], // 换行时运算符在行尾还是行首
        'semi-spacing': [2, { before: false, after: true }], // 分号前后空格
        'keyword-spacing': ['error'],
        'space-before-blocks': 2, // 不以新行开始的块{前面要不要有空格
        'block-spacing': [2, 'always'],
        'space-before-function-paren': [2, 'never'], // 函数定义时括号前面要不要有空格
        'space-in-parens': [2, 'never'], // 小括号里面要不要有空格
        'spaced-comment': [
            1,
            'always',
            {
                exceptions: ['-', '*', '+']
            }
        ], // 注释风格要不要有空格什么的
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
    },
    globals: {
        $: false,
        jquery: false,
        ActiveXObject: false,
        arbor: true,
        layer: false
    }
}
