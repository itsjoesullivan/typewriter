#Typewriter

Typewriter writes type.

##Why

I wanted to be able to record myself typing easily, then play that elsewhere

##Usage

Recording:

```javascript
var Typewriter = require('Typewriter'),
	typewriter = new Typewriter();

typewriter.record(); //

document.addEventListener('keypress', function(e) {
	var key = keyFromE(e);
	typewriter.add(key);
});
```

Playback:

```javascript
typewriter.play(); //Play all of the events
```



##API

###typewriter.record

Clears the event queue and begins recording. Starts the timer that determines when events occur.

###typewriter.add

	typewriter.add('h');

In record mode, adds the key along with duration since recording began 

###typewriter.play

Runs all of the events using setTimeout

###typewriter.fn

Default no-op; The function that recorded events are passed to

###typewriter.stop

In record mode: stops recording
In play mode: stops all queued events

