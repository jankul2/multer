import express from "express";
import router from './router/mainRoute.js'
import adminRouter from './router/adminRoute.js'
import path, { delimiter } from 'path';
import ejs from 'ejs';
import createError from 'http-errors';
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const port=process.env.port || 8000;
app.use(router)
app.use('/admin',adminRouter)
app.set('view engine','ejs');
app.set('open_optins',{delimiter:'?'});
const __dirname=path.join(path.resolve(),'/views/');
app.use(express.static(__dirname));
//404 error handler

app.use((req, res, next)=>{
  res.status(404);
  next(createError(404,'page is not found!')); 
  });
 
  //error handler
  app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({error:{status:err.status|| 500 , message:err.message}});
  })

console.log(__dirname)
app.listen(port,()=>console.log(`serve is runing on http://localhost:${port}`));
