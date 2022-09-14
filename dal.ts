import db from "./db";

export default  {
    getSites: function(id?: number){
        if (!id) {
            return db.sites;
        }
        else {
            return db.sites.find((site: any) => site.id === id);
        }
    },
    getAreas: function(){
        return db.areas;
    },
    deleteSite: function(id: number){
        const siteIndex = db.sites.findIndex((r) => r.id === id);
        db.sites.splice(siteIndex, 1);
        return { success: true };
    },
    createSite(name: string, areaId: number){
        const newSite = {
            id: db.sites.length + 1, // BUG: ids can be repeated after deleting sites
            name: name,
            areaId: areaId
        };
        db.sites.push(newSite);
        return newSite;
    }
};
