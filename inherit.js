var events = require('events');
var util = require('util');
var person = function(name){
    this.name=name;
};
util.inherits(person,events.EventEmitter);
var a= new person ('a');
var b= new person ('b');
var c= new person ('c');
var  people =[a,b,c];
people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name +'said:'+msg);
    });
});
a.emit('speak','Hey dudes');
