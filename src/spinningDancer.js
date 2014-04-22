var SpinningDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.prepend('<img class="spinner" src="images/homer.gif"/>');
  this.$node.addClass('spinning').removeClass('dancer');
  // this.$node.addClass('spinning');

};

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;
SpinningDancer.prototype.oldStep =  Dancer.prototype.step;
SpinningDancer.prototype.step = function(){
  this.oldStep();

};

var makeSpinningDancer = function(top, left, timeBetweenSteps){
  var result = new SpinningDancer(top, left, timeBetweenSteps);
  return result;
};
