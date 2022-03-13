const fs = require('fs')
const path = require('path')
// 1、创建正则表达式
// css正则--1、转移style奇数标签的/
//          2、\s\S表示所有空格和非空格的字符
//          3、[]符合条件的都可以 *匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
// JS正则
const regJS = /<script>[\s\S]*<\/script>/
// 正则方法 正则替换 replace()
// 正则匹配---exec()  参数是匹配的字符串
//        返回值是一个数组 第一个元素就是得到的结果--是一个字符串
// 2、读取文件
fs.readFile(path.join(__dirname,'./index.html'),'utf8',(err,dataStr)=>{
    if (err) return console.log('读取文件失败'+err.message)
    console.log('读取成功')    
    // 如果读取成功调用三个方法写入新文件
    resolveCss(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})
// 3、自定义方法
// resolve ---解析 分解
// 拆解css代码
function   resolveCss(dataStr) {
    // 拿到所有style中间的内容
    const reg1 =  regStyle.exec(dataStr)
    // console.log(reg1)
    // 需要把style标签的字符串去掉，替换为一个''
    const r1 = reg1[0].replace('<style>','').replace('</style>','')
    // 写入新文件
    // console.log(r1)
    fs.writeFile(path.join(__dirname,'/clock/index.css'),r1,(err,dataStr)=>{
           if (err) return console.log('写入文件失败'+err.message)
           console.log('写入成功')
    })
}
// 拆解JS
function resolveJS(dataStr) {
    // 拿到所有script中间的内容
    const reg2 =  regJS.exec(dataStr)
    // console.log(reg1)
    // 需要把style标签的字符串去掉，替换为一个''
    const r2 = reg2[0].replace('<script>','').replace('</script>','')
    // 写入新文件
    // console.log(r2)
    fs.writeFile(path.join(__dirname,'/clock/index.js'),r2,(err,dataStr)=>{
           if (err) return console.log('写入文件失败'+err.message)
           console.log('写入成功')
    })
}
// 拆解HTML文件
function resolveHTML(dataStr){
    const newhtml = dataStr.replace(regStyle,'<link rel="stylesheet" href="./index.css">').replace(regJS,'<script src="./index.js"></script>'); 
    // console.log(newhtml);    
    fs.writeFile(path.join(__dirname,'/clock/index.html'),newhtml,err=>{
        if(err) return('写入html失败')
        console.log('写入html成功')
    })
}