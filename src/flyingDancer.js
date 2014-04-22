var FlyingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class="flyer" src="images/astronaut.png" />');
  this.$node.addClass('flyer').removeClass('dancer');


  this.$node.toggle( function throb(){ $(this).animate({height: 'toggle', width: 'toggle'}, throb);});
    // this.$node.toggle(50);
    // togl();

  // this.large = false;
  // var large = this.large;
  // this.$node.find("img").hover(function() {
  //   if ( !large ) {
  //     $(this).animate({
  //       width: $(this).width() * 1.2,
  //       height: $(this).height() * 1.2
  //     }, 100);
  //     this.lrage = true;
  //   }


};

FlyingDancer.prototype = Object.create(Dancer.prototype);
FlyingDancer.prototype.constructor = FlyingDancer;
FlyingDancer.prototype.oldStep =  Dancer.prototype.step;
FlyingDancer.prototype.step = function(){
  this.oldStep();
  // this.$node.hover(function(){
  // });
  //
  // $("img").hover(function() {
  //   $(this).stop().animate({
  //     width: $(this).width() * 1.2,
  //     height: $(this).height() * 1.2
  //   }, 1000);
  // });
// this.$node.toggleClass('flyerLarge');
  // this.$node.slideToggle(50, function togl(){
  //   togl;
  // });
  // var float = function(node){
  //   var top = $("body").height() * Math.random();
  //   var left = $("body").width() * Math.random();
  //   float(node);
  // }6
  // if (!this._linedup) {
  //   var that = this;
  //   var randomLeft = $('body').height * Math.random();
  //   var func = function() {
  //     that.$node.animate({"left": randomLeft}, 500);
  //     setTimeout(func, 2000);
  //   };
  //   setTimeout(func, 2000);
  // }
    // function(){$(this).animate({"left": 10 }, 400)});

};


var makeFlyingDancer = function(top, left, timeBetweenSteps){
  var result = new FlyingDancer(top, left, timeBetweenSteps);
  return result;
};



