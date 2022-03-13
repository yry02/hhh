const { read } = require('fs');
const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    // 1、获取url地址
    const url = req.url;
    console.log(url)
    // 2、设置默认的响应内容---404 Not Found
    let content = `<h1>404 Not Found</h1>`
    // 3、判断用户输入的地址是否为/或者/index.html
    // 4、判断用户输入的地址是否为/about.html
    if(url === '/' || url === '/index.html'){
        content = `<h1>这是服务器的首页</h1>`
    }else if(url  === '/about.html'){
        content = `<h1>这是服务器的关于页面</h1>`
    }
    // 5、设置编码方式防止乱码
    res.setHeader('Content-Type','text/html;charset=utf-8')
    // 6、给予不同的响应内容
    read.end(content)
})
server.listen('8020',()=>{
    console.log('服务器运行在本地服务器的8020端口上')
})
