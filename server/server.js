
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.static('static'))
app.use(bodyParser.json())

const datas = require('../datas/data')

//例子1
app.get('/api/ztree/data', function(req, res){
    let ztree = datas.data1
    res.json({"ztree": ztree})
})
//例子2
app.get('/api/ztree/data2', function(req, res){
    let ztree = datas.data2
    res.json({"ztree": ztree})
})
//例子3 url链接
app.get('/api/ztree/data3', function(req, res){
    let ztree = datas.data3
    res.json({"ztree": ztree})
})
//例子4
app.get('/api/ztree/data4', function(req, res){
    let ztree = datas.data4
    res.json({"ztree": ztree})
})

//例子5 复选框
app.get('/api/ztree/data5', function(req, res){
    let ztree = datas.data5
    res.json({"ztree": ztree})
})
app.listen(8080, function(){
    console.log('连接成功')
} )