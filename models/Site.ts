const uuidv4 = require('uuid/v4');

export default class Site {
    id: string;
    name: string;
    areaId: string;
    constructor(name: string, areaId: string) {
        this.id = uuidv4();
        this.name = name;
        this.areaId = areaId;
    }
}