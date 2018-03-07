'use strict';

import {Battle} from '../game/battle';

const battle = new Battle();

battle.join(1);
battle.join(2);

battle.start();

console.log('\n');
console.log('[Player 1] field:');
battle.players[1].field.display();

console.log('\n');
console.log('attack [Player 1]: ');
battle.attack(1, [
    {coords: 'A:2', weapon: 'Machine Gun'},
    {coords: 'B:6', weapon: 'Rocket'}
]);

console.log('[Player 1] field:');
battle.players[1].field.display();