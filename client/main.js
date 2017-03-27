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

    /*Ḥow to return a value from server*/
    Meteor.call('example',function(error, result){
       	if(error){
            console.log(error);
        } else {
            // console.log(result);
            console.log(JSON.stringify(result));
        }
    });

    /*Ḥow to return a value from server*/
    Meteor.call('example2',function(error, result){
        if(error){
            console.log(error);
        } else {
            // console.log(result);
            console.log(JSON.stringify(result));
        }
    });

  },
});
