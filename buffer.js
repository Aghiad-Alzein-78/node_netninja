const fs=require('fs');
const http=require('http');
const file='./anime_dancing.mp4';
const {print}=require('./utils')
const server=http.createServer((req,res)=>{
    fs.readFile(file,(error,data)=>{
        if(error){
            print(error.message);
        }
        res.writeHeader(200,{'Content-Type':'video/mp4'})
        res.end(data);
    })
})
server.listen(3000,"192.168.1.109",()=>{print("Buffering on 3000 port")})