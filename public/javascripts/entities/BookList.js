var BookList = function() {
	var booklist = [];
	
	this.ListType = Object.freeze({"READ":0, "READING":1, "SHARED":2, "WISH":3});
	
	this.addBook = function(book) {
		if(!(book instanceOf Book)) {
			throw new BookListError("only add book to booklist");
		}
		booklist.push(book);
	};
	
	this.updateBookList = function(list) {
		booklist = list.filter(function(book) {
			return book instanceOf Book;
		});
	};
}
