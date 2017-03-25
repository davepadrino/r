import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
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

    /*Ḥow to return a value from server*/
    Meteor.call('test',a,b,function(error, result){
       	if(error){
            console.log(error);
        } else {
            console.log(result);
        }
    });

    /*Ḥow to return a value from server*/
    Meteor.call('test2',function(error, result){
       	if(error){
            console.log("hay un error ");
            console.log(error);
        } else {
            console.log("hay result ");
            console.log(result);
        }
    });
  },
});
