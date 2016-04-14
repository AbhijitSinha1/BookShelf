var User = function(i, e, f, l, a) {
	var id, email, firstName, lastName, age;
	if(!i) { 
		throw UserError("user id is required");
	}
	if(!e) { 
		throw UserError("user email id is required");
	}
	if(!f) { 
		throw UserError("user first name is required");
	}
	if(!a) { 
		throw UserError("user age is required");
	}
	
	id = i; email = e; firstName = f; lastName = l; age = a;
	
	this.getId = function() {
		return id;
	}
	this.getFirstName = function() {
		return firstName;
	}
	this.getLastName = function() {
		return lastName;
	}
	this.getEmail = function() {
		return email;
	}
	this.getAge = function() {
		return age;
	}
	
}

