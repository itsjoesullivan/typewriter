var Typewriter;
describe('Typewriter', function() {
	beforeEach(function() {
		Typewriter = require('./index');
	});
	it('exists', function() {
		if(typeof Typewriter !== 'function') throw "Not a function";
	});

var typewriter;
	describe('typewriter', function() {
		beforeEach(function() {
			typewriter = new Typewriter();
		});
		it('is an instance of Typewriter', function() {
			if(! typewriter instanceof Typewriter) throw "Isnt";
		});
		describe('record', function() {
			it('sets recording to true', function() {
				typewriter.record();
				if(!typewriter.recording) throw '';
			});
		});	
		describe('stop', function() {
			it('ensures recording and playing are false', function() {
				typewriter.recording = true;
				typewriter.playing = true;
				typewriter.stop();
				if(typewriter.playing) throw "playing true";
				if(typewriter.recording) throw "recording true";
			});
			it('clears timeouts', function(done) {
				var gone = false;
				typewriter.timeouts.push(setTimeout(function() {
					gone = true;
				},1));
				typewriter.play();
				typewriter.stop();
				setTimeout(function() {
					if(gone) throw "It happened anyway";
					done();
				},10);
			});
		});
		describe('add', function() {
			it('adds an event if recording', function() {
				typewriter.record();
				typewriter.add('h');
				if(!typewriter.queue.length) throw "not added";
			});
			it('doesnt add event if not recording', function() {
				typewriter.add('h');
				if(typewriter.queue.length) throw "added!";
			});
		});
		describe('play', function() {
			it('starts an event', function(done) {
				var keys = []
				typewriter.queue.push({ start: 1, key:'h' });
				typewriter.stop();
				typewriter.fn = function(key) { keys.push(key); };
				typewriter.play();
				setTimeout(function() {
					if(!keys.length) throw "not played";
					done();
				},10);
			});	
			it('doesnt play them all at once', function(done) {
				var keys = [];
				typewriter.queue.push({
					start: 1, key: 'h'
				});
				typewriter.queue.push({
					start: 1000, key: 'i'
				});
				typewriter.fn = function(key) { keys.push(key); };
				typewriter.play();
				setTimeout(function() {
					if(keys.length !== 1) throw "more or less than 1!";
					typewriter.stop();
					done();
				},10);
			});
		});

	});
});
