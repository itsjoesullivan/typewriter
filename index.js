/** Constructor

*/
var Typewriter = function() {
	this.recording = false;
	this.playing = false;
	//Keys to be played
	this.queue = [];
	//Queued events we may wish to stop
	this.timeouts = [];
	//Speed of playback
	this.rate = 1;
};

/** Add an event
*/
Typewriter.prototype.add = function(key) {
	if(this.recording) {
		var startAt = ;		
		this.queue.push({
			start: new Date().getTime() - this.startTime,
			key: key
		});
	}
};

/** Initiate recording

*/
Typewriter.prototype.record = function() {
	this.recording = true;
	this.queue = false;
	this.startTime = new Date().getTime();
};

Typewriter.prototype.stop = function() {
	if(this.recording) {
			this.recording = false;
	} else if(this.playing) {
		while(this.timeouts.length) {
			clearTimeout(this.timeouts.pop());
		}
	}
};
/** Plays each of the events
*/
Typewriter.prototype.play = function() {
	for(var i in this.queue) {
		if(this.queue.hasOwnProperty(i)) {
			var ev = this.queue[i];
			this.timeouts.push(setTimeout(function() { this.fn(ev.key); }.bind(this),ev.start/this.speed)); 
		}

	}

};

/** No-op to be replaced */
Typewriter.prototype.fn = function() {};
