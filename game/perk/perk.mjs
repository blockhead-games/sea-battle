'use strict';

let field = 'foo';

export default class Perk {

    constructor(obj) {
        let {name, iconId} = obj;

        this.name = name;
        this.iconId = iconId;
    }
}