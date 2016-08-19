Platformer.MainMenu = function(){};
 
Platformer.MainMenu.prototype = {
  create: function() {
   //show the space tile, repeated
    var backing = this.add.sprite(0, 0, 'background2');
    backing.scale.setTo(.6, .4);
    
    //start game text
    var text = "Tap to begin";
    var style = { font: "30px Arial", fill: "#000000", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    
 
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Level1');
    }
  }
};