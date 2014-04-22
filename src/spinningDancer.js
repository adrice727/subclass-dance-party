var SpinningDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  var elvis = '<img class="spinner" src="images/elvis.jpg" />';
  // $('.spinner').wrap()
  this.$node.prepend('<img class="spinner" src="images/elvis.jpg" />');
  this.$node.addClass('spinner').removeClass('dancer');
};

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;
SpinningDancer.prototype.oldStep =  Dancer.prototype.step;
SpinningDancer.prototype.step = function(){
  this.oldStep();

  this.$node('span').rotate({
    angle:0,
    animateTo:360,
    // callback: rotation,
    easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
      return c*(t/d)+b;
    }
  });
  // this.rotation();
};

// var rotation = function (){
//   $(".spinner").rotate({
//     angle:0,
//     animateTo:360,
//     callback: rotation,
//     easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
//       return c*(t/d)+b;
//     }
//   });
// };


var makeSpinningDancer = function(top, left, timeBetweenSteps){
  var result = new SpinningDancer(top, left, timeBetweenSteps);
  return result;
};
