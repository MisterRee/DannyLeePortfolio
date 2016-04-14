"use strict";
$(document).ready(function(){
  init();
});

var init = function(){
  $(".descBox").click( function(){
    var temp = this.children;
    for(var i = 1; i< temp.length; i++){
      if(temp[i].style.display == "none"){
        $(this.children[i]).show(400);
      } else {
        $(this.children[i]).hide(400);
      }
    }
  });

  $(".imageBox").hover( hoverOn, hoverOff );

  function hoverOn( e ){
    $(this.children[1]).animate({
      "opacity":"0.5"
    }, {queue:false, duration:250});
  }

  function hoverOff( e ){
    $(this.children[1]).animate({
      "opacity":"0.0"
    }, {queue:false, duration:250});
  }
};
