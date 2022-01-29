const express =require("express");
const app=express();
const path=require("path");
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/contacts',(req,res)=>{
    res.sendFile(path.join(__dirname,'contacts.html'));
})

app.get('/profile/:name',(req,res)=>{
    var data={age:29,job:'ninja',hobbies:["eating","sport","programming","reading","walking"]}; 
    res.render('profile',{person:req.params.name,data:data});
})
app.listen(3000);