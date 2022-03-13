const fs = require('fs')
const path = require('path')
const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    const url = req.url
    const fpath = path.join(__dirname,url)
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        if (err) return res.end('404 NOT FOUND!')
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end(dataStr)
    })
})
server.listen('8080',()=>{
    console.log('服务器运行在http://127.0.0.1:8080上');
})