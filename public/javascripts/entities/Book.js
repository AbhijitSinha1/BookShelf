var Book = new function(i, n, a, g, r, c, s, u) {
	var id, name, author, genre, rating, condition, status, imageUrl;
	this.BookStatus = Object.freeze({"LOCKED":0, "UNLOCKED":1});
	
	if(!i) {
		throw new BookError("id not provided");
	}
	if(!n) {
		throw new BookError("name not provided");
	}
	if(!a) {
		throw new BookError("author not provided");
	}
	if(!g) {
		throw new BookError("genre not provided");
	}
	if(!r) {
		throw new BookError("rating not provided");
	}
	if(!c) {
		throw new BookError("condition not provided");
	}
	if(!s) {
		throw new BookError("status not provided");
	}
	if(BookStatus.indexOf(s) < 0) {
		throw new BookError("status invalid");
	}
	if(!u) {
		throw new BookError("image url not preovided");
	}
	
	id = i; name = n; genre = g; rating = r; condition = c; status = s, u = imageUrl;
	
	this.getId = function() {
		return id;
	};
	this.getName = function() {
		return name;
	};
	this.getAuthor = function() {
		return author;
	};
	this.getGenre = function() {
		return genre;
	};
	this.getRating = function() {
		return rating;
	};
	this.getCondition = function() {
		return condition;
	};
	this.getStatus = function() {
		return status;
	};
	this.getImageUrl = function() {
		return imageUrl;
	}
}
