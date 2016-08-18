var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky', 'assets/bg_layer1.png')
	game.load.image('land', 'assets/ground_grass_small .png')
	game.load.image('player', 'assets/flyMan_stand.png')
}

var land;
var player;
var cursors;

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
	player.body.gravity.y = 400;
	player.body.collideWorldBounds = true;

	cursors = game.input.keyboard.createCursorKeys();
}

function update() {

	game.physics.arcade.collide(player, land)

	player.body.velocity.x = 0;

	if (cursors.left.isDown)
	{
		//  Move to the left
		player.body.velocity.x = -250;

	}
	else if (cursors.right.isDown)
	{
		//  Move to the right
		player.body.velocity.x = 250;

	}
	else
	{
		//  Stand still
		player.animations.stop();

		player.frame = 4;
	}

	//  Allow the player to jump if they are touching the ground.
	if (cursors.up.isDown && player.body.touching.down)
	{
		player.body.velocity.y = -350;
	}

	if (player.body.onFloor()) {
		fail(player);
	}

	function fail(player) {
		player.reset(0, game.world.height -150);
	}

}