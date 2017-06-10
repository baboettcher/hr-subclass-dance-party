var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);

    // this.step.bind(this, timeBetweenSteps); Why not this??


};



makeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
// call the old version of step at the beginning of any call to this new version of step


  // calling parent class in the makeBlinkyDancer con
  MakeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle(); // this is the dance move


  // var oldStep = this.step; -- do something


};





