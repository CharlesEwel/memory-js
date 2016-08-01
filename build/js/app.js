(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Game(){
  this.turn = 0;
  this.previousCardId = 0;
  this.previousSlotId = 0;
}

Game.prototype.processTurn = function(cardId, slotId) {
 this.turn++;
 var match;
 if(this.turn%2===1)
 {
   this.previousCardId = cardId;
   this.previousSlotId = slotId;
 } else {
   if(this.previousCardId === cardId){
     match = true;
   } else {
     match = false;
   }
 }
 return match
};

exports.gameModule = Game

},{}],2:[function(require,module,exports){
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

},{"./../js/memory.js":1}]},{},[2]);
