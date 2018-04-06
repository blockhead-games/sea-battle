
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
        request({
            uri: 'https://api.telegram.org/bot' + this.token + '/sendMessage',
            body: JSON.stringify({
                chat_id: id,
                text: message
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }}, function (error, response) {
        });
    }

    sendMarkdown(id, message) {
        request({
            uri: 'https://api.telegram.org/bot' + this.token + '/sendMessage',
            body: JSON.stringify({
                chat_id: id,
                text: message,
                parse_mode: 'Markdown'
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }}, function (error, response) {
        });
    }

    sendImageByUrl(id, imageUrl) {
        request({
            uri: 'https://api.telegram.org/bot' + this.token + '/sendPhoto',
            body: JSON.stringify({
                chat_id: id,
                photo: imageUrl
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }}, function (error, response) {
        });
    }
}