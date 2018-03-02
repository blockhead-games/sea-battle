'use strict';

import {config} from './config';
import {application} from './application';
// import {Battle} from './battle';

let application = new application(config);
application.run();

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