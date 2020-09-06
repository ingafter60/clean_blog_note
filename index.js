//Import modules(express, path)
const express = require('express')
const path = require('path')

// Express app
const app = new express()

// Static assets folder
app.use(express.static('public'))

// http://localhost:4000/
app.get('/',(req,res)=>{
	res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

// http://localhost:4000/about
app.get('/about',(req,res)=>{
	res.sendFile(path.resolve(__dirname, 'pages/about.html'))
})

// http://localhost:4000/post
app.get('/post',(req,res)=>{
	res.sendFile(path.resolve(__dirname, 'pages/post.html'))
})

// http://localhost:4000/contact
app.get('/contact',(req,res)=>{
	res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})

// Port:
app.listen(4000, ()=>{
console.log('App listening on port 4000')
})