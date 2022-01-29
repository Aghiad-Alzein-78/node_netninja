const fs = require('fs');
const path = require('path')
const http = require('http')


const streamFile=(res,filePath,contentType)=>{
    const myStreamReader = fs.createReadStream(filePath);
    res.writeHead(200,{'Content-Type':contentType})
    myStreamReader.pipe(res)
    myStreamReader.on("end",()=>{
        console.log("finished")
    });
}
const openPage=(res,pageName)=>{
    fs.readFile(path.join(__dirname,pageName),'utf-8',(err,data)=>{
        if(err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    })
}
const openPageStream=(res,pageName)=>{
    const streamRead=fs.createReadStream(path.join(__dirname,pageName),'utf-8');
    res.writeHead(200,{'Content-Type':'text/html'});
    streamRead.pipe(res);
}
const streamJson=(res,fileName)=>{
    const readStream=fs.createReadStream(path.join(__dirname,fileName),'utf-8');
    res.writeHead(200,{'Content-Type':"application/json"})
    readStream.pipe(res);
    readStream.on('end',()=>{
        console.log("json file done")
    })
}
const server=http.createServer((req,res)=>{
    url=req.url;
    console.log(url)
    if(url==="/" || url==="/index.html"){
        openPageStream(res,'index.html')

    }else if(url==='/book.pdf'){
        streamFile(res,path.join(__dirname,'book.pdf'),"application/pdf")
    }else if(url==='/api/names'){
        console.log("JSON SERVING")
        streamJson(res,'names.json')
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end(path.join(__dirname,"404.html"))
    }
})

// myStreamReader.pipe(myStreamWriter);

server.listen(3000,'127.0.0.1',()=>{
    console.log("Working on port 3000")
})











// myStreamReader.on('data', (chunk) => {
//     myStreamWriter.write(chunk);
// })
// myStreamReader.on('end', () => {
//     console.log("finish")
// }) 
