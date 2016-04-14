var CommService = new (function() {
	this.get = function(job) {
		if(!(job instanceof InetJob)) {
			throw new Error('invalid argument. InetJob required');
		}
		$.ajax({
			method: 'get',
			dataType: 'json',
			contentType: 'application/json',
			url: job.getUrl(),
			success: function(data) {
				job.getSuccess()(data);
			},
			failure: job.getFailure(),
		});
	};
	this.post = function(job, data) {
		if(!(job instanceof InetJob)) {
			throw new Error('invalid argument. InetJob required');
		}
		$.ajax({
			method: 'post',
			dataType: 'json',
			contentType: 'application/json',
			data: data,
			url: job.getUrl(),
			success: function(data) {
				job.getSuccess()(data);
			},
			failure: job.getFailure()
		});
	}
})();
