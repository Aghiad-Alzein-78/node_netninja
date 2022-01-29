const fs=require("fs");
const http=require('http');
const file='./anime_dancing.mp4';
const {print}=require('./utils')
http.createServer((req,res)=>{
    res.writeHeader(206,{'Contnet-Type':'video/mp4'});
    fs.createReadStream(file)
        .pipe(res).on('error',()=>{print("Error")})
        
}).listen(3000,'192.168.1.109',()=>{print("Server is running on port 3000")})