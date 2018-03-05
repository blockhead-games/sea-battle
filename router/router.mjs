import {UserController} from '../user';
import {TelegramBotController} from '../telegram-bot';
import bodyParser from 'body-parser';

export default class Router {
    constructor(app, config, battles) {
        this.app = app;
        this.config = config;
        this.battles = battles;
    }

    get app() {
        return this._app;
    }

    set app(app) {
        this._app = app;
    }

    get config() {
        return this._config;
    }

    set config(config) {
        this._config = config;
    }

    init() {
        this._app.use(bodyParser.urlencoded());
        this._app.use(bodyParser.json());

        this._app.post('/bot', (req, res, next) => {
            const telegramBotController = new TelegramBotController(req, res, this._config, this.battles);
            this.battles.getCommand(telegramBotController.getCommand());
        });

        this._app.listen(7881, function () {
            console.log('Application run. ' + new Date() + new Date().toISOString());
        });
    }
}
/**
 * Created by igor on 05.02.2018.
 */
