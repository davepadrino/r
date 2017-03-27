import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.test = new ReactiveVar(1);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});


Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);

    var a = 5;
    var b = 2;
    var route = "/home/vit/Escritorio/r/lib";


    /*Ḥow to return a value from server*/
    Meteor.call('test',a,b,function(error, result){
        if(error){
            console.log(error);
        } else {
            console.log(result);
        }
    });

    /*Ḥow to return a value from server
    /*Ḥow to return a value from server
    Meteor.call('test0', route, function(error, result){
       	if(error){
            console.log(error);
        } else {
            console.log("typeof result: "+typeof(result));
            console.log("test 0 result: "+result);
        }
    });
*/
    /*Ḥow to return a value from server*/
    Meteor.call('test2',route,function(error, result){
       	if(error){
            console.log("el error es: "+error);
        } else {
            console.log("typeof result: "+typeof(result));
            //console.log("test 0 result: "+result.getOwnPropertyName());
            console.log("test 0 result: "+result);
        }
    });
  },
});
