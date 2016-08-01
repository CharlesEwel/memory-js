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
