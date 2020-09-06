//Import modules(express, path, ejs )
const express = require('express')
const path = require('path')
const ejs = require('ejs')

// Express app
const app = new express()

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