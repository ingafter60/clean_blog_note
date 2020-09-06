//Import modules(mongoose)
const mongoose = require('mongoose')

// Use MongoDb Schema to create db schema
const Schema = mongoose.Schema;

// Define BlogPost schema
const BlogPostSchema = new Schema({
	title: String,
	body: String
});

// Create database module
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);

// Export db module
module.exports = BlogPost
