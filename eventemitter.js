var events = require('events');
var myEmitter= new events.EventEmitter();
myEmitter.on('someevent',function(msg){
    console.log(msg)

});
myEmitter.emit('someevent','java script');
