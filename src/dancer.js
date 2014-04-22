// Dancer superclass
var Dancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  this._top = top;
  this._left = left;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this._linedup = false;
  this._nearOtherDancer = false;
};
Dancer.prototype.step = function(){
  var that = this;
  setTimeout(function(){
    that.step();
  }, that._timeBetweenSteps);

  if ( that._nearOtherDancer ) {
    that.$node.find('img').attr('src', 'images/kitty.gif');
  }
};
Dancer.prototype.setPosition = function(top, left){
  this._top = top;
  this._left = left;
  this.$node.css({
    top: top,
    left: left
  });
};
Dancer.prototype.lineUp = function(){
  var randomheight = $(".canvas").height() * Math.random();
  this.setPosition(randomheight, 0);
  this._linedup = true;
};
Dancer.prototype.danceAgain = function(){
  this.setPosition($(".canvas").height() * Math.random(), $("body").width() * Math.random());
};

// BlinkyDancer
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

// SpinningDancer
var SpinningDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class="spinner" src="images/homer.gif"/>');
  this.$node.addClass('spinning');//.removeClass('dancer');
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

// FlyingDancer
var FlyingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class="flyer" src="images/astronaut.png" />');
  this.$node.addClass('flyer')//.removeClass('dancer');
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

//Traveling Dancer
var TravelingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class="spinner" src="images/elephant.png"/>');
  // this.$node.addClass('traveling').removeClass('dancer');
};
TravelingDancer.prototype = Object.create(Dancer.prototype);
TravelingDancer.prototype.constructor = TravelingDancer;
TravelingDancer.prototype.oldStep =  Dancer.prototype.step;
TravelingDancer.prototype.step = function(){
  this.oldStep();
  if ( !this._linedup){
    var randomHeight = $(".canvas").height() * Math.random();
    var randomWidth = $(".canvas").height() * Math.random();
    this.setPosition(randomHeight, randomWidth);
  }

};
var makeTravelingDancer = function(top, left, timeBetweenSteps){
  var result = new TravelingDancer(top, left, timeBetweenSteps);
  return result;
};

