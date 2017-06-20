var bigBloopyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps, "orange");

    // this.step.bind(this, timeBetweenSteps); Why not this??

    // ADD DISCO MUSIC HERE!
    //
};




bigBloopyDancer.prototype = Object.create(makeDancer.prototype);
bigBloopyDancer.prototype.constructor = bigBloopyDancer;
bigBloopyDancer.prototype.step = function() {
// call the old version of step at the beginning of any call to this new version of step


// calling parent class in the bigBloopyDancer con
makeDancer.prototype.step.call(this);
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

/*
//ES5
bigBloopyDancer.prototype.es5 = function () {
  setTimeout(function () {
    console.log(this.reaction);
  }, this.delay);
};



//ES6
bigBloopyDancer.prototype.es6 = function () {
  setTimeout(() => {
    console.log(this.reaction);
  }, this.delay);
};



Arrow function expressions do not receive a 'this' value based on how the function is invoked. The fat arrow function style in ES6 receives it's 'this' binding from the enclosing context at the time the function is defined. In the ES5 version, the anonymous function follows the "free function invocation" pattern which sets the 'this' binding context to the global context. As a result, we have to modify the first version to make sure we bind the 'this' context correctly.


*/

