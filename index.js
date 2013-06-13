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
	this.queue = [];
	this.startTime = new Date().getTime();
};

Typewriter.prototype.stop = function() {
	if(this.recording) {
			this.recording = false;
	}
	if(this.playing) {
		this.playing = false;
		while(this.timeouts.length) {
			clearTimeout(this.timeouts.pop());
		}
	}
};
/** Plays each of the events
*/
Typewriter.prototype.play = function() {
	if(this.recording) this.stop();
	this.playing = true;
	for(var i in this.queue) {
		if(this.queue.hasOwnProperty(i)) {
			this.timeouts.push(setTimeout(this.fn.bind(this,this.queue[i].key),this.queue[i].start/this.rate)); 
		}
	}

};
/*
Typewriter.prototype.playOne = function(ev) {
	this.timeouts.push(setTimeout(function() {
		this.fn
};*/

/** No-op to be replaced */
Typewriter.prototype.fn = function() {};

module.exports = Typewriter;
