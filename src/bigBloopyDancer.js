var bigBloopyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps, "orange");

    // this.step.bind(this, timeBetweenSteps); Why not this??
};




bigBloopyDancer.prototype = Object.create(MakeDancer.prototype);
bigBloopyDancer.prototype.constructor = bigBloopyDancer;
bigBloopyDancer.prototype.step = function() {
// call the old version of step at the beginning of any call to this new version of step


// calling parent class in the bigBloopyDancer con
MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};




bigBloopyDancer.prototype.setColor = function() {

  var rn = randomNumber(100);

  var styleSettings = {
    'border':  rn + 'px solid ' + randomColor(),
    'border-radius': rn + 'px'
  };

  this.$node.css(styleSettings);
};

