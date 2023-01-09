const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blogRoute');
const { urlencoded } = require('express');
const dbURL = 'mongodb+srv://Yaewint:passw0rd123@nodelearn.km36o49.mongodb.net/Node-tuts?retryWrites=true&w=majority' 
// import express from 'express';
//passw0rd123

const app = express();
app.set('view engine','ejs')
app.use(express.urlencoded())
app.use(express.static('public'))
mongoose.connect(dbURL,{useNewUrlParser : true , useUnifiedTopology : true })
    .then((result)=>{
        app.listen(3000,()=>{
            console.log('server is running');
        })
    })
    .catch((error)=>console.log(error));


app.get('/',(req,res)=>{
    res.redirect('/blogs');
});
app.get('/home',(req,res)=>{
    res.redirect('/');
});

app.get('/about',(req,res)=>{
    res.render('about',{title:"About"});
});
app.get('/contact',(req,res)=>{
    res.render('blogs/contacts',{title:"Contact"});
})
app.use('/blogs',blogRouter);
app.use((req,res)=>{
    res.status(404).render('404');
});