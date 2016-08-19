var Platformer = Platformer || {};
 
//loading the game assets
Platformer.Preload = function(){};
 
Platformer.Preload.prototype = {
  preload: function() {
   //show logo in loading screen
   	this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);
 
 
   //load game assets
   	this.load.image('background1', 'assets/bg_layer1.png')
   	this.load.image('background2', 'assets/bg_layer3.png')
   	this.load.image('background3', 'assets/bg_layer4.png')

   	this.load.image('platform1', 'assets/ground_grass_small .png')
   	this.load.image('platform2', 'assets/ground_sand_small.png')
    this.load.image('hazard', 'assets/spikes_top.png')

	 this.load.image('player', 'assets/flyMan_stand.png')

	 this.load.image('end', 'assets/gold_1.png')
  },
  create: function() {
   this.state.start('MainMenu');
  }
};