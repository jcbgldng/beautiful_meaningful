var Platformer = Platformer || {};
 
Platformer.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');
 
Platformer.game.state.add('Boot', Platformer.Boot);
//uncomment these as we create them through the tutorial
Platformer.game.state.add('Preload', Platformer.Preload);
Platformer.game.state.add('MainMenu', Platformer.MainMenu);
Platformer.game.state.add('Level1', Platformer.Level1);
Platformer.game.state.add('Level2', Platformer.Level2);
 
Platformer.game.state.start('Boot');
