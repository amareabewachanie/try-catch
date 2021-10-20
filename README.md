# try-catch
  handling callbacks with async/await on node js server req,res pipeline without managing try{}catch(){}.
  Just wrape your req,res pipeline with a tryCatchAsync method, then it handles the rest.
# Install the dependency
```sh
npm install try_catch_req
```
 # Example
 
```node
const express=require('express');
const tryCatch=require('./index')
const app=express();

app.use(express.json())
app.post('/test',tryCatch(async(req,res,next)=>{
    const {name,job}=req.body;
    res.status(201).json({message :`Well come ${name}, Are you really a ${job}?`})}));
module.exports=app;
```
