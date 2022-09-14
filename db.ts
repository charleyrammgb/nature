import Site from "./models/Site";
import Area from "./models/Area";

const areas: Area[] = [];
const sites: Site[] = [];

function findAreaId(name: string){
    const area: Area|undefined = areas.find((area: Area) => area.name === name);
    if (area) return area.id;
    else throw('Invalid area name');
}


areas.push(new Area('North Norwich'));
areas.push(new Area('South Norwich'));
areas.push(new Area('East Norwich'));
areas.push(new Area('West Norwich'));

sites.push(new Site('Whitlingham Broad', findAreaId('North Norwich')));
sites.push(new Site('Mousehold Heath', findAreaId('North Norwich')));
sites.push(new Site('Plantation Garden', findAreaId('North Norwich')));
sites.push(new Site('Eaton Park', findAreaId('North Norwich')));


const db = {
    sites: sites,
    areas: areas
};

export default db;
