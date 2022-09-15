import db from "./db";
import Site from "./models/Site";
import Area from "./models/Area";

const dal = {
    getSites: function(id?: string){
        if (!id) return db.sites;
        else return db.sites.find((site: Site) => site.id === id);
    },
    getAreas: function(areaId?: string){
        if (!areaId) return db.areas;
        else return db.sites.filter((site: Site) => site.areaId === areaId);
    },
    deleteSite: function(id: string){
        const siteIndex = db.sites.findIndex((s) => s.id === id);
        db.sites.splice(siteIndex, 1);
        return { success: true };
    },
    createSite(name: string, areaId: string){
        const s = new Site(name, areaId);
        db.sites.push(s);
        return s;
    },
    createArea(name: string){
        db.areas.push(new Area(name));
    },
    findAreaId(name: string){
        const area: Area|undefined = db.areas.find((area: Area) => area.name === name);
        if (area) return area.id;
        else throw('Invalid area name');
    }
};

export default dal;