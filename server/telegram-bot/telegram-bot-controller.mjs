
import {TelegramBot} from '../telegram-bot';

export default class TelegramBotController {
    constructor(res, config) {
        this.config = config;
        this.res = res;
        this.bot = new TelegramBot(config.app.telegramBotToken);
    }

    get config() {
        return this._config;
    }

    set config(config) {
        this._config = config;
    }

    get res() {
        return this._res;
    }

    set res(res) {
        this._res = res;
    }

    process(result) {
        switch (result.action) {
            case 'createBattle':
            case 'cancelBattle':
            case 'joinBattle':
            case 'showList':
                for (let userId in result.messages) {
                    if (result.messages.hasOwnProperty(userId) && userId) {
                        this.bot.sendMessage(userId, result.messages[userId]);
                    }
                }
                for (let userId in result.images) {
                    if (result.images.hasOwnProperty(userId) && userId) {
                        this.bot.sendImageByUrl(userId, result.images[userId]);
                    }
                }
                for (let userId in result.markdowns) {
                    if (result.markdowns.hasOwnProperty(userId) && userId) {
                        this.bot.sendMarkdown(userId, result.markdowns[userId]);
                    }
                }
                break;
            default:
        }
        this.res.status(200).json({});
        this.res.end();
    }
}