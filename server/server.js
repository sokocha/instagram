Pictures.allow({
  insert: function(){return true;},
  remove: function(){return true;},
  update: function(){return true;},
});

Meteor.publish('Pictures', function(){
  return Pictures.find();
})