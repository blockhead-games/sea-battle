'use strict';

import express from 'express';
import bodyParser from 'body-parser'
import Battle from "./battle/battle.mjs";

const app = express()

const middleware = [
    bodyParser.urlencoded({extended: true})
    , bodyParser.json()
];

app.use(middleware);

const battles = {};

app.get('/', (req, res) => {
    res.send(layout())
})

app.get('/create/:uid/', (req, res) => {
    const uid = req.params.uid;
    const battleId = createBattle(uid);
    res.send(layout(uid, `<div>${battleId}</div>`))
})

app.post('/join/:uid/', (req, res) => {
    const uid = req.params.uid;
    const id = req.body.battle_id;

    if(battles[id]) {
        battles[id].players.push(uid);
        console.log(battles);
    }

    res.send(layout(uid))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

function layout(uid, content) {
    if (!uid) {
        uid = Math.ceil(Math.random() * 100)
    }

    const layout = `
<!DOCTYPE html>
<html>
<body>
<div><a href="/create/${uid}/">create</a></div>
<div>
<form action="/join/${uid}/" method="post">
<input type="text" name="battle_id">
<input type="submit" value="Join">
</form>
</div>
${content}
</body>
</html>
`
    return layout;
}

function createBattle(uid) {
    let battleId;

    do {
        battleId = Math.ceil(Math.random() * 1000)
    } while (battles[battleId])

    battles[battleId] = {
        battle: new Battle()
        , players: [uid]
    };

    console.log(battles)

    return battleId;
}