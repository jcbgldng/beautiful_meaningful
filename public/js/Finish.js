var Platformer = Platformer || {};

Platformer.Finish = function(){};
 
Platformer.Finish.prototype = {
  create: function() {
  	var text = "You win";
    var style = { font: "30px Arial", fill: "#000000", align: "center" };
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);


    character = this.add.group();

	character.enableBody = true;

    var player = character.create(100, 100, 'player')
	player.scale.setTo(.5, .5);

	this.physics.arcade.enable(player);
	player.body.gravity.y = 400;
	player.body.collideWorldBounds = true;
	player.body.bounce.y = 0.7 + 1000*  0.2;

	player = character.create(800, 100, 'player')
	player.scale.setTo(.5, .5);

	this.physics.arcade.enable(player);
	player.body.gravity.y = 400;
	player.body.collideWorldBounds = true;
	player.body.bounce.y = 0.7 + 100 * 0.2;


  },

};