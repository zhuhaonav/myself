var http = require('http'),
    fs = require('fs'),
    url = require('url')

// Nodejs Web服务器
http.createServer((req,res) => {

  let pathname = url.parse(req.url).pathname;
  console.log("request for " + pathname + " received.");

  fs.readFile(pathname.substr(1),(err,data) => {
    if(err){
      console.log(err);
      res.writeHead(404,{'Context-Type':'text/html'})
    }else{
      res.writeHead(200,{'Context-Type':'text/html'})
      res.end(data.toString())
    }
  })
}).listen(8081);