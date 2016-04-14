var FetchService = function(comm, local) {
	if(!(comm instanceOf CommService)) {
		throw new Error('invalid argument. CommService required');
	}
	if(!(local instanceOf LocalStorage)) {
		throw new Error('invalid argument. LocalStorage required');
	}
	this.get = function(job) {
		if(!local.get(job.getUrl())) {
			var newJob = new InetJob(job.getUrl(), function(data) {
				local.save(job.getUrl(),data);
				var success = job.getSuccess();
				success(data);
			}, job.getFailure());
			comm.get(newJob);
		} else {
			var success = job.getSuccess();
			var data = local.get(job.getUrl());
			success(data);
		}
	};
	this.post = function(job, data) {
		comm.post(job, data);
	}
}
