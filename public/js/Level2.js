var Platformer = Platformer || {};
 
//title screen
Platformer.Level2 = function(){};
 
Platformer.Level2.prototype = {


create: function() {
		

	this.add.sprite(0, 0, 'background3');

	land = this.add.group();

	land.enableBody = true;

	var platform = land.create(0, this.world.height - 64, 'platform2')
	platform.scale.setTo(.75, .75);
	platform.body.immovable = true;

	platform = land.create(300, 400, 'platform2')
	platform.scale.setTo(.75, .75);
	platform.body.immovable = true;

	platform = land.create(600, 250, 'platform2')
	platform.scale.setTo(.75, .75);
	platform.body.immovable = true;

	end = this.add.sprite(620, 200, 'end')
	end.scale.setTo(.5, .5);

	this.physics.arcade.enable(end);

	player = this.add.sprite(0, this.world.height -150, 'player')
	player.scale.setTo(.5, .5);

	this.physics.arcade.enable(player);
	player.body.gravity.y = 400;
	player.body.collideWorldBounds = true;

	cursors = this.input.keyboard.createCursorKeys();
},

update: function() {

	this.physics.arcade.collide(player, land)
	this.physics.arcade.overlap(player, end, finish, null, this);

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
		player.body.velocity.y = -500;
	}

	if (player.body.onFloor()) {
		fail(player);
	}

	function fail(player) {
		player.reset(0, 400);
	}

	function finish() {
		this.state.start('Level2');
	}

},
};