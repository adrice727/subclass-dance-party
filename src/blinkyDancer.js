var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.oldStep =  Dancer.prototype.step;
BlinkyDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
};

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var result = new BlinkyDancer(top, left, timeBetweenSteps);
  return result;
};
