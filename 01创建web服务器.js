const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    // console.log('有人访问了服务器')
    const url = req.url;
    const method = req.method;
    console.log('请求地址是:' + url + '请求方式是：'+ method)
})
server.listen('8020',()=>{
    console.log('服务器运行在：http.//127.0.0.1:8020上')
})
