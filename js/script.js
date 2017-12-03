$(document).ready(function(){
  $("button#dark").click(function(){
      $("body").removeClass();
      $("body").addClass("black-background");
  });
  $("button#light").click(function(){
      $("body").removeClass();
      $("body").addClass("white-background");
  });
  $("h3").click(function(){
    $(".first").addClass("borders");
    $(".second").addClass("borders");
  })

});
