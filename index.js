//Import modules(express, mongoose, path, ejs )
const express = require('express')
const mongoose = require('mongoose');
const path = require('path')
const ejs = require('ejs')

// Express app
const app = new express()

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/clean_blog';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Static assets folder
app.use(express.static('public'))

// EJS as templating engines
app.set('view engine','ejs')

// http://localhost:4000/
app.get('/',(req,res)=>{
	// res.sendFile(path.resolve(__dirname, 'pages/index.html'))
	res.render('index');
})

// http://localhost:4000/about
app.get('/about',(req,res)=>{
	// res.sendFile(path.resolve(__dirname, 'pages/about.html'))
	res.render('about');
})

// http://localhost:4000/post
app.get('/post',(req,res)=>{
	// res.sendFile(path.resolve(__dirname, 'pages/post.html'))
	res.render('post');
})

// http://localhost:4000/contact
app.get('/contact',(req,res)=>{
	// res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
	res.render('contact');
})

// Port:
app.listen(4000, ()=>{
console.log('App listening on port 4000')
})