var makeGreenDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps, "green");

    // this.step.bind(this, timeBetweenSteps); Why not this??

};



makeGreenDancer.prototype = Object.create(MakeDancer.prototype);
makeGreenDancer.prototype.constructor = makeGreenDancer;
makeGreenDancer.prototype.step = function() {
// call the old version of step at the beginning of any call to this new version of step


// calling parent class in the makeGreenDancer con
MakeDancer.prototype.step.call(this);

// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.
/*
  var colorSettings = {
    "color": green
  };

  this.$node.css("color", "green");

*/

  this.$node.toggle(); // this is the dance move


  // var oldStep = this.step; -- do something






};
