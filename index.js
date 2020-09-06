//Import modules(express)
const express = require('express')

// Express app
const app = new express()

// Static assets folder
app.use(express.static('public'))

// Port:
app.listen(4000, ()=>{
console.log('App listening on port 4000')
})