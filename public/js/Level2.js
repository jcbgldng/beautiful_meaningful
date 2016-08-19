var Platformer = Platformer || {};
 
//title screen
Platformer.Level2 = function(){};
 
Platformer.Level2.prototype = {


create: function() {
		

	var backing = this.add.sprite(0, 0, 'background3');
	backing.scale.setTo(.6, .4);

	land = this.add.group();

	land.enableBody = true;

	var platform = land.create(0, 600, 'platform2')
	platform.scale.setTo(.75, .75);
	platform.body.immovable = true;

	platform = land.create(400, 600, 'platform2')
	platform.scale.setTo(.75, .75);
	platform.body.immovable = true;

	platform = land.create(800, 600, 'platform2')
	platform.scale.setTo(.75, .75);
	platform.body.immovable = true;

	hazard = this.add.sprite(400, 580, 'hazard')
	hazard.scale.setTo(.5, .5);

	end = this.add.sprite(800, 0, 'end')
	end.scale.setTo(.5, .5);

	this.physics.arcade.enable(hazard);

	this.physics.arcade.enable(end);
	end.body.gravity.y = 50;

	player = this.add.sprite(0, 520, 'player')
	player.scale.setTo(.5, .5);

	this.physics.arcade.enable(player);
	player.body.gravity.y = 600;
	player.body.collideWorldBounds = true;

	cursors = this.input.keyboard.createCursorKeys();
},

update: function() {

	var statemaneger = this
	this.physics.arcade.collide(player, land)
	this.physics.arcade.overlap(player, end, finish, null, this);
	this.physics.arcade.overlap(player, hazard, fail, null, this);

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
		statemaneger.state.start('Level2');
	}

	function finish() {
		this.state.start('Finish');
	}

},
};