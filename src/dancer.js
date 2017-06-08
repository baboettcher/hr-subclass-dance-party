// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps, color) {

  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  //this.color = color;

  //every instantiation calls step and setPosition

  this.step();// problem!
  this.setPosition(top, left);
  this.setColor(color);

};




MakeDancer.prototype.setColor = function(color) {
  color = color || "yellow"; // default is yellow

  var styleSettings = {
    'border':'10px solid ' + color,
  };

  this.$node.css(styleSettings);
};



MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step, it just schedules the next step

  // bind it to this method in order to preserve
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

  // this is not bound to cuurent scope
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css///
  //
  var styleSettings = {
    top: top,
    left: left,
  };

  this.$node.css(styleSettings);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body