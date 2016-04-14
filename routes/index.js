var express = require('express');
var Book = require('../schema/Book');
var fs = require('fs');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
	  title: 'Search',
	  searchButton: 'active',
	  aboutButton: '',
	  contactButton: '',
	  uploadButton: ''
	  });
});

/* GET autofill */
router.get('/autofill', function(req, res, next) {
		var query = req.query.word;
		if(!query) {
			res.send([]);
			return;
		}
		Book.find({'title': new RegExp(query, "i")}, function(err, books) {
			if(err){
				console.log(err);
				res.send([]);
			} else {
				res.send(books.map(function(book) {return {'title': book.title, 'isbn': book.isbn, 'authors': book.authors, 'imageUrl': book.imageUrl}}));
			}
		})
		// db.books.find({title: { $in: [/ga/i]} }).toArray().map(function(x) {return x.title})
});

/*GET search results*/
router.get('/search',function(req, res, next) {
	var query = req.query.query;
	var location = req.query.location;
	var file = path.join(__dirname,'../data/searchResult.json');
	fs.readFile(file, 'utf8', function (err,data) {
	  if (err) {
		return next(new Error('data not found: '+err.message));
	  }
	  res.send(data);
	});
});

/* GET about page. */
router.get('/about',function(req, res, next) {
    res.render('about',{
		title: 'About',
		searchButton: '',
		aboutButton: 'active',
		contactButton: '',
		uploadButton: ''
	});
});

/* GET upload page. */
router.get('/upload',function(req, res, next) {
    res.render('upload',{
		title: 'Upload',
		searchButton: '',
		aboutButton: '',
		contactButton: '',
		uploadButton: 'active'
	});
});

/* POST upload page. */
router.post('/uploadBook',function(req, res, next) {
	console.log(req.body);
	var book = new Book(req.body);
	book.save(function(err, obj) {
		if(err) {
			res.send({"message": "something went wrong"});
		} else {
			res.send({"message": "saved"});
		}
	});
//  res.render('upload',{
//    title: 'Upload',
//    searchButton: '',
//    aboutButton: '',
//    contactButton: '',
//    uploadButton: 'active'
//  });
});

module.exports = router;
