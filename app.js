/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();
const figlet = require('figlet');
const chalk = require('chalk');
const path = require('path');
const dayjs = require('dayjs');

// 初始化数据库
require('./utils/db');

// 渲染静态资源
app.use(express.static(path.join(__dirname, 'public')));

// 对传入的请求体进行解析
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 请求中间件
app.use("/", (req, res, next) => {
    console.log(chalk.cyan(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] ${req.url} 请求信息：`));
    console.log(req);
    next();
});

// 路由中间件
app.use('/api/test', require('./routes/test'));
app.use('/api/post', require('./routes/post'));

// 404
// app.use(function(req, res) {
//     // res.send('404');
// });

// 错误处理中间件
app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
        message : err.message,
        errors  : err.stack
    });
});

// 炫酷但没啥用的文字工具
figlet('blog-api', (err, data) => console.log(data));

// 监听端口
const port = 3000;
app.listen(port, () => {
    console.log(chalk.cyan('\nblog-api启动成功: ') + `http://localhost:${port}`);
    console.log(chalk.cyan('\n接口文档: ') + `http://localhost:${port}/apidoc`);
});
