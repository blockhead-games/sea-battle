import {TelegramCommandParser} from '../telegram-bot';
import {TelegramBotController} from '../telegram-bot';
import bodyParser from 'body-parser';
import process from 'process';

const port = process.env.PORT || 3000;

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
        this._app.use(bodyParser.urlencoded({
            extended: true
        }));
        this._app.use(bodyParser.json());

        this._app.post('/bot', (req, res, next) => {
            const telegramCommandParser = new TelegramCommandParser(req, this._config, this.battles);
            let result = this.battles.getCommand(telegramCommandParser.getCommand());
            let telegramBotController = new TelegramBotController(res, this._config);
            telegramBotController.process(result);
        });

        this._app.listen(port, function () {
            console.log('Application run. ' + new Date().toISOString());
        });
    }
}
/**
 * Created by igor on 05.02.2018.
 */
