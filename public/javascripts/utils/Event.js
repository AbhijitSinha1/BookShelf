var Event = function(i, e, c) {
	if(!i) {throw new Error('need id');}
	if(!e) {throw new Error('need event');}
	if(!c) {throw new Error('need callback');}
	var id = i;
	var event = e;
	var callback = c;
	this.getId = function() {
		return id;
	};
	this.getEvent = function() {
		return event;
	};
	this.getCallback = function() {
		return callback;
	};
}