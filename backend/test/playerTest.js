const assert = require('assert');
const Player = require('../Player'); // Make sure this path is correct based on your project structure

function testPlayerTakeDamage() {
    const player = new Player(100, 10, 5);
    player.takeDamage(20);
    assert.strictEqual(player.health, 80, 'Player health should decrease by 20 after taking damage.');
}

try {
    testPlayerTakeDamage();
    console.log('Player.takeDamage test passed.');
} catch (error) {
    console.error('Player.takeDamage test failed.');
    console.error(error.message);
}
