var monkeyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps, "orange");

  this.$node = $('<span class="dancer monkey"> <img src="pics/monkey2.png" height="80" width="100"></span>');


};



monkeyDancer.prototype = Object.create(MakeDancer.prototype);
monkeyDancer.prototype.constructor = monkeyDancer;
monkeyDancer.prototype.step = function() {
// call the old version of step at the beginning of any call to this new version of step


// calling parent class in the monkeyDancer con
MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};



MakeDancer.prototype.setColor = function(color) {

/*  var styleSettings = {
    'border': 'none'
  };*/

  //this.$node.css(styleSettings);
};






monkeyDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css///
  //
  var styleSettings = {
    top: top,
    left: left,
  };

  this.$node.css(styleSettings);
};



