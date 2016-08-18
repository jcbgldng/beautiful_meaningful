var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('background', 'assets/sky1.png')	
}

function create() {
		
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'background');
}

function update() {

3}