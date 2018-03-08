'use strict';

import {Battle} from '../game/battle';

const battle = new Battle();

battle.join(1);
battle.join(2);

battle.start();

const player1 = battle.players[1];

console.log('\n');
console.log('[Player 1] field:');
player1.field.display();

console.log('\n');
console.log('attack [Player 1]: ');

console.log(player1.availableWeapons);

battle.attack(1, [
    {coords: 'A:2', weapon: 'MachineGun'},
    {coords: 'B:6', weapon: 'Rocket'}
]);

console.log('[Player 1] field:');
player1.field.display();