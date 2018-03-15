'use strict';

import {Battle} from '../game/battle';

const battle = new Battle();

const uid1 = 44444444;
const uid2 = 55555555;

battle.join(uid1);
battle.join(uid2);

battle.start();

const player1 = battle.players[uid1];
const player2 = battle.players[uid2];

console.log('\n');
console.log(`[Player ${player1.uid}] field:`);
player1.field.display(true);

console.log(`[Player ${player1.uid}] weapons:`);
player1.availableWeapons.forEach((weapon, i) => {
    console.log(i, weapon.name);
});

console.log('\n');
console.log(`attack [Player ${player2.uid}]: `);

battle.attack(player2.uid, [
    {coords: 'A:2', weapon: player1.availableWeapons[0]},
    {coords: 'B:6', weapon: player1.availableWeapons[1]}
]);

console.log(`[Player ${player2.uid}] field:`);
player2.field.display();