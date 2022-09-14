import db from "./db";
import Site from "./models/Site";

export default  {
    getSites: function(id?: string){
        if (!id) return db.sites;
        else return db.sites.find((site: Site) => site.id === id);
    },
    getAreas: function(){
        return db.areas;
    },
    deleteSite: function(id: string){
        const siteIndex = db.sites.findIndex((r) => r.id === id);
        db.sites.splice(siteIndex, 1);
        return { success: true };
    },
    createSite(name: string, areaId: string){
        const s = new Site(name, areaId);
        db.sites.push(s);
        return s;
    }
};


