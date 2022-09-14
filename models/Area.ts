const uuidv4 = require('uuid/v4');

export default class Area {
    id: string;
    name: string;
    constructor(name: string) {
        this.id = uuidv4();
        this.name = name;
    }
}