// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var bookSchema = new Schema({
  isbn: { type: String, required: true, unique: true },
  title: { type: String, required: true},
  authors: [{ type: String, required: true, unique: true }],
  genre: String,
  rating: Number,
  imageUrl: String,
  created_on: Date,
  updated_on: Date
});

bookSchema.pre('save', function(next) {
	// get the current date
	var currentDate = new Date();

	// change the updated_at field to current date
	this.updated_on = currentDate;

	// if created_at doesn't exist, add to that field
	if (!this.created_at) {
		this.created_on = currentDate;
	}

	next();
});

// the schema is useless so far
// we need to create a model using it
var Book = mongoose.model('Book', bookSchema);

// make this available to our users in our Node applications
module.exports = Book;
