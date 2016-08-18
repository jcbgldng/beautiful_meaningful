var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky', 'assets/bg_layer1.png')
	game.load.image('land', 'assets/ground_grass_small .png')
	game.load.image('player', 'assets/flyMan_stand.png')
}

var land;
var player;

function create() {
		
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'sky');

	land = game.add.group();

	land.enableBody = true;

	var platform = land.create(0, game.world.height - 64, 'land')
	platform.scale.setTo(.75, .75);
	platform.body.immovable = true;

	platform = land.create(300, 400, 'land')
	platform.scale.setTo(.75, .75);
	platform.body.immovable = true;

	platform = land.create(600, 250, 'land')
	platform.scale.setTo(.75, .75);
	platform.body.immovable = true;

	player = game.add.sprite(0, game.world.height -150, 'player')
	player.scale.setTo(.5, .5);

	game.physics.arcade.enable(player);
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;


}

function update() {

}