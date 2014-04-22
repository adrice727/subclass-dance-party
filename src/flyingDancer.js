var FlyingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class="flyer" src="images/astronaut.png" />');
  this.$node.addClass('flyer').removeClass('dancer');
  this.large = false;
};

FlyingDancer.prototype = Object.create(Dancer.prototype);
FlyingDancer.prototype.constructor = FlyingDancer;
FlyingDancer.prototype.oldStep =  Dancer.prototype.step;
FlyingDancer.prototype.step = function(){
  this.oldStep();
};


var makeFlyingDancer = function(top, left, timeBetweenSteps){
  var result = new FlyingDancer(top, left, timeBetweenSteps);
  return result;
};



