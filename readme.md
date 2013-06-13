#Typewriter

A simple way to record and play back events

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
```javascript
typewriter.record();
```

Clears the event queue and begins recording. Starts the timer that determines when events occur.

###typewriter.add
```javascript
typewriter.add(key);
```

In record mode, adds the key along with duration since recording began 

####Example
```javascript
typewriter.add('h');
```

###typewriter.play
```javascript
typewriter.play();
```

Runs all of the events using setTimeout

###typewriter.fn
```javascript
typewriter.fn = function(key) { console.log(key); };
```

Default no-op; The function that recorded events are passed to in playback

###typewriter.stop
```javascript
typewriter.stop();
```

In record mode: stops recording
In play mode: stops all queued events

