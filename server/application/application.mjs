import Express from 'express'
import {Router} from '../router'
//import {Battle} from '../battle/battle';

export default class Application {
    constructor(config) {
        this.config = config;
        this.app = new Express();
        //this.battles = new Battles();
        this.battles = {};
        this.router = new Router(this.app, this.config, this.battles);
    }

    get config() {
        return this._config;
    }

    set config(config) {
        this._config = config;
    }

    get router() {
        return this._router;
    }

    set router(router) {
        this._router = router;
    }

    get app() {
        return this._app;
    }

    set app(app) {
        this._app = app;
    }

    run() {
        this.router.init();
    }
}