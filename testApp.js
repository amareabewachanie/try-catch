const express=require('express');
const tryCatch=require('./index')
const app=express();

app.use(express.json())
app.post('/test',tryCatch(async(req,res,next)=>{
    const {name,job}=req.body;
    res.status(201).json({message :`Well come ${name}, Are you really a ${job}?`})}));
module.exports=app;
