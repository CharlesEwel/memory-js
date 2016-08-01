var Game = require('./../js/memory.js').gameModule;

$(function() {
  var newGame;
  $("#new-game").click(function(event){
    $(".face-up").hide();
    $(".face-down").show();
    newGame = new Game();
  });

  $(".card").click(function(event){
    $(this).find(".face-down").hide();
    $(this).find(".face-up").show();
    $("#turn").text(parseInt(newGame.turn/2)+1);
    var match = newGame.processTurn($(this).attr('card'), $(this).attr('slot'));
    console.log(newGame.turn);
    console.log(match);
    console.log(newGame.previousCardId);
    console.log(newGame.previousSlotId);
    if (match === false) {
      $(this).find(".face-up").hide(1000);
      $(this).find(".face-down").show(1000);
      $('div[slot="'+newGame.previousSlotId+'"]').find(".face-up").hide(1000);
      $('div[slot="'+newGame.previousSlotId+'"]').find(".face-down").show(1000);
    }
  });
});
