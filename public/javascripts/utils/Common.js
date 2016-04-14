var copy = function(array) {
	if(!(array instanceOf Array)) {
		throw new Error('invalid argument. required Array');
	}
	return array.map(function(a) {
		return a;
	});
}
