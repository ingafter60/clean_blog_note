//Import modules(mongoose)
const mongoose = require('mongoose')

//Import blog model
const BlogPost = require('./models/BlogPost')
var mongoDB = 'mongodb://127.0.0.1/clean_blog';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

BlogPost.create({
title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics…'
}, (error, blogpost) =>{
console.log(error, blogpost)
})