$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = dancerMakerFunction(
      $(".canvas").height() * Math.random(),
      $(".canvas").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);

  });

  $(".lineUpButton").on("click", function(event){
    for ( var i = 0; i < window.dancers.length; i++ ){
      window.dancers[i].lineUp();
    }
  });

  $(".danceAgainButton").on("click", function(event){
    for ( var i = 0; i < window.dancers.length; i++ ){
      window.dancers[i].danceAgain();
    }
  });

  $(".findPartners").on("click", function(event){
    for ( var i = 0; i < window.dancers.length; i++ ){
      for ( var j = 0; j < window.dancers.length; j++ ){
        if ( window.dancers[i] === window.dancers[j]){ continue; }
        var deltax = window.dancers[i]._left - window.dancers[j]._left;
        var deltaxsquared = Math.pow(deltax, 2);
        var deltay = window.dancers[i]._top - window.dancers[j]._top;
        var deltaysquared = Math.pow(deltay, 2);
        var distance = Math.sqrt(deltaxsquared + deltaysquared);
        console.log("distance", distance);
        if ( distance < 400 ){
          window.dancers[i]._nearOtherDancer = true;
        }else{
          window.dancers[i]._nearOtherDancer = false;
        }
      }
    }
  });

});

