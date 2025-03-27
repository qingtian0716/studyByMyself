const express = require('express');
const path = require('path');
const userModel = require('./model/user');
const app = express();

// 允许跨域请求
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// API路由需要在静态文件服务之前
app.get('/api/users', (req, res) => {
    const name = req.query.name;
    const result = userModel.query(name);
    res.json(result || []);
});

// 静态文件服务
app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});