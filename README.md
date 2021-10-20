# try-catch
 handling callbacks with async/await on node js server req,res pipeline without managing
  ```node
  try{ 
  // the progrm that will cause exception 
  }catch(){
  // handling when the exception has happened
  }
  ```
Just wrape your req,res pipeline with a tryCatch method by importing from this library, then it handles the rest.
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
    // you can call any async functions with await keyword,
    // Incase if exception throws that function the library handles automatically.
    res.status(201).json({message :`Well come ${name}, Are you really a ${job}?`})}));
module.exports=app;
```
