
export default class Battles {
    constructor() {
        this.battles = {};
        this.userList = {};
    }

    get battles() {
        return this._battles;
    }

    set battles(battles) {
        this._battles = battles;
    }

    getCommand(command) {
        let result = {
            error: 1,
            action: command.action ? command.action : "Unknown action",
            messages: {
                0: "Unknown command"
            }
        };
        switch (command.action) {
            case 'createBattle':
                let id = Math.random().toString().slice(2);
                if (!command.params.userId) {
                    result.error = 10;
                    result.messages = {
                        0: "Empty user Id"
                    };
                }

                if (this.userList[command.params.userId] && this.battles[this.userList[command.params.userId]]) {
                    result.error = 20;
                    result.messages = {
                        [command.params.userId]: "You already in battle: " + this.userList[command.params.userId]
                    };
                } else {
                    this.battles[id] = {
                        teamA: command.params.userId
                    };
                    this.userList[command.params.userId] = id;
                    result.error = 0;
                    result.messages = {
                        [command.params.userId]: "Battle created. Id - " + id
                    };
                }
                break;
            default:
                result.error = 1;
                result.messages = {
                    0: "Empty command"
                };
        }
        return result;
    }
}