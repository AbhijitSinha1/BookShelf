var LocalStorage = function() {
	if(!typeof(Storage)) {
		throw new Error('No Web Storage support');
	}
	this.save = function(key, value) {
		localStorage.setItem(key, value);
	};
	this.remove = function(key) {
		localStorage.removeItem(key);
	};
	this.get = function(key) {
		return localStorage.getItem(key);
	}
}
