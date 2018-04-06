import {Battle} from '../../../game';

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
                        [command.params.userId]: "You already in battle: " + this.userList[command.params.userId] + "."
                    };
                } else {
                    this.battles[id] = new Battle();

                    this.battles[id].join(command.params.userId);

                    // this.battles[id] = {
                    //     teamA: command.params.userId,
                    //     teamB: 0
                    // };
                    this.userList[command.params.userId] = id;
                    result.error = 0;
                    result.messages = {
                        [command.params.userId]: "Battle created. Id - " + id + "."
                    };
                }
                break;
            case 'cancelBattle':
                if (this.userList[command.params.userId]) {
                    if (!this.battles[this.userList[command.params.userId]].teamB) {
                        delete this.battles[this.userList[command.params.userId]];
                        delete this.userList[command.params.userId];
                        result.error = 0;
                        result.messages = {
                            [command.params.userId]: "Battle was canceled."
                        };
                    } else {
                        result.error = 22;
                        result.messages = {
                            [command.params.userId]: "You can't cancel battle."
                        };
                    }
                } else {
                    result.error = 21;
                    result.messages = {
                        [command.params.userId]: "You aren't in battle."
                    };
                }
                break;
            case 'joinBattle':
                if (this.userList[command.params.userId]) {
                    result.error = 30;
                    result.messages = {
                        [command.params.userId]: "You already in battle (" + this.userList[command.params.userId] + "). Use /cancel before join."
                    };
                } else {
                    if (this.battles[command.params.battleId]) {

                        this.battles[command.params.battleId].join(command.params.userId);

                        result.error = 0;

                        result.messages = Object.assign({}, ...Object.values(this.battles[command.params.battleId].players).map(player => {
                            console.log(player);
                            return {[player.uid]: "The battle has started. Attack your enemy!"}
                        }));

                        // result.messages = {
                        //     [this.battles[command.params.battleId].players[command.params.userId]]: "The battle has started. Attack your enemy!"
                        // };

                        // this.battles[command.params.battleId].teamB = command.params.userId;
                        // result.error = 0;
                        // result.messages = {
                        //     [this.battles[command.params.battleId].teamA]: "The battle has started. Attack your enemy!",
                        //     [this.battles[command.params.battleId].teamB]: "The battle has started. Attack your enemy!"
                        // };
                        // result.images = {
                        //     [this.battles[command.params.battleId].teamA]: "https://cs.pikabu.ru/images/big_size_comm/2013-07_5/1374586586746.jpg",
                        //     [this.battles[command.params.battleId].teamB]: "https://cs.pikabu.ru/images/big_size_comm/2013-07_5/1374586586746.jpg"
                        // };
                    } else {
                        result.error = 31;
                        result.messages = {
                            [command.params.userId]: "Battle with id " + command.params.battleId + " doesn't exist"
                        };
                    }
                }
                break;
            case 'showList':
                let battles = "Battle list:\n";
                for (let battleId in this.battles) {

                    if (this.battles[battleId].canJoin()) {

                        if (this.battles[battleId].creator.uid === command.params.userId) {
                            battles += battleId + " (You in this battle)\n";
                        } else {
                            battles += battleId + "\n";
                        }

                    }
                }
                result.error = 0;
                result.messages = {
                    [command.params.userId]: battles
                };
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