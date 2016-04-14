var EH = new (function(){
	this.registerEvent = function(event) {
	  if(!event) {throw new Error('need an Event');}
	  if(!(event instanceof Event)) {throw new Error('need an Event object');}
	  // ref: http://stackoverflow.com/a/17820773
	  document.getElementById(event.getId())[window.addEventListener ? 'addEventListener' : 'attachEvent']( window.addEventListener ? event.getEvent() : 'on'+event.getEvent(), event.getCallback(), false);
	}

	/*
	// attempting 2 way data binding
	var registerModel = function(model) {
		if(!model) {throw new Error('need a Model');}
		if(!(model instanceof Model) {throw new Error(need a Model object);})
	}
	*/
})();
