var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

    MakeDancer.call(this, top, left, timeBetweenSteps);

    var oldStep = this.step.call(this);

}



  makeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

  makeBlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
    console.log(this);
  };






/*
  var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


   blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;

*/


