const Player = require('./Player');

class Arena {
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    fight() {
        let attacker = this.playerA.health < this.playerB.health ? this.playerA : this.playerB;
        let defender = attacker === this.playerA ? this.playerB : this.playerA;

        while (this.playerA.isAlive() && this.playerB.isAlive()) {
            const attackRoll = this.rollDice();
            const defenseRoll = this.rollDice();
            const attackDamage = attackRoll * attacker.attack;
            const defenseStrength = defenseRoll * defender.strength;
            const damageTaken = Math.max(attackDamage - defenseStrength, 0);

            defender.takeDamage(damageTaken);
            console.log(`Attacker rolls ${attackRoll}, Defender rolls ${defenseRoll}. Damage: ${damageTaken}`);

            [attacker, defender] = [defender, attacker]; // Swap roles
        }

        return this.playerA.isAlive() ? 'Player A wins' : 'Player B wins';
    }
}
module.exports =Arena;