var InetJob = function(url, success, failure) {
	if(!url) {
		throw new Error('invalid argument. URL missing');
	}                                 
	if(!success) {                    
		throw new Error('invalid argument. success function missing');
	}                                 
	if(!failure) {                    
		throw new Error('invalid argument. failure function missing');
	}
	var url = url, success = success, failure = failure;
	this.getUrl = function() {
		return url;
	}
	this.getSuccess = function() {
		return success;
	}
	this.getFailure = function() {
		return failure;
	}
}
