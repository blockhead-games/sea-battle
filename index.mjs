'use strict';

import {config} from './config';
import {Application} from './server/application';

const app = new Application(config);

app.run();