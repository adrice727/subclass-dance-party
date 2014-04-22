// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this._timeBetweenSteps = timeBetweenSteps;
  this._top = top;
  this._left = left;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this._linedup = false;
  this._nearOtherDancer = false;
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  setTimeout(function(){
    that.step();
  }, that._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this._top = top;
  this._left = left;

  this.$node.css({
    top: top,
    left: left
  });
};

Dancer.prototype.lineUp = function(){

  var randomheight = $("body").height() * Math.random();
  this.setPosition(randomheight, 0);
  this._linedup = true;

};

Dancer.prototype.danceAgain = function(){

  this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
};
