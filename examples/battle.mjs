'use strict';

import {Battle} from '../game/battle';

const battle = new Battle();

const uid1 = 44444444;
const uid2 = 55555555;

battle.join(uid1);
battle.join(uid2);

battle.start();

const player1 = battle.players[uid1];

console.log('\n');
console.log(`[Player ${uid1}] field:`);
player1.field.display();

console.log('\n');
console.log(`attack [Player ${uid1}]: `);

console.log(player1.availableWeapons);

battle.attack(44444444, [
    {coords: 'A:2', weapon: 'MachineGun'},
    {coords: 'B:6', weapon: 'Rocket'}
]);

console.log(`[Player ${uid1}] field:`);
player1.field.display();