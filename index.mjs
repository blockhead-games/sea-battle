'use strict';

import {config} from './config';
import {Application} from './application';
// import {Battle} from './battle';

const app = new Application(config);

app.run();

// const battles = {
//     token1: battle
// };
//
// battles[token];
//
// const battle = new Battle();
//
// battle.start();

// const battleObj = {battle1: battle};
//
// delete battleObj.battle1;