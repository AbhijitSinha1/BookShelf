var CronService = function(comm) {
	if(!(comm instanceOf CommService)) {
		throw new Error('invalid argument. CommService required');
	}
	var jobList = [], running = false, timer;
	this.addJob = function(job) {
		if(!(job instanceOf InetJob)) {
			throw new Error('invalid argument. CronJob required');
		}
		jobList.push(job);
	};
	this.clearJobs = function() {
		if(running) {
			this.stop();
		}
		jobList = [];
	}
	this.initiate = function(interval) {
		if(isNaN(interval)) {
			throw new Error('invalid argument. Number required');
		}
		if(running) {
			return;
		}
		timer = window.setInterval(function() {
			jobList.forEach(function(job) {
				comm.get(job);
			});
		},interval);
	};
	this.stop = function() {
		window.clearTimeout(timer);
		running = false;
	}
}
