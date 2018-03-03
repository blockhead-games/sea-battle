import request from 'request';

export default class TelegramBot {
    constructor(token) {
        this.token = token;
    }

    get token() {
        return this._token;
    }

    set token(token) {
        this._token = token;
    }

    sendMessage(id, message) {

    }

    sendImageByUrl(id, imageUrl) {

    }
}