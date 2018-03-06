

export default class TelegramCommandParser {
    constructor(req, config) {
        this.command = {
            action: 'none',
            params: {}
        };
        let message = req.body.message ? req.body.message : req.body.edited_message;
        let userId = message.chat.id;
        //this._battleMapper = new BattleMapper();
        //let telegramBot = new TelegramBot(config.app.telegramBotToken);

        if (message.text.slice(0, 7) === '/battle') {
            this.command.action = 'createBattle';
            this.command.params.userId = userId;
        }

        if (message.text.slice(0, 5) === '/join') {
            this.command.action = 'joinBattle';
            let battleId = message.text.split(" ");
            if (battleId.length) {
                battleId = battleId[battleId.length - 1];
            } else {
                battleId = 0;
            }
            this.command.params.battleId = battleId;
        }

        if (message.text.slice(0, 7) === '/cancel') {
            this.command.action = 'cancelBattle';
        }
    }

    getCommand() {
        return this.command;
    }
}