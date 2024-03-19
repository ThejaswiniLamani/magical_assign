class Player {
    constructor(health, strength, attack) {
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    isAlive() {
        return this.health > 0;
    }

    takeDamage(damage) {
        this.health -= damage;
    }
}
module.exports = Player;
