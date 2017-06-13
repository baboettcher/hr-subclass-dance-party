// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, color) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  //every instantiation calls step and setPosition
  this.step();
  this.setPosition(top, left);
  this.setColor(color);



};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};// i believe that we are binding the "blinkydancer-this"otherwise we would lose it when settimeout invokes this.step.


makeDancer.prototype.setColor = function(color) {
  color = color || "yellow"; // default is yellow

  var styleSettings = {
    'border':'10px solid ' + color,
  };

  this.$node.css(styleSettings);
};






makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css///
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body