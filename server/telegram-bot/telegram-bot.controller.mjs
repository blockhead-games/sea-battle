import {TelegramBot} from './';

export default class TelegramBotController {
    constructor(req, res, config) {
        let message = req.body.message ? req.body.message : req.body.edited_message;
        let userId = message.chat.id;
        this._battleMapper = new BattleMapper();
        let telegramBot = new TelegramBot(config.app.telegramBotToken);

        if (message.text.slice(0, 7) === '/battle') {
            this._battleMapper.getActiveBattleByUserId(userId).then(function (battle) {
                if (battle.id) {
                    let message = '';

                    if (battle.status === 'PREPARE') {
                        message = 'You already in battle. Use /cancel to begin new battle.';
                    } else {
                        message = 'You already in battle. You will can create new battle after finish current battle.';
                    }

                    telegramBot.sendMessage(userId, message);
                } else {
                    // return create a battle;
                }
            }, function (error) {
                telegramBot.sendMessage(userId, "Error. Can't create battle.");
            });
            res.status(200).json({});
            res.end();
        }

        if (message.text.slice(0, 5) === '/join') {

        }

        if (message.text.slice(0, 7) === '/cancel') {

        }
    }
}