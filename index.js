//Import modules(express)
const express = require('express')

// Express app
const app = new express()

// Port:400
app.listen(4000, ()=>{
console.log('App listening on port 4000')
})