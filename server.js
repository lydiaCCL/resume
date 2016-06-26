var http=require('http');

http.createServer(function (req,res) {
//发生HTTP头部
//HTTP状态值：200：OK
//内容类型：text/plain
    res.writeHead(200,{'Content-Type':'text/plain'});
    
    //发送响应数据“Hello World"
    res.end('Hello node.js\n');
}).listen(1337,'127.0.0.1');

//终端打印如下信息
console.log('Server running at http://127.0.0.1:1337/');