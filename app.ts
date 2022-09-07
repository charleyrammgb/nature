import fastify from "fastify";

const app = fastify({ logger: false });

const sites = [
    {
        "id": 1,
        "name": "Whitlingham Broad",
        "areaId": 3
    },
    {
        "id": 2,
        "name": "Mousehold Heath",
        "areaId": 1
    },
    {
        "id": 3,
        "name": "Plantation Garden",
        "areaId": 4
    },
    {
        "id": 4,
        "name": "Eaton Park",
        "areaId": 4
    }
];

const areas = {
    1: "North Norwich",
    2: "South Norwich",
    3: "East Norwich",
    4: "West Norwich"
};


app.get('/sites', async (request: any, reply: any) => {
    return sites;
});

app.get('/sites/:id', async (request: any, reply: any) => {
    return sites.find((site: any) => site.id === parseInt(request.params.id));
});

app.get('/areas', async (request: any, reply: any) => {
    return areas;
});

app.get('/areas/:areaId', async (request: any, reply: any) => {
    return sites.filter((r) => r.areaId === +request.params.areaId);
});

app.post('/sites/new', async (request: any, reply: any) => {
    const newSite = {
        id: sites.length + 1, // BUG: ids can be repeated after deleting sites
        name: request.body.name,
        areaId: request.body.areaId
    };
    sites.push(newSite);
    return newSite
});

app.post('/sites/:siteId/delete', async (request: any, reply: any) => {
    const siteId = +request.params.siteId;
    const siteIndex = sites.findIndex((r) => r.id === siteId);
    sites.splice(siteIndex, 1);
    return { success: true };
});

app.listen(3000, (err: any, address: any) => {
    console.log('started webserver', address);
});



