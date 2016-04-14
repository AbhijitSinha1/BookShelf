var Notifications = function() {
	var notifications = [];
	this.addNotification = function(notifs) {
		ids = notifications.map(function(n) {
			return n.id;
		});
		notifs.forEach(function(n) {
			if(ids.indexOf(n.id) >= 0) {
				return;
			}
			ids.push(n.id);
			notifications.push(n);
		});
	};
	this.getUnreadNotifications = function() {
		return notifications.filter(function(n) {
			return !n.read;
		});
	};
	this.markAsRead = function(id) {
		notifications.filter(function(n) {
			return n.id === id;
		})[0].read = true;
	};
};
