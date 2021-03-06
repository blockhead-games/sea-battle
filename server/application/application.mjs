import Express from 'express'
import {Router} from '../router'
import {Battles} from '../game';

export default class Application {
    constructor(config) {
        this.config = config;
        this.app = new Express();
        this.battles = new Battles();
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

    get battles() {
        return this._battles;
    }

    set battles(battles) {
        this._battles = battles;
    }

    run() {
        this.router.init();
    }
}