import Site from "./models/Site";
import Area from "./models/Area";

const areas: Area[] = []; // Array of Areas
const sites: Site[] = []; // Array of Sites

const db = {
    sites: sites,
    areas: areas
};

export default db;
